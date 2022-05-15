import React from 'react';
import { Box } from '@mui/material';

import tempLogo from '../../assets/images/tempLogo.png';

const style = {
  img: {
    height: '40px',
    mt: '3px',
    ml: '4px'
  },
};

const ImageLogo = () => {
  return (
    <Box sx={{...style}}>
      <img src={tempLogo} alt='temporary logo' />
    </Box>
  );
};

export default ImageLogo;
