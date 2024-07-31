/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  const images = [
    { src: '../src/assets/first-text.jpg', alt: 'First chat', description: 'The first time deeksha got vibhorified' },
    { src: '../src/assets/discord-ss2.png', alt: 'first video call', description: 'Thanks to 8 Ball Pool we saw each other for the first time on video call' },
    { src: '../src/assets/first-meet.jpg', alt: 'first meet up', description: 'One of the most special days in both of our lives, we instantly knew we had something ' },
    { src: '../src/assets/god-img.jpg', alt: 'I love you deeksha!', description: 'After trying very hard not to, I finally fell for deeksha because I thought I would be an idiot if I just let this gem of a woman vanish  ' },
    { src: '../src/assets/manali.jpg', alt: 'first trip together', description: 'An experience that brought us even more close , and for me it is and will always be the highlight of my entire life' },
    { src: '../src/assets/angel-img.jpg', alt: 'many more trips and fights and love making ', description: 'I still fall in love with deeksha everyday for various reasons and that is why I know I made the right choice ' },
];

  return (
    <div className="image-carousel-container">
      <Carousel 
        className="custom-carousel"
        indicators={false}
        interval={3000}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block align-center carousel-image"
              src={image.src}
              alt={image.alt}
            />
            <Carousel.Caption className="custom-caption ">
              <h3>{image.alt}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;