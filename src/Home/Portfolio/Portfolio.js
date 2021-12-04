import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

const Portfolio = () => {

    const serviceData = [
        {
            "id": 1,
            "name": "Bike-Point",
            "description": "MongoDB, Express, React, NodeJS (MERN), Firebase, Material UI.",
            "img": "https://i.ibb.co/zrzZVjP/bike-point.png",
            "liveSite": "https://bike-point-62385.web.app/"

        },
        {
            "id": 2,
            "name": "Health-Care",
            "description": "MongoDB, Express, React, NodeJS (MERN), Firebase, React Bootstrap.",
            "img": "https://i.ibb.co/Wspq1mf/health-care.png",
            "liveSite": "https://tourism-site-12e6c.web.app"
        },
        {
            "id": 3,
            "name": "Tourism-Site",
            "description": "React, Firebase, React Bootstrap, JSON Fake Data, Netlify Hosting.",
            "img": "https://i.ibb.co/8M4hGqd/tourism-site.png",
            "liveSite": "https://healthcare-website-monir07.web.app/"
        }
    ];

    return (
        <Container id="_portfolio" sx={{ my: 8 }}>
            <Typography sx={{ fontWeight: 'bold', my: 5, color: '#ff451b', textAlign: 'center' }} variant="h3" component="h2">
                Portfolio
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        serviceData.map(service =>
                            <Grid item xs={4} sm={4} md={4} key={service.id}>
                                <Service services={service} />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Portfolio;