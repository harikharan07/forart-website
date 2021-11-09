import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'

const FootContent = styled.div`
  height: 280px;
  background: #0D0D0D;
  padding-top: 50px;
`

const FootMain = styled.div`
  width: 1300px;
  margin-left: calc((100% - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  
  img {
    width: 180px;
  }
`

const Foot:React.FC = () => {
  return (
    <FootContent>
      <FootMain>
        <img src={LogoIcon} />
      </FootMain>
    </FootContent>
  )
}

export default Foot