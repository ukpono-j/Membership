import React from 'react'
import styled from 'styled-components'
import logo from 'src/components/aboutpage/images/illustrator3.png';
import './SupportPage.css'
//  console.log(logo)
const SupportPage = styled.div`
   color: #fff;
`;
const Page = styled.div`
    display: flex;
    width: 100%;
    // background: red;
    height: 60vh;
    justify-content:space-around;
    align-items: center;
`;


const Supportpage = () => {
    return (
        <SupportPage>
            <Page className="support">
                <div className="page">
                    <h1>Help center</h1>
                    <div className="inputs">
                        <input type="text" placeholder="Search" className="search" />
                        <input type="submit" className="submit" />
                    </div>
                </div>

            </Page>
            <div className="support_2">
                <div className="sub_page">
                    <div className="sub_1">
                        <div>
                            <img scr={logo} alt="logo"/>
                            <h1>Getting Started</h1>
                            <p>Walk through the basics of setting  up your  new Front account</p>
                        </div>
                    </div>
                    <div className="sub_2">
                        <div>
                        <img scr={logo} alt="logo"/>
                           <h1> Using Front</h1>
                            <p>Learn how to work in your new inbox and get the most out of front</p>
                        </div>
                    </div>


                </div>
                <div className="sub_page">
                    <div className="sub_3">
                        <div>
                        <img scr={logo} alt="logo"/>
                           <h1> Update and training</h1>
                            <p>Get Front products, our favorite tips and hands-on help</p>
                        </div>
                    </div>
                    <div className="sub_4">
                        <div>
                        <img scr={logo} alt="logo"/>
                             <h1>Best Practices</h1>
                            <p>master your FRONT layouts and workflow</p>
                        </div>
                    </div>
                </div>
            </div>
        </SupportPage>
    )
}

export default Supportpage
