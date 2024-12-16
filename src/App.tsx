import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import LandingPage from './components/LandingPage';

const theme = createTheme({
  palette: {
    mode: 'dark', // can be 'light' or 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/app-info" element={<div>App Info Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
