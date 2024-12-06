import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
  
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off" 
    >
       <AppBar position="fixed" sx={{backgroundColor: 'orange',color: '#eeff41',}}>
        <Toolbar >
        <img
        src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
      
      <Typography variant="h1" component="div" sx={{ flexGrow: 1,textAlign:'center',color:'green' }}>
            <b>LOGIN</b>
          </Typography>
       </Toolbar>
       </AppBar>
   
          <div className='body-login'>
<TextField variant='outlined' type='email' label="Email"/>
       <br/><br/>
       <TextField variant='outlined' type='password' label="Password"/>
       <br/><br/>
       <Button variant='contained' color='success'>Login</Button> 
        
    </div>
   
    </Box>
  
  )
}

export default Login