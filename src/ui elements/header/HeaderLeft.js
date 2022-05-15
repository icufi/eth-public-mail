import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

import tempLogo from '../../assets/images/tempLogo.png'

const styles = {
    img: {
backgroundSize: 'contain',
height: '80px',
marginLeft: '8px'
    }
};

const HeaderLeft = () => {
  return (
    <Box sx={{...styles}}>
      <IconButton>
        <MenuIcon />
      </IconButton>
        <img
          src={tempLogo}
          alt='Gmail Logo'
        />
    </Box>
  );
};

export default HeaderLeft;
