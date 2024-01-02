import React from 'react';
import { useState, useEffect, useContext } from 'react';

import Grid from '@mui/material/Grid';
import { MissingPersonPDF } from './MissingPersonPDF';
import Paper from '@mui/material/Paper';
import CardComponent from './CardComponent';
import { DataContext } from './Context';
import { useNavigate } from 'react-router-dom';

import { Typography, Box, TextField } from '@mui/material';
import axios from 'axios';


const MissingPersonGrid = () => {

  const [peopleData, setPeopleData] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const [acceptedCards, setAcceptedCards] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 const filteredPeopleData = peopleData.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) || person.age.toString().includes(searchQuery)||  (person.gender.toLowerCase() === searchQuery.toLowerCase() &&
    ['male', 'female'].includes(searchQuery.toLowerCase()))
  );
  const onAccept = (id) => {
    if (!acceptedCards.includes(id)) {
      setAcceptedCards([...acceptedCards, id]);

      axios.post('http://localhost:8000/accept-person', { "id": id })
        .then(response => {
          // Handle successful response if needed
          console.log('ID accepted and sent to the backend:', id);
        })
        .catch(error => {
          // Handle error if the POST request fails
          console.error('Error accepting ID:', error);
        });


    }
    setPeopleData((prev) => [...prev.filter((i) => i.id !== id)])


  }




  useEffect(() => {
    fetch('http://localhost:8000/simulate-post/', {
      method: 'GET',

    })
      .then(response => response.json())
      .then(people_data => {
        setPeopleData(people_data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(peopleData)

  const onClose = (id) => {

    setPeopleData((prev) => [...prev.filter((i) => i.id !== id)])



  }

  return (
    <>


      <Paper elevation={7} sx={{ height: '40%', width: "80%", marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'white', mt: '60px' }} >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '3%' }}>
          <Typography variant='h6' sx={{ marginLeft: '3%' }} style={{ color: 'rgb(30, 127, 178)', fontWeight: 'bolder' }}>Missing Person Request</Typography>
          <TextField
            id="search-here"
            sx={{ marginRight: '8%', zIndex: 1 }}
            label="Search Here"

            variant="filled"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>
        <Grid sx={{ flexGrow: 1, marginTop: '10px' }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              {filteredPeopleData.map((value, index) => (

                <Grid key={index} item>

                {value.status == "Request" && (
                
                   
                        <CardComponent
                         person ={value}
                          onAccept={() => onAccept(value.id)}
                          onClose={() => onClose(value.id)}



                        />
                 
                      
                        )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </Paper>

    </>
  )
}

export default MissingPersonGrid