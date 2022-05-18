import React from 'react';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TextField } from '@mui/material';

const styles = {
  box: {
    display: 'flex',
    flex: '.7',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'whiteSmoke',
    padding: '8px',
    borderRadius: '6px',
  },
  searchIcon: {
    color: 'grey',
  },
};

const HeaderCenter = () => {
  return (
    <Box sx={styles.box}>
      <SearchIcon sx={styles.searchIcon} />
      <TextField
        sx={styles.textField}
        fullWidth
        variant='standard'
        placeholder='Search mail'
        InputProps={{ disableUnderline: true }}
      />
      <ArrowDropDownIcon />
    </Box>
  );
};

export default HeaderCenter;
