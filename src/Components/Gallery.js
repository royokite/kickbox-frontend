import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  let imageStyle = {height: "22rem", width: "100%"}
  return (
    <Carousel 
      cols={3} 
      rows={2} 
      gap={1} 
      loop="true" 
      showDots="true" 
      autoplay={2000} 
      dotColorActive="rgb(124 58 237)" 
      dotColorInactive="rgb(0 0 0)"    
    >
      <Carousel.Item>
        <img width="100%" src="./images/shoe1.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe2.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe3.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe4.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe5.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe6.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe7.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe8.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe9.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe10.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe11.jpg" style={imageStyle} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="./images/shoe12.jpg" style={imageStyle} />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;