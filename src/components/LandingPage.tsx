import React from 'react';
import { Typography, Container } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
            Craig W Pitcher
        </Typography>
        <Typography variant="h5" gutterBottom>
            Senior Full-Stack Software Engineer
        </Typography>
    </Container>
  );
};

export default LandingPage;
