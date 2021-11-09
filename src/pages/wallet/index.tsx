import React from 'react'
import styled from 'styled-components'
import BigBall from '../../image/wallet/ball-bg.png'
import ItemIcon from '../../image/wallet/item-icon.png'


const Wrapper = styled.div`
  width: 100%;
  height: 110vh;
  background: url(${BigBall}) no-repeat;
  background-size: 45%;
  background-position: top 80px left 50%;
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
    background-size: 60%;
    background-position: top 50% left 20%;
  }
`

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  height: 100vh;
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
    color: #67ebba;
    opacity: .96;
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
  margin: 150px auto;
  align-items: center;
  font-weight: 600;
  color: #fff;
  
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(90deg,#67ebba,#67eaba .33%,#69c2ce 15.61%,#6ba1de 31.22%,#6c87ea 47.25%,#6d75f3 63.72%,#6e6af8 80.92%,#6e66fa);
    opacity: .7;
    left: 0;
    top: 0;
  }
`

const ItemContainer = styled.div`
  padding: 20px 55px;
  width: 450px;
  height: 110px;
  text-align: left;

  .item-title {
    opacity: 1;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    width: 100%;
    
    img {
      width: 15px;
    }
  }
`

type WalletItem = {
  img: any
  title: string
  detail:string
}


const Wallet: React.FC = () => {

  const items: WalletItem[] = [
    {
      img: ItemIcon,
      title:'Access From Multiple Devices',
      detail: 'Users can acess the same identiy form multiple devices through a few simple steps'
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
    },
    {
      img: ItemIcon,
      title:'Access From Multiple Devices',
      detail: 'Users can acess the same identiy form multiple devices through a few simple steps'
    }
  ]
  return (
    <div className="section">
      <Wrapper>
        <Container>
          <Title>
            <div>
              The
              <span>First</span>
              Cross-platform Wallet in Solana
            </div>
          </Title>
          <ItemBorder>
            {
              items.map(item => (
                <ItemContainer  key={item.title}>
                  <div className="item-title" > <img src={ItemIcon} />{item.title}</div>
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
    </div>
  )
}

export default Wallet
