import React from 'react'
import PropTypes from 'prop-types'
import WhatWeDoCard from '../Cards/WhatWeDoCard'
import { Grid,useTheme, Typography, Box } from '@material-ui/core'



function WhatWeDoSection(props) {
  const theme = useTheme()
  return (
    <Box style={{color:theme.palette.primary.contrastText}} >
      <Box my={5}>
        <Typography textAlign="center" variant="h1">
            What we do
        </Typography>
      </Box>

      <Grid 
      container 
      
      justifyContent="center" 
      alignItems="center" 
      >
        
        <Grid item xs={12} md={3} >
          <WhatWeDoCard />

        </Grid>

        <Grid item xs={12} md={3}>
          <WhatWeDoCard />

        </Grid>


        <Grid item xs={12} md={3}>
          <WhatWeDoCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <WhatWeDoCard />
        </Grid>
      </Grid>
    </Box>
  )
}

WhatWeDoSection.propTypes = {

}

export default WhatWeDoSection


