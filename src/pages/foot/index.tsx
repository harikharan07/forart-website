import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'

const FootContent = styled.div`
  height: 180px;
  padding-top: 50px;
  position: relative;
`

const FootMain = styled.div`
  width: 1200px;
  margin-left: calc((100% - 1200px) / 2);
  display: flex;
  justify-content: center;
  position: relative;
  
  img {
    width: 200px;
  }
`

const Register = styled.div`
  width: 100%;
  height: 80px;
  font-size: 13px;
  line-height: 80px;
  color: rgba(255,255,255,0.7);
  position: absolute;
  bottom: 0;
`

const Foot:React.FC = () => {
  return (
    <FootContent>
      <FootMain>
        <img src={LogoIcon} />
      </FootMain>
      <Register>
        <div>© 2021 Forart - Terms of Use | Privacy Policy | Cookie Settings</div>
      </Register>
    </FootContent>
  )
}

export default Foot