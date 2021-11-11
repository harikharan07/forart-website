import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 750px;
  padding-top: 30px;
  background: radial-gradient(#02A6F5 5%, #000000 50%);
  
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
  position: relative;
  width: 1200px;
  height: 276px;
  border-radius: 10px;
  margin: 80px auto;
  font-weight: 600;
  color: #fff;
  //border: 2px solid #00EBA4;
  
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg,#00EBA4,#02A6F5);
    box-sizing: border-box;
    border-radius: 10px;
    opacity: .4;
    left: 0;
    top: 0;
  }
`

const JoinContent = styled.div`
  font-size: 24px;
  color: white;
  position: relative;
  text-align: left;
  height: 100%;
  background: #098fce;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .join-item {
    margin-bottom: 30px;
  }
`

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-size: 46px;
  margin-left: 30px;
  text-align: left;
  
  p {
    color: #00EBA4;
    font-size: 45px;
  }
  
  
`

const Line = styled.div`
  width: 1300px;
  height: 1px;
  margin-left: calc((100% - 1300px) / 2);
  background: linear-gradient(90deg,#00EBA4,#02A6F5);
  position: relative;
  top: -100px;
`


const Airdrop: React.FC = () => {

  return (
    <div className="section" id="Airdrop">
      <Wrapper>
        <Container>
          <Title>
            <div>
              Join us For
              <span>NFT Airdrop</span>
            </div>
          </Title>
          <ItemBorder>
            <JoinContent>
              <div className="join-item">Join us on Twitter and telegram</div>
              <div className="join-item">Invite 5+ friends to join us</div>
              <div className="join-item">Vote for our hackathon</div>
            </JoinContent>
            <Result>
              You may get our total
              <p><span>3000</span> scarce NFTs Airdrop!</p>
            </Result>
          </ItemBorder>
        </Container>
      </Wrapper>
      <Line />
    </div>
  )
}

export default Airdrop
