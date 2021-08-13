import React from 'react'
import styled from 'styled-components'
import './Checkout.css'

const CheckOut = styled.div`
     height: 100%;
     width: 100%;
    //  background: red;
     
`;
const CheckMain = styled.div`
     padding: 50px;
`


const Checkout = () => {
    return (
        <CheckOut>
            <CheckMain>

                <div className="check_body">
                    <h1>Please Confirm</h1>
                    <hr/>
                    <div className="check_flex">
                        <div className="bd1">
                            <h4>Purchase Url:</h4>
                            <input type="text" placeholder="URL"/>
                        </div>
                        <div className="bd2">
                            <h4>Guests Checkouts</h4>
                            <p>Proceed to continue or cancel if your Purchase meets your requirement</p>
                            <div className="confirm_btn">
                            <button className="submit">Continue</button>
                            <button className="submit">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </CheckMain>

        </CheckOut>
    )
}

export default Checkout
