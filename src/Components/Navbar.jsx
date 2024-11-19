import React, { useState } from 'react';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';


function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Legal Portal
        </Typography>
        <Button style={{color:'AppWorkspace'}} onClick={handleMenuClick} endIcon={<ArrowDropDownIcon />}>
          Login
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem component={Link} to="/lawyer-login" onClick={handleClose}>Lawyer Login</MenuItem>
          <MenuItem component={Link} to="/consumer-login" onClick={handleClose}>Consumer Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;