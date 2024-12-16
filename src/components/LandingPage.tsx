import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h2" gutterBottom>
                    Craig Pitcher
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Senior Full-Stack Software Engineer
                </Typography>
                <Box mt={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ margin: 1 }}
                        component={Link}
                        to="/about"
                    >
                        About Me
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ margin: 1 }}
                        component={Link}
                        to="/app-info"
                    >
                        App Info
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ margin: 1 }}
                        component={Link}
                        to="/projects"
                    >
                        Projects
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ margin: 1 }}
                        href="https://www.linkedin.com/in/craig-w-pitcher/"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ margin: 1 }}
                        href="https://github.com/arbitraryusername"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Box>
            </Container>

            <Box sx={{ width: '100%', height: 300, marginTop: 4 }}>
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="blue" />
                    </Sphere>
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </Box>
        </Box>
    );
};

export default LandingPage;