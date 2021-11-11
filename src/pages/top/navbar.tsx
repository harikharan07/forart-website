import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'
import telegram from '../../image/top/telegram.png'
import twitter from '../../image/top/twitter.png'

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
 display: flex;
  width: 100%;
  justify-content: center;
  height: 70px;
  position: fixed;
  //background-color: black;
  z-index: 999;
  
  
  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: 12vw;
  }
`

const Wrapper = styled.div`
  width:1300px;
  display: flex;
  height: 72px;
  justify-content: space-between;
  align-items: center;

 

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
  align-items: center;
  justify-content: space-between;
  width: 600px;

  li {
    list-style: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    
    img {
      width: 30px;
    }
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
          <li><a onClick={() => scrollToPart('Incubation')}>Incubation</a></li>
          <li><a onClick={() => scrollToPart('Mint')}>Mint</a></li>
          <li><a onClick={() => scrollToPart('MetaPlus')}>MetaPlus</a></li>
          <li><a onClick={() => scrollToPart('Airdrop')}>Airdrop</a></li>
          <li><a onClick={() => scrollToPart('Roadmap')}>Roadmap</a></li>
          <li><a href={'https://t.me/forart_co'} target="_blank" rel="noreferrer"><img className="telegram" src={telegram} /></a></li>
          <li><a href={'https://twitter.com/forart_ai'} target="_blank" rel="noreferrer"><img className="twitter" src={twitter} /></a></li>
        </NavLinksContainer>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar

