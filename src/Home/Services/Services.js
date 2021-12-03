import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

const Services = () => {

    const serviceData = [
        {
            "id": 1,
            "name": "Sports & Orthopaedics",
            "description": "Our orthopaedic specialists and occupational therapists provide all-rounded treatment of knee, spine, hip and other sports and orthopaedic injuries.",
            "img": "https://www.mountelizabeth.com.sg/images/default-source/banner/tmb_geh_meh_peh/tmbphase2_ortho_v01.jpg"
        },
        {
            "id": 2,
            "name": "Heart",
            "description": "Mount Elizabeth hosts the largest concentration of heart specialists in the Asia Pacific region. Equipped with modern technology and world-class facilities, we offer patients renewed possibilities in managing heart health.",
            "img": "https://www.mountelizabeth.com.sg/images/default-source/banner/tmb_phase-3/thumbnails/tmbphase3_gensurgery_v01.jpg"
        },
        {
            "id": 3,
            "name": "Cancer",
            "description": "Our broad range of diagnostic tests, advanced chemotherapy and radiation treatment, counselling services and dedicated palliative care and support services provide a holistic care environment for positive outcomes.",
            "img": "https://www.mountelizabeth.com.sg/Sitefinity/WebSiteTemplates/ParkwayTemplate/App_Themes/ParkwayTheme/Images/en/centre-excellence/07_186481191.jpg"
        },
        {
            "id": 4,
            "name": "Maternity",
            "description": "With a multidisciplinary team of obstetricians, fertility specialists, nurses, lactation consultants and a wide range of amenities, to give you advice, support, and peace of mind",
            "img": "https://www.mountelizabeth.com.sg/images/default-source/default-album/maternity-journey.jpg"
        },
        {
            "id": 5,
            "name": "Gastroenterology",
            "description": "The Gastroenterology Centre unites gastroenterology, hepatology, colorectal and hepato-pancreato-biliary surgery together with nutrition, to optimise recovery.",
            "img": "https://www.mountelizabeth.com.sg/images/default-source/default-album/06_186481198_v2.jpg?sfvrsn=7f5bcd11_2"
        }
    ];

    return (
        <Container id="_service" sx={{ my: 5 }}>
            <Typography sx={{ fontWeight: 'bold', my: 5, color: '#ff451b', textAlign: 'center' }} variant="h3" component="h2">
                My Services
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        serviceData.map(service =>
                            <Grid item xs={4} sm={4} md={4} key={service.id}>
                                <Service />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Services;