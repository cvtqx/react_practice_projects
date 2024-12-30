import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import './styles.css';

const StarRating = ({ numberOfStars = 5 }) => {
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (currentIndex) => {
        setRating(currentIndex)
     }
    
    const handleMouseEnter = (currentIndex) => { 
        setHover(currentIndex)
    }
    
    const handleMouseLeave = () => {
        setHover(rating)
    }
  return (
      <div>
          {
              [...Array(numberOfStars)].map((_, index) => {
                  index +=1
                  return <FaStar
                      key={index}
                      className={index <= (hover || rating) ? 'active' : 'inactive'}
                      onClick={()=>handleClick(index) }
                      onMouseEnter={()=>handleMouseEnter(index) }
                      onMouseLeave={ ()=>handleMouseLeave()}
                      size={20}
                  />
              })
          }
    </div>
  )
}

export default StarRating