import React from 'react'
import CollectionCard from './CollectionCard'
import './PostList.css'
const PostList = ({posts,setSelectedPost}) => {
    return (
        <div className='postList'>
            {posts.map(post=>(
                    <div onClick={()=>setSelectedPost(post.id)}>
                        <CollectionCard key={post.slug} title={post.title} excerpt={post.excerpt} imageSrc={post.featuredImage.url}/>

                    </div>
             )) })
            
        </div>
    )
}

export default PostList
