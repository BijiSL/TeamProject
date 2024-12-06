import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
const Home = () => {
  return (
    <div className='background-container'>
          <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" sx={{backgroundColor: '#00a152',color: '#eeff41',}}>
        <Toolbar >
        <img
        src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'left'}}>
            ICTK Internship Portal
          </Typography>
          <Button color="inherit"sx={{fontSize:'15px'}}><h3>HOME</h3></Button>
          <Button color="inherit" sx={{fontSize:'15px'}}><h3>CONTACTS </h3> </Button>
          <Button color="inherit" sx={{fontSize:'15px'}} a href='/login'><h3>LOGIN</h3></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Home