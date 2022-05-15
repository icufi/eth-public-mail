import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

import ImageLogo from './ImageLogo';

const styles = {
  display: 'flex',
  mt: '8px',
  ml: '8px'

};

const HeaderLeft = () => {
  return (
    <Box sx={{...styles}}>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <ImageLogo />
    </Box>
  );
};

export default HeaderLeft;
