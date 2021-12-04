import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const scale = 'scale(1.3)';
    return (
        <Container>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <a style={{ textDecoration: 'none', color: 'black' }}
                        href="https://github.com/monir07"
                        target='_blank'
                        rel="noreferrer"
                        aria-label='Github'
                    >
                        <GitHubIcon sx={{ transform: scale, mr: 2 }} />
                    </a>
                    <a style={{ textDecoration: 'none', color: 'black' }}
                        href="https://www.linkedin.com/in/monirul-islam-25935b59/"
                        target='_blank'
                        rel="noreferrer"
                        aria-label='Github'
                    >
                        <LinkedInIcon sx={{ transform: scale, mr: 2 }} />
                    </a>
                </Box>
                <Typography sx={{ mb: 4, mt: 2 }} align="center" variant="body1" color="inherit">
                    Copyright © 2021 Portfolio-Monirul-Islam
                </Typography>
            </Box>
        </Container>
    );
};

export default Footer;