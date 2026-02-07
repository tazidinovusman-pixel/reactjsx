import React, { useState } from 'react'; // Объединили импорт
import './Handle.css';

const App = () => {
  const items = [
    { id: 1, img: 'https://i.pinimg.com/1200x/de/ce/13/dece13e0348b59523381129f5b09cf9c.jpg' },
    { id: 2, img: 'https://i.pinimg.com/1200x/c4/d1/c3/c4d1c34d08ed3d775babc79998264798.jpg' },
    { id: 3, img: 'https://i.pinimg.com/1200x/ae/4e/bc/ae4ebcf2c9d029626b1cec215e33c3a6.jpg' },
    { id: 4, img: 'https://i.pinimg.com/1200x/1c/ca/20/1cca202dbbde7c247d8329195ade200a.jpg' },
    { id: 5, img: 'https://i.pinimg.com/1200x/55/bf/6f/55bf6f4b0b6f5be8fd97d0c73491ac62.jpg' },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  return (

    <div className="container">
      <header className="header">HOSTEM</header>
      <div className="gallery">
        {items.map((item, index) => (
          <div
            key={item.id}
          
            className={`item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.img} alt={`Look ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;