import React from 'react';
import './Gallery.css'
import { useState } from 'react'
import ArrowBack from '../Icons/ArrowBack'
import ArrowForward from '../Icons/ArrowForward'

function Gallery({ pictures }) {
    const [index, setIndex] = useState(0)
    const next = () => {
        if (index < pictures.length - 1) {
            setIndex(index + 1)
        } else { setIndex(0) }
    }
    const prev = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else { setIndex(pictures.length - 1) }
    }
    return(
        <div className='gallery-slider'>
            <div className='gallery-slider-btns'>
                <div className='arrow' onClick={prev}> <ArrowBack /></div>
                <div className='arrow' onClick={next}> <ArrowForward /></div>
            </div>

            <img src={pictures[index]} alt='' />
        </div>
    )
}

export default Gallery;