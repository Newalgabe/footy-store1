import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://assets.goal.com/images/v3/blt8e21213acd422e5d/GOAL%20-%20Multiple%20Images%20-%202%20Split%20-%20Facebook%20(9).jpg" className="d-block w-100 carousel-img" alt="Slide 1" />
          <div className="carousel-caption">
            <h5>Spurs 24/25 Home Kits</h5>
            <p>Gear up in the sleek and stylish Spurs 24/25 home kits, perfect for showing your support with every match.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/1000w/products/19698/32416/141258_NEW_ERA_CONTRAST_PANEL_SPORTS_CAP_1__26524.1719925490.jpg?c=1" className="d-block w-100 carousel-img" alt="Slide 2" />
          <div className="carousel-caption">
            <h5>Spurs Hat</h5>
            <p>Elevate your fan gear with the sleek and stylish Spurs hat, perfect for showing your team pride wherever you go.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/1000w/products/649/10685/spurs-snap-card-game__09274.1676299183.jpg?c=1" className="d-block w-100 carousel-img" alt="Slide 3" />
          <div className="carousel-caption">
            <h5>Spurs Card Game</h5>
            <p>Experience the thrill of the game with the Spurs card game, where every play brings you closer to victory and showcases your passion for the team.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

        .carousel {
          position: relative;
        }

        .carousel-img {
          border-radius: 1rem;
          object-fit: cover;
          height: 500px;
        }

        .carousel-caption {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          color: #ffffff;
          border-radius: 0.5rem;
          padding: 1rem;
          transition: opacity 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          text-align: center;
        }

        .carousel-item:hover .carousel-caption {
          display: block;
        }

        .carousel-caption h5 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .carousel-caption p {
          font-size: 1.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
        }

        .carousel-control-prev,
        .carousel-control-next {
          width: 4rem;
          height: 4rem;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

export default Carousel;
