import styled from 'styled-components'
import React from 'react'
import Gift from '../../image/mint/gifts.png'
import Upgrade from '../../image/mint/upgrade.png'
import Coin from '../../image/mint/coins.png'


const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  background: radial-gradient(#02A6F5 3%, black 45%) no-repeat;
  
  @media screen and (max-width: 1100px) {
    background-position: top 50% left 50%;
    height: 650px;
  }
`

const Container = styled.div`
  width: 1300px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: 100% 100%;

  @media screen and (max-width: 1100px) {
    width: 85vw;
    height: fit-content;
    padding-top: 0;
  }
`

const Title = styled.div`
  width: 100%;
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
    width: 80%;
    font-size: 25px;
    line-height: 40px;
    margin-bottom: 15px;

    span {
      font-size: 35px;
      line-height: 40px;
    }
  }
`

const ItemBorder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 750px;
  height: 750px;
  border-radius: 10px;
  margin: 80px auto;
  align-items: center;
  font-weight: 600;
  color: #fff;
  
  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: 0;
  }

`

const ItemContainer = styled.div`
  width: 78%;
  min-width: 750px;
  height: 180px;
  position: relative;
  border-radius: 90px;
  margin-bottom: 95px;
  border: 2px solid #00EBA4;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
 // background: linear-gradient(90deg,#67ebba,#67e5bd 14.2%,#68d5c5 32.88%,#6ab9d2 54.06%,#6c93e4 77.03%,#6e66fa);

  &:after {
    content: "";
    width: 153px;
    height: 153px;
    border-radius: 50%;
    background: linear-gradient(270deg, #67ebba, #67eaba .34%, #69c2ce 15.61%, #6ba1de 31.22%, #6c87ea 47.25%, #6d75f3 63.72%, #6e6af8 80.92%, #6e66fa);
    position: absolute;
    box-shadow: 5px 5px 5px #212121;
    top: -0.5px;
    left: 0;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,#00EBA4,#02A6F5);
    opacity: .4;
    left: 0;
    border-radius: 180px;
    position: absolute;
    top: 0;
  }

  @media screen and (max-width: 1100px) {
    min-width: 330px;
    height: 130px;
    margin-bottom: 50px;

    &:after {
      top: 15px;
      width: 90px;
      height: 90px;
    }
  }
  

  
  //&:nth-child(1) {
  //  margin-right: 150px;
  //
  //  &:after {
  //    content: "";
  //    width: 153px;
  //    height: 153px;
  //    border-radius: 50%;
  //    background: linear-gradient(90deg,#00EBA4,#02A6F5);
  //    position: absolute;
  //    top: -1px;
  //    left: 0;
  //  }
  //}

  //&:nth-child(2) {
  //  margin-left: 150px;
  //  &:after {
  //    content: "";
  //    width: 153px;
  //    height: 153px;
  //    border-radius: 50%;
  //    background: linear-gradient(90deg,#00EBA4,#02A6F5);
  //    position: absolute;
  //    top: -1px;
  //    right: 0;
  //
  //  }
  //}
  //
  //&:nth-child(3) {
  //  margin-right: 150px;
  //  &:after {
  //    content: "";
  //    width: 153px;
  //    height: 153px;
  //    border-radius: 50%;
  //    background: linear-gradient(90deg,#00EBA4,#02A6F5);
  //    position: absolute;
  //    top: -1px;
  //    left: 0;
  //
  //  }
  //}
  
`

const IconArea = styled.div`
  width: 153px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 60px;
  }
  
  @media screen and (max-width: 1100px) {
    width: 90px;
    
    img {
      width: 45px;
    }
  }
`

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 153px;
  width: 60%;
  text-align: left;
  margin-right: 30px;

  &:nth-child(1){
    left: 170px;
  }

  
  .item-title{
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
  }
  .item-detail {
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    margin-top: 18px;
  }
  
  @media screen and (max-width: 1100px) {
    width: 70%;
    margin-right: 0px;
    height: 120px;

    .item-title {
      font-size: 16px;
    }
    
    .item-detail {
      margin-top: 10px;
      font-size: 12px;
    }
  }
`

const Line = styled.div`
  width: 1300px;
  height: 1px;
  margin-left: calc((100% - 1300px) / 2);
  background: linear-gradient(90deg,#00EBA4,#02A6F5);
  position: relative;
  top: -150px;

  @media screen and (max-width: 1100px) {
    top: -300px;
    width: 100vw;
    margin: 0;
  }
`


type PlayItem = {
  image:any
  title: string
  detail:string
}

const Mint: React.FC = () => {

  const items: PlayItem[] = [
    {
      image: Gift,
      title:'Airdrop NFTs',
      detail: 'The platform will airdrop limited NFTs, which can be used for NFT mining on the platform to obtain native tokens.'
    },
    {
      image: Upgrade,
      title:'Upgrade NFTs',
      detail: 'Two NFTs can be upgraded with AI, minted with native tokens, and get new scarce NFTs.'
    },
    {
      image: Coin,
      title:'Financial NFTs',
      detail: 'The platform provides part of the financial value guarantee for scarce NFTs.'
    }
  ]

  return (
    <Wrapper id="Mint">
      <Container>
        <Title >
          <div>
            DeFi + NFT For Scarce NFTs
          </div>
        </Title>

        <ItemBorder>
          {
            items.map(item => (
              <ItemContainer key={item.title}>
                <IconArea ><img src={item.image} /> </IconArea>
                <ItemText>
                  <div className="item-title">{item.title}</div>
                  <div className="item-detail">{item.detail}</div>
                </ItemText>
              </ItemContainer>
            ))
          }
        </ItemBorder>
      </Container>
      <Line />
    </Wrapper>
  )
}

export default Mint
