import React from 'react'
// import MainNavbar from 'src/components/MainNavbar';
import styled from 'styled-components'
// import heroSection from '../cards/heroSection';
import SectionOneLeft from '../cards/SectionOneLeft';
import SectionTwoRight from '../cards/SectionTwoRight';
import './AboutHero.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Styled components
const StyledButton = styled.div`
    background-color: transparent;
    height: auto;
    // font-family: 'Roboto', sans-serif;
    font-family: 'Mulish', sans-serif;
    width: 100%;
`;
// Styled components
const StyledHero = styled.div`
   height: 80vh;
   width: 100%;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;

//    This is the media query of this code 
   @media screen and (max-width: 700px){
   height: 50vh;
}
`;
// Styled components
const Title = styled.h1`
   font-size: 50px;
   text-transform: uppercase;
`;
// Styled components
const StyledOne = styled.div`
   height: 70vh;
   width: 100%;
//    background: red;
   display: flex;

   @media screen and (max-width: 700px){
       display: block;
       height: auto;
   }
`;
const StyledTwo = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
`;
const Hero_box = styled.div`
     height: 100%;
     width: 540px;
     padding: 40px;
     background-color: #020d19;
    //  background-color: #000000;
     color: rgb(178, 178, 178);
     font-family: 'Mulish', sans-serif;

`;

const StyledThree = styled.div`
   height: 60vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

`;
const NewsLetter = styled.div`
    width:50%;
    // background: red;
    line-height: 40px;
    color: rgb(178, 178, 178);
`


const AboutHero = () => {
    return (
        <StyledButton>
            <StyledHero className="hero_1">
                <Title>About Us</Title>
            </StyledHero>
            <StyledOne>
                <div className="sectionOne">
                    <SectionOneLeft />
                </div>
                <div className="sectionTwo">
                    <SectionTwoRight />
                </div>
            </StyledOne>
            <StyledTwo className="hero_2">
                <Hero_box>
                    <div className="about_company">
                        <h3>About Company</h3>
                        <h1>
                            Increase your expertise in business, technology and personal coach
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </p>
                        <ul>
                            <li>
                                <span><DoubleArrowIcon /></span>
                                <span>High Quality Education Video</span>
                            </li>
                            <li>
                                <span><DoubleArrowIcon /></span>
                                <span>We list your options by state</span>
                            </li>
                            <li>
                                <span><DoubleArrowIcon /></span>
                                <span>You can learn anything online</span>
                            </li>
                        </ul>
                        <button>
                            <span>Get Started</span>
                            <span className="arrowIcon"><ArrowForwardIcon /></span>
                        </button>
                    </div>
                </Hero_box>
            </StyledTwo>
            <StyledThree>
                <NewsLetter>
                    <h1>Sign Up For Our Newsletter</h1>
                    <p>He found himself transformed in his bed into a horrible vermin.</p>

                    <div className="subscribe">
                        <input type="text" placeholder="Your email address" className="news_input" />
                        <button className="news_submit">Sign up</button>
                    </div>
                </NewsLetter>
            </StyledThree>
        </StyledButton>
    )
}

export default AboutHero
