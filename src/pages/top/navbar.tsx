import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'

function scrollToPart(anchorName: string) {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName)
    if (anchorElement) {
      anchorElement.scrollIntoView(
        { behavior: 'smooth', block: 'center' }
      )
    }
  }
}

const NavbarContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: #000;
  
  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: 12vw;
  }
`

const Wrapper = styled.div`
  display: flex;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  padding: 0 290px;

 

`

const Logo = styled.div`
  width: 116px;
  height: 36px;
  background: url(${LogoIcon}) no-repeat;
  background-size: 100%;


`

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  li {
    list-style: none;
    color: #afa4a4;
    font-size: 12px;
    font-weight: bold;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Wrapper>
        <Logo className="logo" />
        <NavLinksContainer id="NavLinksContainer">
          <li><a onClick={() => scrollToPart('MissionContainer')}>Wallet</a></li>
          <li><a onClick={() => scrollToPart('FeaturesContainer')}>DEX</a></li>
          <li><a onClick={() => scrollToPart('BenefitsContainer')}>NFT</a></li>
          <li><a onClick={() => scrollToPart('RoadMapContainer')}>DAO</a></li>
          <li><a onClick={() => scrollToPart('RoadMapContainer')}>Media</a></li>
          <li><a onClick={() => scrollToPart('RoadMapContainer')}>Documents</a></li>
          <li><a onClick={() => scrollToPart('RoadMapContainer')}>Support</a></li>

        </NavLinksContainer>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar

