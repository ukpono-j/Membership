import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid, Typography,useTheme } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';


function SectionCard(props) {
  const theme = useTheme()
  return (
    <Grid container style={{color:theme.palette.primary.contrastText}}>
      <Grid item container justifyContent="flex-start" alignItems="center">
        <Box mr={2}>
            <DonutLargeIcon  color="secondary" fontSize="large" />
        </Box>
        <Typography variant="h4" color="secondary">
          FEATURES
        </Typography>
      </Grid>

      <Box my={3}>
        <Typography  variant="h1">
          Be a Captian
        </Typography>

      </Box>
      <Box pr={30}>
        <Typography variant="h5">
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Typography>

      </Box>
      <Box mt={3} >
        <Button variant="outlined" color="secondary">
          Learn More
        </Button>
      </Box>
      
    </Grid>
  )
}

SectionCard.propTypes = {

}

export default SectionCard

