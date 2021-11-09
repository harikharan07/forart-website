import React from 'react'
import './App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Top from './pages/top/index'
import Wallet from './pages/wallet/index'
import Play from './pages/play/index'

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
    </div>
  )
}

export default App
