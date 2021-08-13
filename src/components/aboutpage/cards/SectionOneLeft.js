import React from 'react'
import styled from 'styled-components'


const Title = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const Subtitle = styled.div`
  font-size: 38px;
  padding-top: 30px;
  letter-spacing: 3px;
  font-weight: bold;
`;
const Paragraph = styled.p`
  padding-top: 20px;
  line-height: 30px;
`
const SectionOneLeft = () => {
    return (
        <div>
            <Title>Learn something new</Title>
            <Subtitle>Learn from any location in the world with Vultur Edu</Subtitle>
            <Paragraph>
                Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante. Duis vel massa eleifend, porta est non.
            </Paragraph>
        </div>
    )
}

export default SectionOneLeft
