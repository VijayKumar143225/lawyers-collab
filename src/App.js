import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LawyerLogin from './Components/LawyerLogin';
import ConsumerLogin from './Components/ConsumerLogin';
import LawyerLoginRegister from './Components/LawyerLoginRegister';
import ConsumerLoginRegister from './Components/ConsumerLoginRegister';
import HomePage from './Components/Pages/HomePage';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { styled } from '@mui/system';





// Create a theme
const theme = createTheme();

const AppContainer = styled(Box)({
  backgroundImage: 'url(https://www.google.co.in/imgres?q=lawyer%20decent%20background%20images&imgurl=https%3A%2F%2Fst4.depositphotos.com%2F11249622%2F31374%2Fi%2F450%2Fdepositphotos_313741500-stock-photo-law-justice-symbols-wooden-table.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Flaw-background.html&docid=2gP9UXGzUVoGuM&tbnid=LulxQfHPjUEiJM&vet=12ahUKEwjkzLiG7eqJAxXsT2wGHY1lJ7UQM3oECGUQAA..i&w=600&h=337&hcb=2&itg=1&ved=2ahUKEwjkzLiG7eqJAxXsT2wGHY1lJ7UQM3oECGUQAA)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100%',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/lawyer-login" element={<LawyerLogin title="Lawyer Login" />} />
            <Route path="/consumer-login" element={<ConsumerLogin title="Consumer Login" />} />
            <Route path="/lawyer-register" element={<LawyerLoginRegister title="Lawyer Register Page" />} />
            <Route path="/consumer-register" element={<ConsumerLoginRegister title="Consumer Register Page" />} /> */}
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;