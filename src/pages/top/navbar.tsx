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
  height: 70px;
  
  
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
  width: 130px;
  background: url(${LogoIcon}) no-repeat;
  background-size: 100%;

  img {
    width: 100%;
  }
`

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;

  li {
    list-style: none;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Wrapper>
        <Logo className="logo">
          <img src={LogoIcon} />
        </Logo>
        <NavLinksContainer id="NavLinksContainer">
          <li><a onClick={() => scrollToPart('MissionContainer')}>Incubation</a></li>
          <li><a onClick={() => scrollToPart('FeaturesContainer')}>Mint</a></li>
          <li><a onClick={() => scrollToPart('BenefitsContainer')}>MetaPlus</a></li>
          <li><a onClick={() => scrollToPart('RoadMapContainer')}>Airdrop</a></li>
        </NavLinksContainer>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar

