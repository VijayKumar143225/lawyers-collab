import React, { useState } from 'react';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Legal Portal
        </Typography>
        <Button color="inherit" onClick={handleMenuClick}>
          Login
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/lawyer-login" onClick={handleClose}>Lawyer Login</MenuItem>
          <MenuItem component={Link} to="/consumer-login" onClick={handleClose}>Consumer Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;