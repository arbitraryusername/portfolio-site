import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    mode: 'dark', // can be 'light' or 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Outer container to hold the fixed navbar and the scrollable content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
          }}
        >
          <Navbar />
          {/* Main content area that fills remaining space and scrolls if needed */}
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              mt: (theme) => theme.spacing(8), // Adjust this spacing to match navbar height
              p: 2,
            }}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/app-info" element={<div>App Info Page</div>} />
              <Route path="/projects" element={<div>Projects Page</div>} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
