import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'About Me', path: '/about' },
    { label: 'App Info', path: '/app-info' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        {/* Logo or Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Craig Pitcher
        </Typography>

        {/* Desktop Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={item.path}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {item.label}
              </Typography>
            ))}
            {/* Social Media Icons */}
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/craig-w-pitcher/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/arbitraryusername"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={handleMenuClose}
                  component="a"
                  href={item.path}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem
                component="a"
                href="https://www.linkedin.com/in/craig-w-pitcher/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </MenuItem>
              <MenuItem
                component="a"
                href="https://github.com/arbitraryusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
