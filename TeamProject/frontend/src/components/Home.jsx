import React from 'react'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';<ArrowDropDownIcon /> 
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
const Home = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICTK Internship Portal
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">CONTACTS US </Button>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Home