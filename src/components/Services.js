import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.webp"
import img2 from "../assets/4.jpg"
import img3 from "../assets/5.jpeg"
import img4 from "../assets/6.avif"

const Services = () => {
  return (
    <div >
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false}>
            <div>
                <img src={img1} alt="Item1" srcset="" />
                <p className="legend">Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" srcset="" />
                <p className="legend">Support</p>
            </div>
            <div>
                <img src={img3} alt="Item1" srcset="" />
                <p className="legend">Full Stack</p>
            </div>
            <div>
                <img src={img4} alt="Item2" srcset="" />
                <p className="legend">Support</p>
            </div>
            <div>
                <img src={img1} alt="Item1" srcset="" />
                <p className="legend">Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" srcset="" />
                <p className="legend">Support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services