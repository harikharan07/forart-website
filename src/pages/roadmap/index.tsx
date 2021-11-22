import React from 'react'
import styled from 'styled-components'
import Idea from '../../image/roadmap/idea.png'
import Arrow from '../../image/roadmap/arrow.png'
import Search from '../../image/roadmap/search.png'
import Design from '../../image/roadmap/design_nor.png'


const Wrapper = styled.div`
  width: 100%;
  height: 1100px;
  padding-top: 30px;
  background: radial-gradient(#00EBA4 5%, #000000 45%) no-repeat;
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const RoadmapContainer = styled.div`
  display: flex;
  justify-content: center;
`

const RoadmapBorder = styled.div`
  width: 800px;
  height: 1000px;
  
  @media screen and (max-width: 1100px) {
    width: 85vw;
    height: fit-content;
  }
  
`

const Title = styled.div`
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  color: #fff;
  margin-bottom: 100px;

  span {
    padding: 0 16px;
    font-weight: 600;
    font-size: 65px;
    line-height: 80px;
    color: #00EBA4;
    opacity: .96;
  }
  
  @media screen and (max-width: 1100px) {
    margin-bottom: 50px;

    span {
      font-size: 36px;

    }
  }
`

const RoadmapItem = styled.div`
  width: 100%;
  height: 250px;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 5px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(90deg,#00EBA4,#02A6F5);
    opacity: .4;
    left: 0;
    top: 0;
  }
  
  &:nth-child(3) {
    .arrow {
      display: none;
    }
  }
  
 @media screen and (max-width: 1100px) {
 }
  


`

const LeftArea = styled.div`
  width: 30%;
  height: 100%;
  position: relative;

  .describe {
    width: 145px;
    text-align: center;
    position: absolute;
    bottom: 145px;
    font-weight: 600;
    left: 70px;
  }

  .icon {
    width: 50px;
    padding: 20px;
    border-radius: 90px;
    background: linear-gradient(270deg, #67ebba, #67eaba .34%, #69c2ce 15.61%, #6ba1de 31.22%, #6c87ea 47.25%, #6d75f3 63.72%, #6e6af8 80.92%, #6e66fa);
    position: absolute;
    box-shadow: -5px 5px 5px #212121;
    bottom: 200px;
    right: 55px;
  }

  .arrow {
    position: absolute;
    width: 50px;
    top: 110px;
    right: 75px;
  }
  
  @media screen and (max-width: 1100px) {
    .describe {
      width: 100%;
      left: 0px;
      font-size: 15px;
    }
    
    .icon {
      width: 25px;
      right: 15px;
    }
    
    .arrow {
      right: 20px;

    }
  }
  
`

const RightArea = styled.div`
  width: 500px;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
  
  .item-title{
    font-weight: 600;
    font-size: 26px;
    line-height: 29px;
    color: #fff;
    margin: 20px;
  }
  
  .item-detail {
    margin: 20px;
    font-size: 17px;
    line-height: 19px;
    color: #fff;
    font-weight: 500;
  }

  @media screen and (max-width: 1100px) {
    width: 70%;
    .item-title{
      font-size: 18px;
      line-height: 12px;
    }
    .item-detail {
      margin: 20px;
      font-size: 13px;
      line-height: 19px;
    }
  }
  
`
type mapItem = {
  icon:any
  year:string
  describe:string
  title: string
  detail: string[]
}


const Roadmap: React.FC = () => {

  const items: mapItem[] = [
    {
      icon: Idea,
      year:'2021',
      describe:'Q4',
      title:'Milestone 1',
      detail:[
        '1. AI-Kit on the testnet',
        '2. Airdrop Financial NFTs.',
        '3. NFT + DeFi upgrade-function on the internet'
      ]
    },
    {
      icon: Search,
      year:'2022',
      describe:'Q1',
      title:'Milestone 2',
      detail:[
        '1. IDO (January 2022)',
        '2. NFT Saas on the testnet',
        '3. MetaPlus on the testnet'
      ]
    },
    {
      icon: Design,
      year:'2022',
      describe:'Q2',
      title:'Milestone 3',
      detail:[
        '1. Mainnet',
        '2. Support cross-chain'
      ]
    },

  ]
  return (
    <div className="section" id="Roadmap">
      <Wrapper >
        <Title><span>Roadmap</span></Title>
        <RoadmapContainer >
          <RoadmapBorder>

            {
              items.map(item => (
                <RoadmapItem key={item.title}>
                  <LeftArea>
                    <img className="icon" src={item.icon} />
                    <div className="describe">
                      <div>{item.year}</div>
                      <div>{item.describe}</div>
                    </div>
                    <img className="arrow" src={Arrow} />
                  </LeftArea>
                  <RightArea >
                    <div className="item-title">{item.title}</div>
                    <div className="item-detail" >
                      {item.detail.map((row, idx) => (
                        <p key={idx}>{row}</p>
                      ))}
                    </div>
                  </RightArea>
                </RoadmapItem>
              ))
            }

          </RoadmapBorder>
        </RoadmapContainer>
      </Wrapper>
    </div>
  )
}

export default Roadmap
