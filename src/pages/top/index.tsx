import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import BannerImage from '../../image/top/banner.jpg'
import { Button } from 'antd'


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BannerImage}) no-repeat;
  background-size: 100%;
  
  .filter {
    height: 100vh;
    //backdrop-filter: blur(4px);
  }
  
  @media screen and (max-width: 1100px) {
    height: 100vh;
    background-size: cover;
    background-position: center;

  }
`

const Container = styled.div`
  width: 1300px;
  margin-left: calc((100% - 1300px) / 2);
  padding-top: 150px;


  @media screen and (max-width: 1100px) {
    margin-left: 0;
    width: 100vw;
  }
`

const Title = styled.div`
  text-align: left;
  margin-top: 130px;


  .slogan{
      font-weight: 600;
      font-size: 50px;
      line-height: 70px;
      letter-spacing: 2px;
      color: #fff;
      width: 800px;
    }

  @media screen and (max-width: 1100px) {
    text-align: center;
    margin: 0;
    .slogan {
      width: 100vw;
      font-size: 35px;
      line-height: 50px;
    }
  }

`

const StyledButton = styled(Button)`
  background-image: linear-gradient(to right, #00EBA4, #02A6F5);
  height: 50px;
  border: none;
  font-size: 18px;
  color: white;
  font-weight: bolder;
  border-radius: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 1200px;
  margin: 25px 0;

`

const Top: React.FC = () => {

  // const toApp = () => {
  //   window.location.href='https://app.forart.co'
  // }

  return (
    <Wrapper>
      <div className="filter">
        <Navbar />
        <Container>
          <Title>
            <div>
              <div className="slogan">Make NFT / Metaverse creation easier and more intresting</div>
              {/*<div className="foot">Built on</div>*/}
            </div>
          </Title>
          <ButtonContainer>
            <a href="https://app.forart.co" target="_blank" rel="noreferrer"><StyledButton>Launch App</StyledButton></a>
          </ButtonContainer>
        </Container>
      </div>
    </Wrapper>

  )
}

export default Top
