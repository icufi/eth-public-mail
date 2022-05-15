import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

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
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVN7m67yz_HQ1d_qFoT-V57Oc8BYwSV_YYG87frW16eRmezWlbFDNIFk0nTxPhdunCvg&usqp=CAU'
          alt='Gmail Logo'
        />
    </Box>
  );
};

export default HeaderLeft;
