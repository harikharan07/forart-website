import React from 'react'
import './App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Top from './pages/top/index'
import Wallet from './pages/wallet/index'
import Play from './pages/play/index'
import MetaPlus from './pages/metaPlus'
import Airdrop from './pages/airdrop'
import Foot from './pages/foot'

const App = () => {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-sine',
    delay: 0,
  })

  return (
    <div className="App" >
      <Top />
      <Wallet />
      <Play />
      <MetaPlus />
      <Airdrop />
      <Foot />
    </div>
  )
}

export default App
