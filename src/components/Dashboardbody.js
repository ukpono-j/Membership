import React from 'react'
import styled from 'styled-components'
import './Dashboardbody.css'

const Dash = styled.div`
   background-color: #0d1824;
   height: 100vh;
   width: 100%;
//    max-width: 100%;
//    padding: 0 0 0 270px;
   color: #fff;
`;
const Analyst = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: nowrap;
   @media screen and (max-width: 786px){
    //   display: block;
    flex-wrap: wrap;
   }
`;
const DashBody = styled.div`

`;
const Dashboardbody = () => {
    return (
        <Dash>
           <DashBody>
           <Analyst className="analyst">
               <div>One</div>
               <div>Two</div>
               {/* <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div> */}
               
           </Analyst>
           
           </DashBody>
        </Dash>
    )
}

export default Dashboardbody
