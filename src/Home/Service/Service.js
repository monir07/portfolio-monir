import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = ({ services }) => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const { name, description, img, liveSite } = services;
    return (
        <Card data-aos="zoom-in" elevation={8} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                    alt="green iguana"
                    sx={{ width: "100%", height: 'auto', display: 'block', margin: 'auto' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Button sx={{ backgroundColor: '#ff451b', mt: 2, mr: 2 }} color="warning" variant="contained">
                        {/* <DownloadIcon /> */}
                        <a style={{ textDecoration: 'none', color: 'white' }}
                            href={liveSite}
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Github'
                        >
                            Live Site
                        </a>
                    </Button>

                    <Button sx={{ backgroundColor: '#ff451b', mt: 2 }} color="warning" variant="contained">
                        {/* <DownloadIcon /> */}
                        Details
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card >
    );
};

export default Service;