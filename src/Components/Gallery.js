import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel 
      cols={3} 
      rows={2} 
      gap={10} 
      loop="true" 
      showDots="true" 
      autoplay={2000} 
      dotColorActive="rgb(132 204 22)" 
      dotColorInactive="rgb(0 0 0)"    
    >
      <Carousel.Item>
        <img width="100%" src="./images/shoe1.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe2.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe3.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe4.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe5.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe6.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe7.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe8.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe9.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe10.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe11.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe12.jpg" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;