import React from 'react'
import CollectionCard from './CollectionCard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './PostList.css'


const PostList = ({posts,setSelectedPost}) => {
    return (
        <div className='postList'>
            {posts.map(post=>(
              
              <Link  to={`/posts/${post.slug}`} >
              <div onClick={()=>setSelectedPost(post.id)}>
                        <CollectionCard key={post.slug} title={post.title} excerpt={post.excerpt} imageSrc={post.featuredImage.url}/>

                    </div>

                    </Link>
             )) })
            
        </div>
    )
}

export default PostList
