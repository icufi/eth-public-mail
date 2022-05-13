import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

const style = {};

const HeaderLeft = () => {
  return (
    <Box sx={{ ...style }}>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <img
        src=''
        alt=''
      />
    </Box>
  );
};

export default HeaderLeft;
