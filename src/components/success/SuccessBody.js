import React from 'react'
import Success from 'src/pages/Success';
import styled from 'styled-components'

const Succes = styled.div`
    //  background-color: #0d1824;
    //  box-shadow: 0 0 .2rem #0d1824,
    //              0 0 .2rem #0d1824,
    //       inset 0 0 1.3rem #0d1824;
    //  width: 50%;
    //  height: 50%;
    //  border-radius: 100%;
`;

const SuccessBody = () => {
    return (
        <div>
            <Success>
                Success
            </Success>
        </div>
    )
}

export default SuccessBody
