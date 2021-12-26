import React from 'react'
import './Main.css'
import {useState,useEffect} from 'react';
const Main = ({selectedPost,postData}) => {

    const[activePost,setActivePost] =useState(postData[0])

    useEffect(()=>{
      setActivePost(postData[selectedPost])
    },[postData,selectedPost])
  


    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='postHighlight'>
                    <div className='postContainer'>
                    <img 
                    className='selectedPost'
                    src= {activePost.imageSrc}
                    alt=''
                    />
                </div>
                </div>
            
            <div className='postDetails' style={{color:'#fff'}}>
                <div className='title'>
                   {activePost.title} </div>
                    <span className='itemNumber'></span>
                    <span className='postExcerpt'>{activePost.excerpt}</span>
                 
                </div>

           <div className='otherDetails'>
           
          </div>
        </div>
        </div>
    )
}

export default Main
