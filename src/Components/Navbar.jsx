import React, { useState } from 'react';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarContainer position="static">
      <Toolbar>
        <Typography variant={isMobile ? 'h6' : 'h5'} component="div" sx={{ flexGrow: 1 }}>
          Legal Portal
        </Typography>
        <Button color="inherit" onClick={handleMenuClick} endIcon={<ArrowDropDownIcon />}>
          Login
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem component={Link} to="/lawyer-login" onClick={handleClose}>Lawyer Login</MenuItem>
          <MenuItem component={Link} to="/consumer-login" onClick={handleClose}>Consumer Login</MenuItem>
        </Menu>
      </Toolbar>
    </NavbarContainer>
  );
}

export default Navbar;