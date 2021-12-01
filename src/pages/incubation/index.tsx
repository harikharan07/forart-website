import React from 'react'
import styled from 'styled-components'
import solana from '../../image/incubation/solana.svg'
import celo from '../../image/incubation/celo.svg'
import eth from '../../image/incubation/eth.png'
import One from '../../image/incubation/number-1.png'
import Two from '../../image/incubation/number-2.png'
import Three from '../../image/incubation/number-3.png'
import Four from '../../image/incubation/number-4.png'
import Owner from '../../image/incubation/owner.png'
import Paint from '../../image/incubation/paint.png'
import Saas from '../../image/incubation/saas.png'
import SecurityIcon from '../../image/incubation/security.png'




import { useMediaQuery } from 'react-responsive'


const Wrapper = styled.div`
  width: 100%;
  height:fit-content;
  padding-top: 150px;
  background: radial-gradient(#48A283 3%, black 45%) no-repeat;
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
    background-position: top 50% left 50%;
  }
`

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  background-size: 100% 100%;

  @media screen and (max-width: 1100px) {
    width: 85vw;
    height: fit-content;
    padding-top: 0;
  }
`

const Title = styled.div`
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  color: #fff;

  span {
    padding: 0 16px;
    font-weight: 600;
    font-size: 65px;
    line-height: 80px;
    color: #00EBA4;
    opacity: .96;
  }
  
  @media screen and (max-width: 1100px) {
    font-size: 25px;
    line-height: 40px;

    span {
      font-size: 35px;
      line-height: 40px;
    }
  }
`

const TextContent = styled.div`
  font-size: 20px;
  color: white;
  margin-top: 30px;
  
  @media screen and (max-width: 1100px) {
    font-size: 16px;
    line-height: 22px;
  }
`

const ItemBorder = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1200px;
  height: 476px;
  border-radius: 10px;
  margin: 80px auto;
  align-items: center;
  font-weight: 600;
  color: #fff;
  
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(90deg,#00EBA4,#02A6F5);
    opacity: .7;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  
  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 700px;
  }
`

const ItemContainer = styled.div`
  padding: 20px 55px;
  width: 455px;
  height: 110px;
  text-align: left;

  .item-title {
    opacity: 1;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .item-title>img {
    width: 25px;
    margin-right: 15px;
  }
  
  .text {
    margin-top: 10px;
  }

  @media screen and (max-width: 1100px) {
    padding: 15px 10px;
    height: fit-content;

    .item-title {
      font-size: 20px;
    }
    .text {
      font-size: 14px;
    }
  }
`

const Line = styled.div`
  width: 1300px;
  height: 1px;
  margin-left: calc((100% - 1300px) / 2);
  background: linear-gradient(90deg,#00EBA4,#02A6F5);

  @media screen and (max-width: 1100px) {
    top: -10px;
    width: 100vw;
    margin: 0;
  }
`

const Built = styled.div`
  color: white;
  position: relative;
  top: -110px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    margin-left: 50px;
  }

  img:nth-of-type(1) {
    height: 30px;
  }
  
  img:nth-of-type(2) {
    height: 20px;
  }
  .eth {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bolder;
    
    img {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    
    img {
      margin: 0;
      width: 70px;
    }
    
    .celo {
      img {
        width: 25px;
        height: 25px;
      }
    }
    
    .eth {
      font-size: 14px;
      img {
        width: 15px;
        height: 23px;
      }
    }
   
  }
`

type WalletItem = {
  image:any
  title: string
  detail:string
}


const Incubation: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  const items: WalletItem[] = [
    {
      image:Paint,
      title:'Deep Learning Artworks',
      detail: 'According to different artistic style needs, Deep Learning Kit can generate corresponding artworks or elements to assist the artist in the creation of NFT / Metaverse. '
    },
    {
      image:Saas,
      title:'NFT SaaS',
      detail: 'Provide standard NFT / Metaverse creation specifications and agreements to form a "SaaS" service, and provide fast NFT Airdrop services for project parties and third-party platforms.'
    },
    {
      image:Owner,
      title:'Ownership certification',
      detail: 'Provide ownership certification for the NFT / Metaverse created by the platform to ensure its uniqueness and scarcity.'
    },
    {
      image:SecurityIcon,
      title:'Security',
      detail: 'Platform smart contracts will be audited by well-known and authoritative security certification companies in the industry to ensure the security of NFT / Metaverse transactions.'
    }
  ]
  return (
    <div className="section" id="Incubation">
      <Wrapper>
        <Container>
          {
            !isMobile && (
              <Built>
                Built on
                <div className="celo">
                  <img src={celo} /> Celo
                </div>

                <img src={solana} style={{ width:'150px' }} />
                <div className="eth"><img src={eth} />Ethereum</div>
              </Built>
            )

          }
          {
            isMobile &&(
              <Built>
                <img src={celo}  />
                <img src={solana} />
                <div className="eth"><img src={eth} />Ethereum</div>
              </Built>
            )
          }

          <Title>
            <div>
              The
              <span>First</span>
              AI-Driven NFT/Metaverse Incubation Platform
            </div>
          </Title>
          <TextContent>Provide an AI-kit and incubation platform for  artists to create NFT / Metaverse through Neura.</TextContent>
          <ItemBorder>
            {
              items.map(item => (
                <ItemContainer  key={item.title}>
                  <div className="item-title" ><img src={item.image} />{item.title}</div>
                  <div className="text" >{item.detail}</div>
                </ItemContainer>
              ))
            }
            {/* <div className="item-title">
                <img src={ItemIcon} /> Access From Multiple Devices
              </div>
              <div className="item-text">Users can acess the same identiy form multiple devices through a few simple steps</div>*/}

          </ItemBorder>

        </Container>
      </Wrapper>
      <Line />
    </div>
  )
}

export default Incubation
