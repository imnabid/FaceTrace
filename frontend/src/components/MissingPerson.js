import React, { useState, useEffect } from 'react'
import CardComponent from './CardComponent';
import MissingComponent from './MissingComponent'
import { Grid, Paper } from '@mui/material';

const MissingPerson = () => {
  const [peopleData, setPeopleData] = useState([])

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

  return (
  <>
      <MissingComponent
       
        title="Missing Person"  />


 
      <Grid sx={{ flexGrow: 1, marginTop: '10px' }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {peopleData.map((value, index) => (

              <Grid key={index} item>

                <Paper
                  elevation={5}
                  sx={{
                    height: 420,
                    width: 250,
                    backgroundColor: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'



                  }}

                >
                  <CardComponent
                    person={value}

                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>
      </>

      )
}

      export default MissingPerson