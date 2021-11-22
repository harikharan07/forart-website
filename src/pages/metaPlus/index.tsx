import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 750px;
  padding-top: 70px;
  background: radial-gradient(#48A283 3%, #000000 45%) no-repeat;
  
  @media screen and (max-width: 1100px) {
    height: 500px;
    background-size: 60%;
    background-position: top 60% left 50%;
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
    width: 100%;
    font-size: 25px;
    line-height: 40px;
    margin-bottom: 15px;

    span {
      width: 100%;
      font-size: 35px;
      line-height: 40px;
    }
  }
`

const ItemBorder = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 1200px;
  height: 276px;
  padding: 0 20px;
  border-radius: 10px;
  margin: 80px auto;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    //background: linear-gradient(90deg,#02A6F5,#00EBA4,#000000);
    background: linear-gradient(90deg,#00EBA4,#02A6F5);

    border-radius: 10px;
    opacity: .7;
    left: 0;
    top: 0;
  }
  
  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

const TextContent = styled.div`
  font-size: 24px;
  color: white;
  position: relative;
  
  @media screen and (max-width: 1100px) {
    font-size: 14px;
    line-height: 30px;
    padding: 0 25px;
  }
`

const Line = styled.div`
  width: 1300px;
  height: 1px;
  margin-left: calc((100% - 1300px) / 2);
  background: linear-gradient(90deg,#00EBA4,#02A6F5);
  position: relative;
  top: -100px;

  @media screen and (max-width: 1100px) {
    top: -10px;
    width: 100vw;
    margin: 0;
  }
`


const MetaPlus: React.FC = () => {

  return (
    <div className="section" id="MetaPlus">
      <Wrapper>
        <Container>
          <Title>
            <span> MetaPlus</span>
            <div>NFT + Metaverse</div>
          </Title>
          <ItemBorder>
            <TextContent>The platform will dock with Metaverse projects and provide element creation for it, such as gamefi equipment, virtual world architecture, etc.</TextContent>
          </ItemBorder>
        </Container>
      </Wrapper>
      <Line />
    </div>
  )
}

export default MetaPlus
