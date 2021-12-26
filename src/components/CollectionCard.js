import React from 'react'
import placeholderImage from '../assets/header/featured01.jpg';
import './CollectionCard.css';


const CollectionCard = ({id,imageSrc, title ,excerpt}) => {
    return (
        <div className='collectionCard'>
            <img src={imageSrc} alt=""/>
            <div className='details'>
            <div className='post-title'>
                {title}
            </div>
            <div className='excerpt'>
                {excerpt}
            </div>
            </div>
        </div>
    )
}

export default CollectionCard
