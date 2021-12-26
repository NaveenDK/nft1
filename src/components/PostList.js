import React from 'react'
import CollectionCard from './CollectionCard'
import './PostList.css'
const PostList = ({postData,setSelectedPost}) => {
    return (
        <div className='postList'>
            {postData.map(post=>(
                    <div onClick={()=>setSelectedPost(post.id)}>
                        <CollectionCard key={post.id} title={post.title} excerpt={post.excerpt} imageSrc={post.imageSrc}/>

                    </div>
             )) })
            
        </div>
    )
}

export default PostList
