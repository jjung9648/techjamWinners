import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [selected, setSelected] = useState('For You');

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box display="flex" alignItems="center" width="100%">
          <Button
            sx={{ mr: 2, fontWeight: selected === 'Live' ? 'bold' : 'normal' }}
            color="inherit"
            onClick={() => setSelected('Live')}
          >
            Live
          </Button>
          <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
            <Button
              sx={{ mx: 2, fontWeight: selected === 'Following' ? 'bold' : 'normal' }}
              color="inherit"
              onClick={() => setSelected('Following')}
            >
              Following
            </Button>
            <Button
              sx={{ mx: 2, fontWeight: selected === 'For You' ? 'bold' : 'normal' }}
              color="inherit"
              onClick={() => setSelected('For You')}
            >
              For You
            </Button>
          </Box>
          <IconButton edge="end" color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

