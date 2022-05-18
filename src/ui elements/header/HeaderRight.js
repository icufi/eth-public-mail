import React from 'react';
import { Box } from '@mui/system';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const styles = {
  icons: {
    pr: '60px',
  },
};

const HeaderRight = () => {
  return (
    <Box sx={styles.icons}>
      <AppsIcon />
      <NotificationsIcon />
      <AccountCircleIcon />
    </Box>
  );
};

export default HeaderRight;
