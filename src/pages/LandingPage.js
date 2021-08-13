import React from 'react'
import { Box, Container, useTheme } from '@material-ui/core'
import PriceSection from 'src/components/landingpage/Layouts/PriceSection'
import HeroSection from 'src/components/landingpage/Layouts/HeroSection'
import LeftTextRightImageSection from 'src/components/landingpage/Layouts/LeftTextRightImageSection'
import RightTextLeftImageSection from 'src/components/landingpage/Layouts/RightTextLeftImageSection'
import { Helmet } from 'react-helmet'
import WhatWeDoSection from 'src/components/landingpage/Layouts/WhatWeDoSection'





export default function LandingPage() {
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

              {/* hero sections */}
              <Box mb={{xs:2,md:10}}>
                <HeroSection/>
              </Box>

              <Box>
                  <LeftTextRightImageSection/>
              </Box>

              <Box>
                  <RightTextLeftImageSection/>
              </Box>


              <Box>
                  <LeftTextRightImageSection/>
              </Box>

              <Box>
                  <RightTextLeftImageSection/>
              </Box>


              <Box>
                <WhatWeDoSection/>
              </Box>

          </Container>
        </Box>
      </>
    )
}
