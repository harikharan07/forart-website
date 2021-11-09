import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 750px;
  padding-top: 70px;
  background: radial-gradient(#48A283 3%, #000000 45%);
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
    background-size: 60%;
    background-position: top 50% left 20%;
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
  line-height: 46px;
  font-size: 65px;
  color: #00EBA4;
  p {
    margin-top: 20px;
    padding: 0 16px;
    font-weight: 600;
    opacity: .96;
    font-size: 38px;
    line-height: 46px;
    color: #fff;
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
    background: linear-gradient(90deg,#02A6F5,#00EBA4,#000000);
    
    opacity: .7;
    left: 0;
    top: 0;
  }
`

const TextContent = styled.div`
  font-size: 24px;
  color: white;
  position: relative;
`

const Line = styled.div`
  width: 1300px;
  height: 1px;
  margin-left: calc((100% - 1300px) / 2);
  background: linear-gradient(90deg,#00EBA4,#02A6F5);
  position: relative;
  top: -100px;
`


const MetaPlus: React.FC = () => {

  return (
    <div className="section" id="MetaPlus">
      <Wrapper>
        <Container>
          <Title>
            <div>
              MetaPlus
              <p>NFT + Metaverse</p>
            </div>
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
