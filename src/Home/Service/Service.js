import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const img = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';
    return (
        <Card data-aos="zoom-in" elevation={8} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
};

export default Service;