import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageSwitcher from './LanguageSwitcher';

function ElevationScroll(props) {
  const { children, position } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  // Only apply scroll effect if navbar is fixed
  if (position !== 'fixed') {
    return children;
  }

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
      backdropFilter: trigger ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease-in-out',
    },
  });
}

const Navbar = ({ position = 'fixed' }) => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.about'), href: '/#about' },
    { label: t('nav.contact'), href: '/#contact' },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: 'background.default',
        height: '100%',
        pt: 4,
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{ position: 'absolute', right: 8, top: 8, color: 'primary.main' }}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          mb: 4,
          fontWeight: 700,
        }}
      >
        <Box component="span" sx={{ color: 'secondary.main' }}>
          CAR
        </Box>
        <Box component="span" sx={{ color: 'primary.main' }}>
          CODE
        </Box>
      </Typography>
      <Box sx={{ mb: 2 }}>
        <LanguageSwitcher />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={item.href.startsWith('/') ? Link : 'a'}
              to={item.href.startsWith('/') ? item.href : undefined}
              href={item.href.startsWith('/') ? undefined : item.href}
              sx={{
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(0, 206, 209, 0.1)',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <ElevationScroll position={position}>
        <AppBar position={position} sx={{ backgroundColor: position === 'static' ? 'background.default' : 'transparent' }}>
          <Toolbar sx={{ py: 1 }}>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                fontWeight: 700,
                mr: { md: 6 },
                textDecoration: 'none',
              }}
            >
              <Box component="span" sx={{ color: 'secondary.main' }}>
                CAR
              </Box>
              <Box component="span" sx={{ color: 'primary.main' }}>
                CODE
              </Box>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={item.href.startsWith('/') ? Link : 'a'}
                  to={item.href.startsWith('/') ? item.href : undefined}
                  href={item.href.startsWith('/') ? undefined : item.href}
                  sx={{
                    color: 'secondary.main',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(0, 206, 209, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <LanguageSwitcher />
            <IconButton
              color="inherit"
              aria-label={t('nav.openMenu')}
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: 'background.default',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;




