import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import BackpackIcon from '@mui/icons-material/Backpack';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import MenuItem from '@mui/material/MenuItem';
import { Fab } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HomeIcon from '@mui/icons-material/Home';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const pages = ['About Me', 'Resume', 'Portfolio', 'Service', 'Contact Me'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar sx={{ backgroundColor: 'white', boxShadow: "none", my: 3 }} position="sticky">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <DehazeIcon sx={{ color: 'black' }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <HashLink style={{ textDecoration: 'none', color: 'white' }} smooth to="/#_home">
                                <HomeIcon />
                            </HashLink>
                        </Fab>
                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <ArticleIcon sx={{ mr: 2 }} />
                            <HashLink style={{ textDecoration: 'none', color: 'white' }} smooth to="/#_aboutMe">
                                About Me
                            </HashLink>
                        </Fab>

                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <PermContactCalendarIcon sx={{ mr: 2 }} />
                            <HashLink style={{ textDecoration: 'none', color: 'white' }} smooth to="/#_resume">
                                Resume
                            </HashLink>
                        </Fab>

                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <BackpackIcon sx={{ mr: 2 }} />

                            <HashLink style={{ textDecoration: 'none', color: 'white' }} smooth to="/#_portfolio">
                                Portfolio
                            </HashLink>
                        </Fab>
                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <SettingsIcon sx={{ mr: 2 }} />

                            <HashLink style={{ textDecoration: 'none', color: 'white' }} smooth to="/#_service">
                                Services
                            </HashLink>

                        </Fab>
                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <EmailIcon sx={{ mr: 2 }} />
                            <HashLink style={{ textDecoration: 'none', color: 'white' }} smooth to="/#_contactMe">
                                Contact Me
                            </HashLink>
                        </Fab>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button sx={{ backgroundColor: '#ff451b' }} color="warning" variant="contained">
                            <DownloadIcon />
                            <a style={{ textDecoration: 'none', color: 'white' }}
                                href="https://drive.google.com/file/d/1d8wchJzQFdMn5clzzi9VTyyz3B92cOyL/view?usp=sharing"
                                target='_blank'
                                rel="noreferrer"
                                aria-label='Github'
                            >
                                Resume
                            </a>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

    )
};

export default Navbar;