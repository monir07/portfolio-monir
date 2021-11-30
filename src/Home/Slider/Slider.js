import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image1 from '../../Banner-img.png';

const Slider = () => {

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} md={8} sx={{ display: 'flex', alignItems: 'center', }}>
                        <Box sx={{ my: 8 }}>
                            <Typography sx={{ color: '#ff451b' }} variant="h4" component="h2">I'm</Typography>
                            <Typography sx={{ fontWeight: 'bold', mt: 2, color: '#ff451b' }} variant="h1" component="h2">
                                Monirul Islam
                            </Typography>

                            <Typography sx={{ fontWeight: 'bold', my: 2, color: '#9c9d9e' }} variant="h4" component="h2">
                                A passionate Full Stack Web Developer <br /> based in Khulna, Bangladesh
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} sx={{ display: 'flex', alignItems: 'center', }}>
                        <Box sx={{ my: 8 }}>
                            <img
                                src={`${image1}?w=161&fit=crop&auto=format`}
                                alt="main"
                                loading="lazy"
                                style={{ height: 'auto', width: '100%' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default Slider;