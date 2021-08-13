import React from 'react'
import { Box, Grid, useTheme } from '@material-ui/core'
import SectionCard from '../Cards/SectionCard'




export default function LeftTextRightImageSection() {
  const theme = useTheme()

  return (
    <Grid container component={Box} py={{xs:2,md:10}} justifyContent="center" alignItems="center"  style={{color:theme.palette.primary.contrastText}}>
      <Grid xs={12} md={6} >
        <SectionCard/>
      </Grid>
      <Grid xs={12} md={6}>
        <img src="/assets/img/gallery/comment1.png" style={{width:"100%"}} />
      </Grid>
    </Grid>
  )
}
