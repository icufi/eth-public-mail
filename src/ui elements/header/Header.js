import React from 'react';
import { Box } from '@mui/material';

import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid whiteSmoke',
};

const Header = () => {
  return (
    <Box sx={{ ...style }}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </Box>
  );
};

export default Header;
