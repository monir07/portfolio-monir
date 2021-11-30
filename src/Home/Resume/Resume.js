import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AlbumIcon from '@mui/icons-material/Album';
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const Resume = () => {
    const scale = 'scale(2)';
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 'bold', mt: 2, color: '#ff451b', textAlign: 'center' }} variant="h3" component="h2">
                    Resume
                </Typography>
                <Typography sx={{ fontWeight: 'bold', mt: 2 }} variant="h2" component="h2">
                    Combination of Skill<br /> & Experience
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
                            <AlbumIcon sx={{ transform: scale }} color="warning" />
                            <Typography sx={{ fontWeight: 'bold', ml: 3 }} variant="h4" component="h2">
                                Education
                            </Typography>
                        </Box>
                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h4" component="h2">
                                Computer Science & Engineering
                            </Typography>
                            <Typography sx={{ my: 2, color: '#9c9d9e' }} variant="h5" component="h2">
                                Northern University of Business and Technology
                            </Typography>
                            <Typography sx={{ my: 2, color: '#9c9d9e' }} variant="body1" component="span">
                                The goal of cognitive science is to understand the principles of intelligence with the hope that this will lead to better comprehension.
                            </Typography><br />
                            <Fab variant="extended" size="small" color="white" aria-label="add" sx={{ px: 3, my: 2 }}>
                                2016-2021
                            </Fab>
                        </Box>
                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h4" component="h2">
                                Computer Science & Engineering
                            </Typography>
                            <Typography sx={{ my: 2, color: '#9c9d9e' }} variant="h5" component="h2">
                                Northern University of Business and Technology
                            </Typography>
                            <Typography sx={{ my: 2, color: '#9c9d9e' }} variant="body1" component="span">
                                The goal of cognitive science is to understand the principles of intelligence with the hope that this will lead to better comprehension.
                            </Typography><br />
                            <Fab variant="extended" size="small" color="white" aria-label="add" sx={{ px: 3, my: 2 }}>
                                2016-2021
                            </Fab>
                        </Box>

                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h4" component="h2">
                                Computer Science & Engineering
                            </Typography>
                            <Typography sx={{ my: 2, color: '#9c9d9e' }} variant="h5" component="h2">
                                Northern University of Business and Technology
                            </Typography>
                            <Typography sx={{ my: 2, color: '#9c9d9e' }} variant="body1" component="span">
                                The goal of cognitive science is to understand the principles of intelligence with the hope that this will lead to better comprehension.
                            </Typography><br />
                            <Fab variant="extended" size="small" color="white" aria-label="add" sx={{ px: 3, my: 2 }}>
                                2016-2021
                            </Fab>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
                            <AlbumIcon sx={{ transform: scale }} color="warning" />
                            <Typography sx={{ fontWeight: 'bold', ml: 3 }} variant="h4" component="h2">
                                Personal Skills
                            </Typography>
                        </Box>
                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold', my: 2 }} variant="h5" component="h2">
                                Time Management
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={90} />

                            <Typography sx={{ fontWeight: 'bold', my: 2 }} variant="h5" component="h2">
                                Efficiency
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={60} />

                            <Typography sx={{ fontWeight: 'bold', my: 2 }} variant="h5" component="h2">
                                Integrity
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
                            <AlbumIcon sx={{ transform: scale }} color="warning" />
                            <Typography sx={{ fontWeight: 'bold', ml: 3 }} variant="h4" component="h2">
                                Technical Skills
                            </Typography>
                        </Box>
                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold', my: 2, }} variant="h5" component="h2">
                                Frontend Development
                            </Typography>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                HTML
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                CSS
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                JavaScript
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                React
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Material Ui
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Bootstrap
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                TailwindCSS
                            </Fab>
                        </Box>

                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold', my: 2, }} variant="h5" component="h2">
                                Backend Development
                            </Typography>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Django
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Node JS
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Express JS
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                REST Api
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Postgre sql
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Sqlite
                            </Fab>
                            <Fab sx={{ px: 2, m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                MongoDB
                            </Fab>
                        </Box>

                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold', my: 2, }} variant="h5" component="h2">
                                Design Tools
                            </Typography>
                            <Fab sx={{ px: 2, mx: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Photoshop
                            </Fab>
                            <Fab sx={{ px: 2, mx: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Illustrator
                            </Fab>
                            <Fab sx={{ px: 2, mx: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Figma
                            </Fab>
                        </Box>
                        <Box sx={{ my: 6 }}>
                            <Typography sx={{ fontWeight: 'bold', my: 2, }} variant="h5" component="h2">
                                IOT Technology
                            </Typography>
                            <Fab sx={{ px: 2, mx: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Arduino
                            </Fab>
                            <Fab sx={{ px: 2, mx: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                                Rasberry Pi
                            </Fab>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default Resume;