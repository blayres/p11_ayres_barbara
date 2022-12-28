import React from 'react';
import './Gallery.css'
import { useState } from 'react'
import ArrowBack from '../Icons/ArrowBack'
import ArrowForward from '../Icons/ArrowForward'

function Gallery({ pictures }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        if (currentSlide === pictures.length - 1) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      }

    const goToPreviousSlide = () => {
        if (currentSlide === 0) {
        setCurrentSlide(pictures.length - 1);
        } else {
        setCurrentSlide(currentSlide - 1);
        }
    }

    return(
        <div className='gallery-slider'>
            {pictures.map((picture, index) => (
            <div className='gallery-slider-btns'>
                <div key={picture.id} className='arrow' onClick={goToPreviousSlide}> <ArrowBack /></div>
                <div key={picture.id} className={index === currentSlide ? 'active' : ''}  onClick={goToNextSlide}> <ArrowForward /> </div>
            </div>
                ))}

            <img src={pictures[currentSlide]} alt='' />
            <div className='indicators'>
                {currentSlide + 1}/{pictures.length}
            </div>
        </div>
    )
}

export default Gallery;