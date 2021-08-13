import React from 'react'
import Box from '@material-ui/core/Box';
import AboutHero from 'src/components/aboutpage/layouts/AboutHero';
import { Container } from '@material-ui/core';

import styled from 'styled-components'

const AboutPage = styled.div`
   margin: 0;
   padding: 0;
   box-sizing: border-box;

`
const AboutContainer = styled.div`
paddingRight: "0",
paddingLeft: "0",
paddingTop: "0",
paddingBottom: "0",
`



const About = () => {
    return (
        <AboutPage>
            <AboutContainer maxWidth={false}  >
                <Box>
                    <AboutHero />
                </Box>
            </AboutContainer>
        </AboutPage>
    )
}

export default About
