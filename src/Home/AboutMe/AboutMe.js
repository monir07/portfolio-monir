import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image1 from '../../Banner-img.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Container id="_aboutMe">
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 'bold', mt: 4, color: '#ff451b', textAlign: 'center' }} variant="h3" component="h2">
                    About Me
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', }}>
                        <Box data-aos="fade-right">
                            <img
                                src={`${image1}?w=161&fit=crop&auto=format`}
                                alt="main"
                                loading="lazy"
                                style={{ height: 'auto', width: '100%' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', }}>

                        <Box data-aos="fade-left">
                            <Typography sx={{ fontWeight: 'bold', mt: 2 }} variant="h2" component="h2">
                                Full-Stack Developer
                            </Typography>

                            <Typography sx={{ my: 2 }} variant="h5" component="h2">
                                A passionate Full Stack Web Developer <br /> based in Khulna, Bangladesh
                            </Typography>
                            <Typography sx={{ my: 2, color: '#9c9d9e' }} variant="body1" component="span">
                                Hi! My name is Monirul Islam. I am Full Stack web developer, and I'm very passionate and dedicated to my work. I am proficient in working with both front-end and back-end coding languages. With my diverse skill set, I'm able to work on every step of the web development process, including prototyping and programming browsers, servers, and databases. I have acquired the skills and knowledge necessary to make your project a success.
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default AboutMe;