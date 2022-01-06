import React from 'react'
import './Main.scss'
import {useState,useEffect} from 'react';
const Main = ({selectedPost,posts}) => {

    const[activePost,setActivePost] =useState(posts[0])
    console.log("activePost ", activePost)

    useEffect(()=>{
      setActivePost(posts[selectedPost])
    },[posts,selectedPost])
  


    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='postHighlight'>
                    <div className='postContainer'>
                    <img 
                    className='selectedPost'
                    src= {activePost.featuredImage.url}
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
