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
                            {/* <img scr={logo} alt="logo"/> */}
                            <h1>Accounts</h1>
                            <p>Set up your account, learn about billing, and stay up-to-date on compliance policies</p>
                        </div>
                    </div>
                    <div className="sub_2">
                        <div>
                        {/* <img scr={logo} alt="logo"/> */}
                           <h1> Audiences</h1>
                           <p>Import contacts, create signup forms, and manage your Mailchimp audiences.</p>
                        </div>
                    </div>


                </div>
                <div className="sub_page">
                    <div className="sub_3">
                        <div>
                        {/* <img scr={logo} alt="logo"/> */}
                           <h1>Automation</h1>
                            <p><p>Automatically send purchase emails, welcome messages, and more.</p></p>
                        </div>
                    </div>
                    <div className="sub_4">
                        <div>
                        {/* <img scr={logo} alt="logo"/> */}
                             <h1>Email Delivery</h1>
                            <p>Learn how we deliver email and how you can ensure contacts get your campaigns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </SupportPage>
    )
}

export default Supportpage
