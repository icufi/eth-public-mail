import React from 'react';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Input } from '@mui/material';

const styles = {
  box: {
    display: 'flex',
    flex: '.7',
    alignItems: 'center',
    backgroundColor: 'whiteSmoke',
    padding: '8px',
    borderRadius: '6px',
  },
  searchIcon: {
    color: 'grey'
  },
};

const HeaderCenter = () => {
  return (
    <Box sx={styles.box}>
      <SearchIcon sx={styles.searchIcon} />
      <Box sx={styles.input}>
        <Input placeholder='Search mail' type='text' />
      </Box>
      <ArrowDropDownIcon />
    </Box>
  );
};

export default HeaderCenter;
