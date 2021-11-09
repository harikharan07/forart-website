import styled from 'styled-components'
import React from 'react'


const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  background: radial-gradient(#02A6F5 3%, black 45%);
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
    background-size: 60%;
    background-position: top 50% left 20%;
  }
`

const Container = styled.div`
  width: 1300px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  height: 1000px;
  background-size: 100% 100%;

  @media screen and (max-width: 1100px) {
    width: 85vw;
    height: fit-content;
    padding-top: 0;
  }
`

const Title = styled.div`
  width: 750px;
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
`

const ItemBorder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 750px;
  border-radius: 10px;
  margin: 80px auto;
  align-items: center;
  font-weight: 600;
  color: #fff;
 ///* &:before {
 //   content: '';
 //   width: 100%;
 //   height: 100%;
 //   position: absolute;
 //   background: linear-gradient(90deg,#67ebba,#67eaba .33%,#69c2ce 15.61%,#6ba1de 31.22%,#6c87ea 47.25%,#6d75f3 63.72%,#6e6af8 80.92%,#6e66fa);
 //   opacity: .7;
 //   left: 0;
 //   top: 0;
 // }*/
  
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
 // background: linear-gradient(90deg,#67ebba,#67e5bd 14.2%,#68d5c5 32.88%,#6ab9d2 54.06%,#6c93e4 77.03%,#6e66fa);



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

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 153px;
  width: 60%;
  text-align: left;

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
`

const Line = styled.div`
  width: 1300px;
  height: 1px;
  margin-left: calc((100% - 1300px) / 2);
  background: linear-gradient(90deg,#00EBA4,#02A6F5);
  position: relative;
  top: -150px;
`


type PlayItem = {
  title: string
  detail:string
}

const Play: React.FC = () => {

  const items: PlayItem[] = [
    {
      title:'Airdrop NFTs',
      detail: 'The platform will airdrop limited NFTs, which can be used for NFT mining on the platform to obtain native tokens.'
    },
    {
      title:'Upgrade NFTs',
      detail: 'Two NFTs can be upgraded with AI, minted with native tokens, and get new scarce NFTs.'
    },
    {
      title:'Financial NFTs',
      detail: 'The platform provides part of the financial value guarantee for scarce NFTs.'
    }
  ]

  return (
    <Wrapper >
      <Container>
        <Title >
          <div>
            DeFi + NFT For Scarce NFTs
          </div>
          <ItemBorder>
            {
              items.map(item => (
                <ItemContainer key={item.title}>
                  <ItemText>
                    <div className="item-title">{item.title}</div>
                    <div className="item-detail">{item.detail}</div>
                  </ItemText>
                </ItemContainer>
              ))
            }
          </ItemBorder>
        </Title>
      </Container>
      <Line />
    </Wrapper>
  )
}

export default Play
