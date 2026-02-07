import React, { useState } from 'react';
import './spot.css';

const Spot = () => {
  const products = [
    { id: 1, name: 'Polo Shirt', price: '$400', img: 'https://i.pinimg.com/736x/df/37/05/df37053b5a6396528bd4dc1cba805578.jpg' },
    { id: 2, name: 'Vintage Shoes', price: '$189', img: 'https://i.pinimg.com/736x/25/37/36/253736549705b703357f3b384ea2abf9.jpg' },
    { id: 3, name: 'Track Jacket', price: '$720', img: 'https://i.pinimg.com/736x/9d/fe/da/9dfedade003e827b3ecb4544bb083699.jpg' },
    { id: 5, name: 'Cap', price: '$235', img: 'https://i.pinimg.com/1200x/c6/33/d8/c633d83ec4ec80fa17f1ea32ba52b5a3.jpg' },
    { id: 6, name: 'Blue Hoodie', price: '$575', img: 'https://i.pinimg.com/1200x/a2/b2/53/a2b253f15d91fbc20587ef8f135736df.jpg' },
    { id: 7, name: 'Graphic Tee', price: '$340', img: 'https://i.pinimg.com/1200x/d5/7e/ed/d57eedee18c1976da21442205cf69827.jpg' },
    { id: 8, name: 'White Sweatshirt', price: '$665', img: 'https://i.pinimg.com/1200x/a6/49/da/a649dabeff9bb820298b97f198299290.jpg' },
    { id: 9, name: 'White Sweatshirt', price: '$665', img: 'https://i.pinimg.com/736x/64/59/3b/64593b4ee8a88de0e3ff74e53a48960b.jpg' },
    { id: 10, name: 'White Sweatshirt', price: '$345', img: 'https://i.pinimg.com/736x/07/f5/1e/07f51e6725361eb8a93f907acc366ca5.jpg' },
    { id: 11, name: 'White Sweatshirt', price: '$265', img: 'https://i.pinimg.com/736x/bf/9e/06/bf9e0643990e4f4366237b87af33efec.jpg' },
    { id: 12, name: 'White Sweatshirt', price: '$657', img: 'https://i.pinimg.com/1200x/50/19/7d/50197d5c2829254f6ae0160389fc6c1d.jpg' },
    { id: 13, name: 'White Sweatshirt', price: '$685', img: 'https://i.pinimg.com/1200x/4c/1b/c2/4c1bc209eb5e14b4157cc584f92b2720.jpg' },
    { id: 14, name: 'White Sweatshirt', price: '$235', img: 'https://i.pinimg.com/736x/37/67/69/376769b00f93e591ff85866698a9bd97.jpg' },
    { id: 15, name: 'White Sweatshirt', price: '$615', img: 'https://i.pinimg.com/1200x/48/15/de/4815de65f1a158a211413c074c5670e2.jpg' },
    { id: 16, name: 'White Sweatshirt', price: '$115', img: 'https://i.pinimg.com/1200x/e4/8a/b3/e48ab3a1a17764a7a8345400bc9bebd5.jpg' },
    { id: 17, name: 'White Sweatshirt', price: '$185', img: 'https://i.pinimg.com/1200x/49/51/33/495133b25cc28b5f6e28876bf0a1d41e.jpg' },
    { id: 18, name: 'White Sweatshirt', price: '$440', img: 'https://i.pinimg.com/1200x/f6/87/3c/f6873c1ee49a70293b4ee9300a6d7c02.jpg' },
    { id: 19, name: 'White Sweatshirt', price: '$389', img: 'https://i.pinimg.com/736x/46/90/e3/4690e32bceb99ea985c886f600e2b858.jpg' },
    { id: 20, name: 'White Sweatshirt', price: '$577', img: 'https://i.pinimg.com/1200x/3a/07/3b/3a073b9e34d7663ac1f387e69600f24c.jpg' },
    { id: 21, name: 'White Sweatshirt', price: '$285', img: 'https://i.pinimg.com/1200x/31/d1/07/31d10762c811fc78c0a259e07eb72c0c.jpg' },
    { id: 22, name: 'White Sweatshirt', price: '$145', img: 'https://i.pinimg.com/1200x/16/83/84/168384186629e7467a59b48647db4c47.jpg' },
    { id: 23, name: 'White Sweatshirt', price: '$999', img: 'https://i.pinimg.com/1200x/5a/b4/02/5ab402c3b2912dd6a08844092f66a534.jpg' },
    { id: 24, name: 'White Sweatshirt', price: '$653', img: 'https://i.pinimg.com/736x/90/52/e4/9052e4b51b45f6ec05aa37fa97ed4606.jpg' },
    { id: 25, name: 'White Sweatshit', price: '$184', img: 'https://i.pinimg.com/1200x/aa/6a/92/aa6a92f8c5d09d6b05085d6c07737e92.jpg' },
  ];

  const images = [
    'https://i.pinimg.com/1200x/4a/b8/3b/4ab83bde0ece46cccbf318ec1d40c5ea.jpg',
    'https://i.pinimg.com/1200x/29/76/0a/29760af7958a813fe52d7e1165c666d3.jpg',
    'https://i.pinimg.com/736x/4b/89/fa/4b89fa8b92280343bc47bc3eaad0407f.jpg',
    'https://i.pinimg.com/736x/ff/0b/9e/ff0b9eaae8f71584de4f4852aa12f15b.jpg',
    'https://i.pinimg.com/736x/b1/85/8c/b1858c7561730507f1aae23d124222f9.jpg',
    "https://i.pinimg.com/736x/f0/36/db/f036db207ae73b7d37c6811b36bbb623.jpg",
    "https://i.pinimg.com/1200x/c1/fa/62/c1fa62b630b18a4326237cf2d967e035.jpg",
    'https://i.pinimg.com/736x/d4/2c/bb/d42cbb79ef63b33d3043f111849a6858.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };


  return (
    <div className="spot-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <span>Home</span>
          <span>Shop</span>
          <span>Pages</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
        <div className="logo">Mixtas</div>
        <div className="nav-icons">
          <span>👤</span>
          <span>🔍</span>
          <span>♡</span>
          <span>🛒 0</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <p className="subtitle">URBAN EDGE</p>
          <h1>Jackets for the <br /> Modern Man</h1>
          <button className="cta-button">Discover Now</button>
        </div>

        <div className="hero-image-container">
          <img
            src={images[currentIndex]}
            alt="Hero"
            className="hero-image"
          />
          <button className="next-btn" onClick={nextSlide}>
             →
          </button>
        </div>

      </header>

      {/* New Arrivals */}
      <section className="arrivals">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.img} alt={product.name} />
              </div>
              <p className="product-title">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Spot;

