import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Profile from './components/profile/Profile';
import Form from './components/form/Form';
import './App.css';


function App() {


  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={12}>
          <Grid xs={8}>

            <Profile />

          </Grid>
          <Grid xs={4}>

            <Form />

          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default App
