// ImageSlider.js
import React, { useState } from 'react';
import Image from 'next/image';
import './ImageSlider.css'; // Import CSS file for styling

const images = [
  { src: 'https://fakeimg.pl/600x400?text=Slide+1', alt: 'Slide 1' },
  { src: 'https://fakeimg.pl/600x400?text=Slide+2', alt: 'Slide 2' },
  { src: 'https://fakeimg.pl/600x400?text=Slide+3', alt: 'Slide 3' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider mb-20">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="image-container">
        <Image 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          layout="fill"
          objectFit="cover"
        />
      </div>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ImageSlider;
