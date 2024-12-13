import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  CssBaseline,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LogoIcon from '@mui/icons-material/Gavel';
import { styled } from '@mui/system';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f4f4f4',
}));

const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#333',
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
}));

const SearchBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #ccc',
  flexGrow: 1,
  maxWidth: '400px',
}));

const Sidebar = styled(Drawer)(({ theme }) => ({
  width: '240px',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: '240px',
    backgroundColor: '#222',
    color: '#fff',
    transition: 'transform 0.3s ease',
  },
}));

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),
}));

const Footer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#f4f4f4',
}));

function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log('Search Query:', searchQuery);
  };

  const handleLogout = () => {
    console.log('User logged out'); // Implement logout functionality
  };

  return (
    <MainContainer>
      <CssBaseline />
      {/* Navbar */}
      <Navbar>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <LogoIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
            Legal Portal
          </Typography>
          <SearchBox>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearch}
              style={{ flex: 1, paddingLeft: '8px' }}
            />
            <IconButton type="button" style={{ color: '#007bff' }}>
              <SearchIcon />
            </IconButton>
          </SearchBox>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              marginLeft: '20px',
              backgroundColor: '#ff4d4d',
              color: '#fff',
              textTransform: 'none',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#e43d3d',
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </Navbar>

      {/* Sidebar */}
      <Sidebar
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button onClick={() => console.log('Home clicked')}>
            <ListItemIcon style={{ color: '#fff' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => console.log('About Us clicked')}>
            <ListItemIcon style={{ color: '#fff' }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button onClick={() => console.log('Contact clicked')}>
            <ListItemIcon style={{ color: '#fff' }}>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Sidebar>

      {/* Main Content */}
      <Content>
        <Typography variant="h4" gutterBottom>
          Welcome to the Legal Portal
        </Typography>
        <Typography variant="body1">
          This is your home page where you can access legal resources, manage your cases, and more. Use the sidebar to
          navigate.
        </Typography>
      </Content>

      {/* Footer */}
      <Footer>
        <Typography variant="body2" sx={{ color: 'black' }}>
          © 2024 Legal Portal. All rights reserved.
        </Typography>
      </Footer>
    </MainContainer>
  );
}

export default HomePage;