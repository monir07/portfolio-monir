import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Fab } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    // aos initialization
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const scale = 'scale(2)';


    const sendEmail = (e) => {
        e.preventDefault();
        // const data = new FormData(e.currentTarget);
        // const name = data.get('name');
        // console.log(name);
        emailjs.sendForm('service_v0h9psk', 'template_c892p2s', e.target, 'user_KJRjRBh3i5yrQRxsBMrRc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <Container id="_contactMe">
            <Typography sx={{ fontWeight: 'bold', my: 8, color: '#ff451b', textAlign: 'center' }} variant="h3" component="h2">
                Contact Me
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid data-aos="fade-right" item xs={4} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
                        <PhoneIphoneIcon sx={{ transform: scale, mr: 3, my: 2 }} color="warning" />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="h2">
                                Call Me
                            </Typography>
                            <Typography color="#8b8b8b" variant="span" component="span">
                                +880-1713-925803
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
                        <MailIcon sx={{ transform: scale, mr: 3, my: 2 }} color="warning" />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="h2">
                                Email Me
                            </Typography>
                            <Typography color="#8b8b8b" variant="span" component="span">
                                monirulslm7@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
                        <LocationOnIcon sx={{ transform: scale, mr: 3, my: 2 }} color="warning" />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="h2">
                                Address
                            </Typography>
                            <Typography color="#8b8b8b" variant="span" component="span">
                                Khulna, Bangladesh
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} md={8}>
                    <Box data-aos="fade-left" sx={{ flexGrow: 1 }} component="form" onSubmit={sendEmail}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6}>
                                <TextField sx={{ mr: 1 }} fullWidth id="fullWidth" label="Your Name" variant="outlined" name="name" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField sx={{ mr: 1 }} fullWidth id="fullWidth" label="Your Email" variant="outlined" email="email" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField sx={{ mr: 1 }} fullWidth id="fullWidth" label="Your Phone" variant="outlined" phone="phone" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField sx={{ mr: 1 }} fullWidth id="fullWidth" label="Subject" variant="outlined" subject="subject" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    sx={{ mr: 1, }}
                                    id="outlined-textarea"
                                    label="Your Message Here"
                                    placeholder="Placeholder"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    message="message"
                                />
                            </Grid>
                        </Grid>
                        <Fab sx={{ px: 5, my: 2 }} variant="extended" type="submit" color="primary" aria-label="add">
                            Submit
                        </Fab>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default ContactMe;