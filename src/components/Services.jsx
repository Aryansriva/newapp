import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import img3 from '../assets/1.png';
function Services() {
  return (
    <div>
      <Carousel 
      infiniteLoop
      autoPlay
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      interval={1000}
      >
        
        <div>
            <img src={img1} alt="Error" />
            <p className="legend">Full Stack Engineering</p>
        </div>
        <div>
            <img src={img2} alt="Error" />
            <p className="legend">IOT</p>
        </div>
        <div>
            <img src={img3} alt="Error" />
            <p className="legend">Data Analyst</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
