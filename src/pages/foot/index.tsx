import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'
import TwitterIcon from '../../image/foot/Twitter.png'
import GithubIcon from '../../image/foot/Github.png'
import DiscordIcon from '../../image/foot/Discord.svg'
import Telegram from '../../image/foot/Telegram.png'


const FootContent = styled.div`
  height: 250px;
  padding-top: 50px;
  position: relative;
  
  @media screen and (max-width: 1100px) {
  }
`

const FootMain = styled.div`
  width: 1200px;
  margin-left: calc((100% - 1200px) / 2);
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 45px;


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
  
  @media screen and (max-width: 1100px) {
    line-height: 20px;
  }
`

const ExternalLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 0 auto;


  @media screen and (max-width: 1100px) {
    width: 250px;
  }
`

const SCExternalLink = styled.a`
  img {
    width: 45px;
  }

  @media screen and (max-width: 1100px) {
    
    img {
      width: 30px;
    }
  }
`

const Foot:React.FC = () => {
  const EXTERNAL_LINKS: Array<{ icon: string, link: string }> = [
    { icon: TwitterIcon, link: 'https://twitter.com/forart_ai' },
    { icon: GithubIcon, link: 'https://github.com/Forart-co' },
    { icon: DiscordIcon, link: 'https://discord.gg/RDaUkaW39S' },
    { icon: Telegram, link:'https://t.me/forart_co' }
  ]

  return (
    <FootContent>
      <ExternalLinksContainer>
        {
          EXTERNAL_LINKS.map(({ icon,link }) => (
            <SCExternalLink key={link} href={link} target="_blank" rel="noreferrer">
              <img src={icon} alt={link} />
            </SCExternalLink>
          ))
        }
      </ExternalLinksContainer>
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
