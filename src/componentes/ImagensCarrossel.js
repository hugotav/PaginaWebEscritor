import React, { useState, useEffect } from 'react';
import image1 from '../assets/evento-fox.jpg';
import image2 from '../assets/feira-livro-2021.jpg';
import image3 from '../assets/feira-livro-2022.jpg';
import image4 from '../assets/feira-livro-2023.jpg';
import image5 from '../assets/flibe.jpg';
import image6 from '../assets/lançamento-penumbra.jpg';

import '../styles/ImagensCarrossel.css'

const images = [image1, image2, image3, image4, image5, image6];

const ImagensCarrossel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]); // Adicione currentImageIndex como dependência para reagir a mudanças

  return (
    <div className="image-carousel">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" />
    </div>
  );
};

export default ImagensCarrossel;
