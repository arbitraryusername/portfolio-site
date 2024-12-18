import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material';

function AboutPage(): React.ReactElement {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* About Me Section */}
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I’m a senior full-stack engineer with over a decade of experience in building scalable web 
          applications. I’m passionate about writing maintainable code and crafting user-friendly 
          interfaces that solve real problems.
        </Typography>
      </Box>

      {/* Software Interests Section */}
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Software Interests
        </Typography>
        <Typography variant="body1" paragraph>
          I enjoy exploring emerging technologies, from the latest frontend frameworks to 
          cutting-edge serverless architectures. I’m always looking to broaden my skillset and 
          leverage modern tools to build efficient, reliable, and elegant solutions.
        </Typography>
      </Box>

      {/* Favorite Dev Tools Section */}
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Favorite Dev Tools
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Visual Studio Code" 
              secondary="A versatile, extensible code editor that boosts productivity." 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Git & GitHub" 
              secondary="For managing source code versions and collaborating with peers." 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Docker" 
              secondary="To create reproducible, containerized environments for smooth development and deployment." 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Postman" 
              secondary="For testing APIs quickly and documenting endpoints effortlessly." 
            />
          </ListItem>
        </List>
      </Box>

      {/* Hobbies Section */}
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Hobbies
        </Typography>
        <Typography variant="body1" paragraph>
          Away from the keyboard, I’m an avid guitarist, a beginner chef experimenting with global 
          cuisines, and a nature enthusiast who enjoys weekend hikes. These pursuits help me stay 
          creative, curious, and balanced in both my personal and professional life.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutPage;
