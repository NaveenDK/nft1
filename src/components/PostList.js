import React from 'react'
import CollectionCard from './CollectionCard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './PostList.css'


const PostList = ({posts,setSelectedPost}) => {
    console.log("posts inside postlist " , posts)
    return (
        <div className='postList'>
            {posts.map((post,index)=>(
              
              <Link  to={`/posts/${post.slug}`} >
              <div onMouseEnter={()=>setSelectedPost(index)}>
                        <CollectionCard key={post.slug} title={post.title} excerpt={post.excerpt} imageSrc={post.featuredImage.url}/>

                    </div>

                    </Link>
             )) }
            
        </div>
    )
}

export default PostList
