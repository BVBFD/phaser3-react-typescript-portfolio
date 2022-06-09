import React, { useEffect } from 'react';
import styles from './App.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import RocketMousePage from './pages/RocketMousePage/RocketMousePage';
import AvoidBombPage from './pages/AvoidBombPage/AvoidBombPage';
import BunnyJumpPage from './pages/BunnyJumpPage/BunnyJumpPage';
import DragGamePracticePage from './pages/DragGamePracticePage/DragGamePracticePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={styles.appBox}>
      <Routes>
        <Route Phth='/' element={<App />} />
        <Route path='/rocketmouse' element={<RocketMousePage />} />
        <Route path='/avoidbomb' element={<AvoidBombPage />} />
        <Route path='/bunnyjump' element={<BunnyJumpPage />} />
        <Route path='/draggamepractice' element={<DragGamePracticePage />} />
      </Routes>
      <Header />
      <div className={styles.appMainBox}>
        <Link to='/rocketmouse'>
          <div className={styles.imgBox}>
            <img src='../imgs/rocketJump.png' alt='' />
          </div>
        </Link>
        <Link to='/avoidbomb'>
          <div className={styles.imgBox}>
            <img src='../imgs/avoidBomb.png' alt='' />
          </div>
        </Link>
        <Link to='/bunnyjump'>
          <div className={styles.imgBox}>
            <img src='../imgs/bunnyJump.png' alt='' />
          </div>
        </Link>
        <Link to='/draggamepractice'>
          <div className={styles.imgBox}>
            <img src='../imgs/dragGame.png' alt='' />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default App;
