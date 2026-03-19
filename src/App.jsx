
import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Spot from './pages/Spot';
import Handle from './pages/Handle';
import Pick from './pages/Pick';
import Atlas from './pages/Atlas';

// Главная страница
function Home() {
  const products = [
    {
      id: 1,
      title: 'AURORA SILK',
      subtitle: 'lilla sweatshirt male',
      price: '$1,999',
      img: 'https://i.pinimg.com/736x/28/58/a7/2858a7734f20757f2f540e7be755e309.jpg',
    },
    {
      id: 2,
      title: 'DRAFT SILVER',
      subtitle: 'RAIN BLOC JACKET',
      price: '$2,500',
      img: 'https://i.pinimg.com/736x/8e/9b/b3/8e9bb3da99672c32280877e4f865141b.jpg',
    },
    {
      id: 3,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/736x/98/cb/65/98cb655d05e6bce37b3fa803c082eec6.jpg',
    },
    {
      id: 4,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/736x/16/85/a1/1685a1692790bb03bbdd365f3439a164.jpg',
    },
    {
      id: 5,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/736x/fb/73/2c/fb732c0a782a6aaef45010e8743414b8.jpg',
    },
    {
      id: 6,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/1200x/4b/22/7d/4b227d582f0914b66d6317f3e6d32627.jpg',
    },
    {
      id: 7,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/736x/4f/22/e8/4f22e861a3e226abab175323b3b9471b.jpg',
    },
    {
      id: 8,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/1200x/32/52/28/325228ec0692bf1b65daf60e6350ce33.jpg',
    },
    {
      id: 9,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/736x/7f/ef/31/7fef317a93507748f082c9bec41d2376.jpg',
    },
    {
      id: 10,
      title: 'STEALTH BLACK',
      subtitle: 'SERIES MODEL',
      price: '$1,500',
      img: 'https://i.pinimg.com/736x/c7/8e/06/c78e06a06ea1a86d8f57a18fc8434833.jpg',
    },
  ];

  return (
    <>

      <div className="container">
        <div className="side-indicator">
          <div className="dash" />
          <div className="dash active" />
          <div className="dash" />
          <div className="dash" />
        </div>

        <header className="header">

          <nav className="nav">
            <Link to="/spot" className="nav-link">Spot</Link>
            <Link to="/handle" className="nav-link">Handle</Link>
            <Link to="/pick" className="nav-link">Pick</Link>
            <Link to="/atlas" className="nav-link">Atlas</Link>
          </nav>
        </header>
        <main className="main-content">
          <div className="text-group">
            <h1 className="title">FUTURE</h1>
            <p className="subtitle">is near</p>
            
            <div className="video-section">
            <button className="play-button">
              <div className="triangle" />
            </button>
            <span className="watch-text">Watch Video</span>
            {/* <p className="description">
              Spot uses stereo cameras to avoid obstacles and people
              as it moves through dynamic work sites.
            </p> */}
          </div>
          </div>

          <div className="robots-wrapper">
            <img
              className="robots-img"
              src="https://i.pinimg.com/736x/c6/b6/28/c6b6281dd689a46fd7fbf62a4eab9a89.jpg"
              alt="Robot"
            />
            <img
              className="robots-img"
              src="https://i.pinimg.com/1200x/c4/d1/c3/c4d1c34d08ed3d775babc79998264798.jpg"
              alt="Robot"
            />
            <img
              className="robots-imgi"
              src="https://i.pinimg.com/736x/a2/1a/54/a21a546a07e13b52004a2e6875946b10.jpg"
              alt="Robot"
            />
          </div>
        </main>


        <footer className="footer">
          {/* <div className="video-section">
            <button className="play-button">
              <div className="triangle" />
            </button>
            <span className="watch-text">Watch Video</span>
            <p className="description">
              Spot uses stereo cameras to avoid obstacles and people
              as it moves through dynamic work sites.
            </p>
          </div> */}
          
        </footer>
     
      </div>

      <div className="wrapper">
        <header className="header-top">
          <h1 className="new-collection-title">New Collection</h1>
          <div className="collection-info">
            AURORA SERIES / 2026 <br />
            STATE COLD LINE
          </div>
        </header>

        <div className="grid-container">
          <div className="main-card">
            <img
              src="https://i.pinimg.com/736x/cf/d1/5f/cfd15f5ec353bcd0fd9038eff0677cf7.jpg"
              alt="Aurora"
            />
            <div className="aurora-label">AURORA™</div>
          </div>

          {products.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.img} alt={item.title} />
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Главный App с роутами
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spot" element={<Spot />} />
      <Route path="/handle" element={<Handle />} />
      <Route path="/pick" element={<Pick />} />
      <Route path="/atlas" element={<Atlas />} />
      <Route path="/spot" element={<Spot />} />
    </Routes>
  );
}

export default App;


