import React from 'react'
import { Box, Container, useTheme, Typography,Divider, Grid } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import PlanCard from 'src/components/landingpage/Cards/PlanCard'







export default function Pricing() {
  const theme = useTheme()
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor:theme.palette.primary.main ,
            minHeight: '100%',
            py: 3,
            px:{xs:3,md:10}
          }}
        >
          
          <Container maxWidth={false}  >

              <Box mt={{
                xs:10
              }} style={{color:theme.palette.primary.contrastText}}>


                <Box mb={2}>
                  <Typography variant="h1" textAlign="center">
                    Choose a subscription Plan
                  </Typography>
                </Box>

                <Box mb={2}>
                  <Typography variant="subtitle1" textAlign="center">
                      Select one of the plan you will love to purchase
                  </Typography>
                </Box>

                <Grid container component={Box} px={{xs:4,md:25}} justifyContent="center" alignItems="center" >
                  <Grid xs={5} item>
                    <Divider style={{
                      backgroundColor:theme.palette.secondary.light,
                      width:"100%"
                      }} />

                  </Grid>

                  <Grid xs={2} item>
                    <Divider style={{
                      backgroundColor:theme.palette.secondary.light,
                      height:10,
                      width:"100%",
                      borderRadius:10
                      }} />

                  </Grid>

                  <Grid xs ={5} item>
                    <Divider style={{
                      backgroundColor:theme.palette.secondary.light,
                      width:"100%"
                      }} />

                  </Grid>


                </Grid>

              </Box>



              <Grid component={Box} mt={{xs:5,md:10}}  container justifyContent="center" alignItems="center" >
                
                <PlanCard />
                <PlanCard />
                <PlanCard />
              </Grid>

          </Container>
        </Box>
      </>
    )
}
