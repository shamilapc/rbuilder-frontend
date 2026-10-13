import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

function Header() {
  const about = "A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <img src="/Gemini_Generated_Image_3hf9iw3hf9iw3hf9-removebg-preview.png" alt="" width={'60'} />
            rBuilder
          </Typography>

          <Tooltip title={about}>
            <Button color="inherit" sx={{fontWeight:'bold'}}>ABOUT US</Button>
          </Tooltip>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header