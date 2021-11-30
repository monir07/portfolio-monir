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
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <ArticleIcon sx={{ mr: 2 }} />
                            About Me
                        </Fab>

                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <PermContactCalendarIcon sx={{ mr: 2 }} />
                            Resume
                        </Fab>

                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <BackpackIcon sx={{ mr: 2 }} />
                            Portfolio
                        </Fab>
                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <SettingsIcon sx={{ mr: 2 }} />
                            Service
                        </Fab>
                        <Fab sx={{ mx: 1, backgroundColor: '#ff451b', color: 'white' }} variant="extended" color="secondary" aria-label="add">
                            <EmailIcon sx={{ mr: 2 }} />
                            Contact Me
                        </Fab>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button sx={{ backgroundColor: '#ff451b' }} color="warning" variant="contained">
                            <DownloadIcon />
                            Resume
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
};

export default Navbar;