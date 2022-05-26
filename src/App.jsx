import React, { useEffect } from 'react'
import styles from './App.module.css'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import RocketMousePage from './pages/RocketMousePage/RocketMousePage'
import AvoidBombPage from './pages/AvoidBombPage/AvoidBombPage'
import BunnyJumpPage from './pages/BunnyJumpPage/BunnyJumpPage'
import DragGamePracticePage from './pages/DragGamePracticePage/DragGamePracticePage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className={styles.appBox}>
      <Routes>
        <Route Phth="/" element={<App />} />
        <Route path="/rocketmouse" element={<RocketMousePage />} />
        <Route path="/avoidbomb" element={<AvoidBombPage />} />
        <Route path="/bunnyjump" element={<BunnyJumpPage />} />
        <Route path="/draggamepractice" element={<DragGamePracticePage />} />
      </Routes>
      <Header />
      <div className={styles.appMainBox}>
        <Link
          to="/rocketmouse"
          onClick={() => {
            window.location.replace('/rocketmouse')
          }}
        >
          <div className={styles.imgBox}>
            <img src="../imgs/rocketJump.png" alt="" />
          </div>
        </Link>
        <Link
          to="/avoidbomb"
          onClick={() => {
            window.location.replace('/avoidbomb')
          }}
        >
          <div className={styles.imgBox}>
            <img src="../imgs/avoidBomb.png" alt="" />
          </div>
        </Link>
        <Link
          to="/bunnyjump"
          onClick={() => {
            window.location.replace('/bunnyjump')
          }}
        >
          <div className={styles.imgBox}>
            <img src="../imgs/bunnyJump.png" alt="" />
          </div>
        </Link>
        <Link
          to="/draggamepractice"
          onClick={() => {
            window.location.replace('/draggamepractice')
          }}
        >
          <div className={styles.imgBox}>
            <img src="../imgs/dragGame.png" alt="" />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default App
