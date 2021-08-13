import React from 'react'
import { Grid, useTheme, Typography,Box,Button, IconButton } from '@material-ui/core'

import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const heroBoxProps = {
  mt:{xs:4,md:10},
  px:{xs:2,md:12}
}

export default function HeroSection() {
  const theme = useTheme()
  return (
    <Grid container style={{color:theme.palette.primary.contrastText}} >
      <Grid item xs={11} container justifyContent="center" alignItem="center" direction="column">
        <Box {...heroBoxProps}>
          <Typography variant="h1" align="center">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          </Typography>
        </Box>

        <Box {...heroBoxProps}>
          <Typography variant="h6" align="center">
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </Typography>

        </Box>
        <Grid component={Box} {...heroBoxProps} container item justifyContent="center" alignItems="center">
          <Box mx={2}>
            <Button variant="contained" color="secondary">
                Already an MM member
            </Button>
          </Box>

          <Box mx={2}>
            <Button variant="outlined" color="secondary">
                Join Discord channel
            </Button>

          </Box>
        </Grid>
        
      </Grid>
      <Grid component={Box} alignItems="center" justifyContent="space-evenly" mt={heroBoxProps.mt} item xs={1} container direction="column"> 
          <IconButton color="secondary">
              <YouTubeIcon color="secondary" />
          </IconButton>
          <IconButton color="secondary">
              <FacebookIcon color="secondary" />
          </IconButton>
          <IconButton color="secondary">
              <InstagramIcon color="secondary" />
          </IconButton>
      </Grid>
    </Grid>
  )
}
