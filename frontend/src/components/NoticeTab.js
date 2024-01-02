import { Grid, Paper, Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import MissingPersonGrid from './MissingPersonGrid';
import DataContextProvider from './Context';
import FoundPerson from './FoundPerson'

import MissingPerson from './MissingPerson';
import {useActionData, useNavigate } from 'react-router-dom';
import FaceTraceModal from './FaceTraceModal';
import Openpdf from './MissingPersonPDF'
import MissingComponent from './MissingComponent';


const NoticeTab = () => {
  

    const noticeTab = ['Missing Person Request', 'Missing Person', 'Found Person', 'FaceTrace Modal']
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const handleItemClick = (index) => {
      setSelectedItemIndex(index);
    };

    const renderComponent = () => {
      switch (selectedItemIndex) {
        case 0:
          return <MissingPersonGrid/>;
        
        case 1:
          return <MissingComponent />;
        case 2:
          return <FoundPerson/>;
        case 3:
          return < FaceTraceModal/>;
        default:
          return null;
      }
    };

  return (
    <>
    <Paper elevation={7} sx={{height:'40%', width:"80%", marginLeft:'auto', marginRight:'auto', backgroundColor:'white',mt:'60px'}} >
        <Box sx={{display:'flex', justifyContent:'space-between', paddingTop:'3%' }}>
   <Typography variant='h6' sx={{marginLeft:'3%'}} style={{color:'rgb(30, 127, 178)', fontWeight:'bolder'}}>Notices</Typography>
  
        </Box>
    <Grid sx={{ flexGrow: 1, marginTop: '10px' }} container spacing={2}>
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={3}>
        {noticeTab.map((noticetab, index) => (
           
          <Grid key={index}  item>
             <IconButton
             onClick={() => handleItemClick(index) }
             disableRipple={true}>
             
            <Paper
       
            sx={{
                
               
                '&:hover':{
                  backgroundColor: 'rgb(30, 127, 178)',
                  '& .icon, & .text': {
                    color: 'white',
                     
                  },
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', 
                  transform: 'translateY(-10px)'
        
                },
                height: '70px',
                width:'250px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                marginBottom:'2.5rem',
                transition: 'background-color 0.3s boxShadow 0.3s transform 0.5s',
                backgroundColor: 'transparent',
                transform: 'translateY(0)'
               
                

                
        }}
        >
                    
                        <CampaignIcon className='icon' style ={{ fontSize:'1.7rem', 
              }}
           sx={{color:'rgb(30, 127, 178)'}}
               
              />
                <Typography className='text'  variant='body2' sx={{marginLeft:'8%',color:'rgb(30, 127, 178)' }} style={{fontWeight:'bold'}}>{noticetab}</Typography>
               
                </Paper>
                </IconButton>

          </Grid>
        ))}
      </Grid>
    </Grid>
  
  </Grid>
  </Paper>
  {selectedItemIndex !== null && renderComponent()}
  </>
  )
}

export default NoticeTab