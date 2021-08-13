import React from 'react'
import styled from 'styled-components'
import './SubscriberCard.css'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
// import {icons} from 'src/components/aboutpage/images/credit-2389154_960_720.png'
const CardSub = styled.div`
    height: auto;
    width: 100%;
    // background: red;
`;
const MainCard = styled.div`
    // display: flex;
    // align-items: center;
    // flex-wrap: no-wrap;
    // justify-content: space-between;
    // // background-color: red;
    // height: 100vh;

    // @media screen  and (max-width: 786px){
    //   flex-wrap: wrap;
    // }
`
const Main = styled.div`
     display: flex;
     flex-wrap: no-wrap;
    //  justify-contents: space-around;
    width: 100%;
    padding: 10px;
`


const SubscriberCard = () => {
  return (
    <CardSub>
      <h1 className="title">My Subscription</h1>
      <MainCard className="main_card">
        {/* ================== ONE ================== */}
        <Main className="main">
          <div className="main_1">
            Your Purchase
          </div>
          <div className="main_2">
            Your Purchase
          </div>
          <div className="main_3">
            Your Purchase
          </div>

        </Main>
        {/* ================= TWO ================== */}
        <Main className="main">
          <div className="main_1">
            Your Purchase
          </div>
          <div className="main_2">
            Your Purchase
          </div>
          <div className="main_3">
            Your Purchase
          </div>

        </Main>
        {/* ============= THREE ============ */}
        <Main className="main">
          <div className="main_1">
            Your Purchase
          </div>
          <div className="main_2">
            Your Purchase
          </div>
          <div className="main_3">
            Your Purchase
          </div>

        </Main>


      </MainCard>
    </CardSub>
  )
}

export default SubscriberCard
