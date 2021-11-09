import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import BannerImage from '../../image/top/banner.jpg'


const Wrapper = styled.div`
  width: 100%;
  height: 130vh;
  background: url(${BannerImage}) no-repeat;
  background-size: 100%;
  //background-position: top 120px right 0px;
  
`

const Container = styled.div`
  width: 1300px;
  margin-left: calc((100% - 1300px) / 2);
  padding-top: 150px;


  @media screen and (max-width: 1100px) {
    padding-top: 5vh;
    margin-left: 0;
    width: 100vw;
  }
`

const Title = styled.div`
  width: 1300px;
  margin-left: calc((100% - 1300px) / 2);
  text-align: left;


  .slogan{
      font-weight: 600;
      font-size: 65px;
      line-height: 100px;
      letter-spacing: -.05em;
      color: #fff;
      width: 780px;
    }
  
  .foot {
    width: 780px;
    margin-top: 212px;
    font-weight: 300;
    font-size: 22px;
    line-height: 1.227;
    color: #fff;
    position: relative;
    display: inline-block;
  }

`

const Top: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Title>
          <div>
            <div className="slogan">Building the Worlds Best Mobile Decentralized Exchange and Wallet</div>
            <div className="foot">Built on</div>
          </div>
        </Title>
      </Container>
    </Wrapper>

  )
}

export default Top
