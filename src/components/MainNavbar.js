import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Container, Toolbar, Typography,Grid,useTheme, Button, Divider } from '@material-ui/core';
import Logo from './Logo';






const MainNavbar = (props) => {
  const theme = useTheme()

  return (
    <AppBar
      elevation={0}
      {...props}
    >
      
      <Container maxWidth="lg" >
        <Toolbar sx={{ height: 64 }}>
          <Grid container  alignItems="center">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
            <Box ml={{lg:'40vw'}} display={{ xs: 'none', md: 'block' }}>
              <RouterLink to="about" style={{color:theme.palette.primary.contrastText}}>
                <Typography variant="body1">
                  About Us
                </Typography>
              </RouterLink>
              
            </Box>

            <Box ml={4} display={{ xs: 'none', md: 'block' }}>
              <RouterLink to="/">
                <Typography variant="body1" style={{color:theme.palette.primary.contrastText}}>
                  Pricing
                </Typography>
              </RouterLink>

            </Box>
            {/* <Box ml={4} display={{ xs: 'none', md: 'block' }}>
              <RouterLink to="support">
                <Typography variant="body1" style={{color:theme.palette.primary.contrastText}}>
                  Support
                </Typography>
              </RouterLink>
            </Box>
            <Box ml={4} display={{ xs: 'none', md: 'block' }}>
              <RouterLink to="checkout">
                <Typography variant="body1" style={{color:theme.palette.primary.contrastText}}>
                  Checkout
                </Typography>
              </RouterLink>

            </Box> */}
            {/* <Box ml={4} display={{ xs: 'none', md: 'block' }}>
              <RouterLink to="subscriberlist">
                <Typography variant="body1" style={{color:theme.palette.primary.contrastText}}>
                 Subscription
                </Typography>
              </RouterLink>

            </Box> */}
            <Box ml={4} display={{ xs: 'none', md: 'block' }}>
              <RouterLink to="/">
                <Typography variant="body1" style={{color:theme.palette.primary.contrastText}}>
                  Contact Us
                </Typography>
              </RouterLink>

            </Box>
            <Box ml={4} display={{ xs: 'none', md: 'block' }}>
              <Button variant="contained" color="secondary" >
                Create an Account
              </Button>

            </Box> 

            <Box ml={2} display={{ xs: 'none', md: 'block' }}>
              <Button variant="outlined" color="secondary" >
                Login
              </Button>

            </Box>
  
          </Grid>
  
          
        </Toolbar>
  
      </Container>
      <Divider style={{backgroundColor:theme.palette.secondary.main}} />
    </AppBar>
  );
}

export default MainNavbar;
