import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Badge, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 'auto',
  flexGrow: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
  };

  const handleSubMenuOpen = (event) => {
    setSubAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
            onClick={handleMenuOpen}
          >
            Categories
          </Typography>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleSubMenuOpen}>Clothes</MenuItem>
          <Menu
            anchorEl={subAnchorEl}
            open={Boolean(subAnchorEl)}
            onClose={handleSubMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Shoes</MenuItem>
            <MenuItem onClick={handleMenuClose}>Tops</MenuItem>
            <MenuItem onClick={handleMenuClose}>Bottoms</MenuItem>
          </Menu>
          <MenuItem onClick={handleMenuClose}>Electronics</MenuItem>
          <MenuItem onClick={handleMenuClose}>Accessories</MenuItem>
        </Menu>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <IconButton
          size="large"
          aria-label="show cart items"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

