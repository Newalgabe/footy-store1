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
          <div className="carousel-caption d-none d-md-block">
            <h5>Spurs 24/25 home kits</h5>
            <p>Gear up in the sleek and stylish Spurs 24/25 home kits, perfect for showing your support with every match.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/1000w/products/19698/32416/141258_NEW_ERA_CONTRAST_PANEL_SPORTS_CAP_1__26524.1719925490.jpg?c=1" className="d-block w-100 carousel-img" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Spurs hat</h5>
            <p>Elevate your fan gear with the sleek and stylish Spurs hat, perfect for showing your team pride wherever you go.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/1000w/products/649/10685/spurs-snap-card-game__09274.1676299183.jpg?c=1" className="d-block w-100 carousel-img" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Spurs card game</h5>
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
    </div>
  );
};

export default Carousel;
