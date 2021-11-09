import styled from 'styled-components'
import Line from '../../image/play/line-bg.png'
import React from 'react'
import ItemIcon from '../../image/wallet/item-icon.png'

const Wrapper = styled.div`
  width: 100%;
  height: 140vh;
  background: url(${Line}) no-repeat;
  background-size: 55%;
  background-position: top 180px left 50%;
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
    background-size: 60%;
    background-position: top 50% left 20%;
  }
`

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 100vh;
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
    color: #67ebba;
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
  margin: 150px auto;
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
  border: 1px
  solid #67ebba;
  box-sizing: border-box;
 // background: linear-gradient(90deg,#67ebba,#67e5bd 14.2%,#68d5c5 32.88%,#6ab9d2 54.06%,#6c93e4 77.03%,#6e66fa);



  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,#67ebba,#67e5bd 14.2%,#68d5c5 32.88%,#6ab9d2 54.06%,#6c93e4 77.03%,#6e66fa);
    opacity: .4;
    left: 0;

    border-radius: 180px;
    position: absolute;
    top: 0;
  }

  

  
  &:nth-child(1) {
    margin-right: 150px;

    &:after {
      content: "";
      width: 153px;
      height: 153px;
      border-radius: 50%;
      background: linear-gradient(270deg,#67ebba,#67eaba .34%,#69c2ce 15.61%,#6ba1de 31.22%,#6c87ea 47.25%,#6d75f3 63.72%,#6e6af8 80.92%,#6e66fa);
      position: absolute;
      top: -1px;
      left: 0;
    }
  }

  &:nth-child(2) {
    margin-left: 150px;
    &:after {
      content: "";
      width: 153px;
      height: 153px;
      border-radius: 50%;
      background: linear-gradient(270deg,#67ebba,#67eaba .34%,#69c2ce 15.61%,#6ba1de 31.22%,#6c87ea 47.25%,#6d75f3 63.72%,#6e6af8 80.92%,#6e66fa);
      position: absolute;
      top: -1px;
      right: 0;

    }
  }

  &:nth-child(3) {
    margin-right: 150px;
    &:after {
      content: "";
      width: 153px;
      height: 153px;
      border-radius: 50%;
      background: linear-gradient(270deg,#67ebba,#67eaba .34%,#69c2ce 15.61%,#6ba1de 31.22%,#6c87ea 47.25%,#6d75f3 63.72%,#6e6af8 80.92%,#6e66fa);
      position: absolute;
      top: -1px;
      left: 0;

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
type PlayItem = {
  img: any
  title: string
  detail:string
}



const Play: React.FC = () => {

  const items: PlayItem[] = [
    {
      img: ItemIcon,
      title:'Instance',
      detail: 'Blazing-fast speed powered by Solana & Serum Blazing-fast speed powered by Solana & Serum Blazing-fast speed powered by Solana & Serum'
    },
    {
      img: ItemIcon,
      title:'Access From Multiple Devices',
      detail: 'Users can acess the same identiy form multiple devices through a few simple steps'
    },
    {
      img: ItemIcon,
      title:'Access From Multiple Devices',
      detail: 'Users can acess the same identiy form multiple devices through a few simple steps'
    }
  ]

  return (
    <Wrapper >
      <Container>
        <Title >
          <div>
            Create Your Cryptocurrency Portfolio in
            <span>Decentralized</span>
            Way Now
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
    </Wrapper>
  )
}

export default Play
