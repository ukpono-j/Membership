import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography, useTheme } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


function WhatWeDoCard(props) {
  const theme = useTheme()
  return (
    <Paper elevation={20} component={Box} 
      p={{
        xs:1,
        md:3
      }} 
      mx={2}
      style={{color:theme.palette.primary.contrastText,borderRadius:30}}
      
      >
      <Box >
        <CheckCircleOutlineIcon color="secondary" fontSize="large" />
      </Box>

      <Box my={2}>
        <Typography variant="h4">
          <strong>

            In publishing and graphic design
          </strong>
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
        </Typography>
      </Box>
    </Paper>
  )
}

WhatWeDoCard.propTypes = {

}

export default WhatWeDoCard

