
import './InputContainer.css'

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function InputContainer() {
  return (
    <Paper
    style={{marginTop: "0px",}}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Reply to @Rohit Yadav"
        inputProps={{ 'aria-label': 'Type Message' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <AttachFileIcon />
      </IconButton>
    
      <IconButton  sx={{ p: '10px' }} aria-label="directions">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}