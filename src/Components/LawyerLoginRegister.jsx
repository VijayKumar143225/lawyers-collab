import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LawyerLoginRegister({ title }) {
  const [otpOpen, setOtpOpen] = useState(false);
  const navigate = useNavigate();


  const handleRegister = () => {
    setOtpOpen(true);
  };

  const handleOtpClose = () => {
    setOtpOpen(false);
    if (title === 'lawyer') {
      navigate('/lawyer-login');
    } else {
      navigate('/consumer-login');
    }
  };
  

  return (
    <Container maxWidth="xs" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          {title === 'lawyer' ? 'Lawyer Register Page' : 'Consumer Register Page'}
        </Typography>
        <TextField fullWidth label="First Name" margin="normal" />
        <TextField fullWidth label="Last Name" margin="normal" />
        <TextField fullWidth label="Mobile Number" margin="normal" />
        {title === 'lawyer' && (
          <>
            <TextField fullWidth label="Bar Council ID" margin="normal" />
            <TextField fullWidth label="Experience" margin="normal" />
            <TextField fullWidth label="Specialization" margin="normal" />
          </>
        )}
        <TextField fullWidth label="Email ID" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <TextField fullWidth label="Confirm Password" type="password" margin="normal" />
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>Register</Button>
        </Box>
      </Box>
      <Dialog open={otpOpen} onClose={handleOtpClose}>
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="OTP" margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOtpClose} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
export default LawyerLoginRegister;