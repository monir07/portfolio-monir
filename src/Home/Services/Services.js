import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const serviceImage = [
        {
            "id": 1,
            "name": "React",
            "img": "https://i.ibb.co/Y8JbB1W/react.png"
        },
        {
            "id": 2,
            "name": "Django",
            "img": "https://i.ibb.co/FBSMKxk/Django.png"
        },
        {
            "id": 3,
            "name": "Python",
            "img": "https://i.ibb.co/J2ddvqR/python.png"
        },
        {
            "id": 4,
            "name": "Material UI",
            "img": "https://i.ibb.co/BLVnwZJ/materialui.png"
        },
        {
            "id": 5,
            "name": "Node Js",
            "img": "https://i.ibb.co/v4jqTW6/nodejs.png"
        },
        {
            "id": 6,
            "name": "Mongo DB",
            "img": "https://i.ibb.co/KhP9PXX/mongodb.png"
        },
        {
            "id": 7,
            "name": "PostgreSql",
            "img": "https://i.ibb.co/WvdGwqf/postgresql.png"
        },
        {
            "id": 8,
            "name": "TailwindCSS",
            "img": "https://i.ibb.co/3FvG1YF/tailwindcss.png"
        }
    ];

    return (
        <Container id="_service">
            <Typography sx={{ fontWeight: 'bold', my: 8, color: '#ff451b', textAlign: 'center' }} variant="h3" component="h2">
                Service
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                    {
                        serviceImage.map(service =>
                            <Grid item xs={2} sm={4} md={3} key={service.id}>
                                <Paper data-aos="zoom-in" elevation={0}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={service.img}
                                        alt="green iguana"
                                        sx={{ width: "50%", height: 'auto', display: 'block', margin: 'auto' }}
                                    />
                                    <Typography align="center" gutterBottom variant="subtitle2" component="h2" color="gray">
                                        {service.name}
                                    </Typography>
                                </Paper>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;