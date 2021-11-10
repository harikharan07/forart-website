import React from 'react'
import './App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Top from './pages/top/index'
import MetaPlus from './pages/metaPlus'
import Airdrop from './pages/airdrop'
import Foot from './pages/foot'
import Incubation from './pages/incubation/index'
import Mint from './pages/mint/index'
import Roadmap from './pages/roadmap'

const App = () => {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-sine',
    delay: 0,
  })

  return (
    <div className="App" >
      <Top />
      <Incubation />
      <Mint />
      <MetaPlus />
      <Airdrop />
      <Roadmap />
      <Foot />
    </div>
  )
}

export default App
