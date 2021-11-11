import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import BannerImage from '../../image/top/banner.jpg'


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BannerImage}) no-repeat;
  background-size: 100%;
  
  .filter {
    height: 100vh;
    //backdrop-filter: blur(4px);
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


  .slogan{
      font-weight: 600;
      font-size: 68px;
      line-height: 100px;
      letter-spacing: 2px;
      color: #fff;
      width: 700px;
    }

  @media screen and (max-width: 1100px) {
    text-align: center;
    margin: 0;
    .slogan {
      width: 100vw;
      font-size: 30px;
      line-height: 50px;
    }
  }

`

const Top: React.FC = () => {
  return (
    <Wrapper>
      <div className="filter">
        <Navbar />
        <Container>
          <Title>
            <div>
              <div className="slogan">AI + NFT + DeFi Everything is possible in Metaverse.</div>
              {/*<div className="foot">Built on</div>*/}
            </div>
          </Title>
        </Container>
      </div>
    </Wrapper>

  )
}

export default Top
