import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {useState,useEffect} from 'react';
import CollectionCard from './components/CollectionCard';
import placeholderImage from './assets/header/featured01.jpg';
import PostList from './components/PostList';
import Main from './components/Main';
import { request } from 'graphql-request';


const postData = [
  {id:1,imageSrc:'https://i.ibb.co/MM2zk8P/featured01.jpg', title: 'Title one - first post', excerpt:' Excerpt - First post - first post first post '},
  {id:2,imageSrc:'https://i.ibb.co/MM2zk8P/featured01.jpg', title: 'Title two - second post', excerpt:' Excerpt - Second post - second post second post '},
  {id:3,imageSrc:'https://i.ibb.co/MM2zk8P/featured01.jpg', title: 'Title three - three post', excerpt:' Excerpt - Third post - third post thrid post '},
  {id:4,imageSrc:'https://i.ibb.co/MM2zk8P/featured01.jpg', title: 'Title four - four post', excerpt:' Excerpt - Fourth post - fourth  post fourth post '},
  {id:5,imageSrc:'https://i.ibb.co/MM2zk8P/featured01.jpg', title: 'Title five - five post', excerpt:' Excerpt - Fifth post - fifth  post fifth post '},
  {id:6,imageSrc:'https://i.ibb.co/MM2zk8P/featured01.jpg', title: 'Title six - six post', excerpt:' Excerpt - Sixth post - sixth post sixth post '},
  ]
function App() {

 const [selectedPost,setSelectedPost] = useState(0);

 const [posts, setPosts] = useState(null);
console.log("print posts " , posts)
 useEffect(() => {
   const fetchPosts = async () => {
     const { posts } = await request(
       'https://api-ap-southeast-2.graphcms.com/v2/ckxmzqv8r4uz101z0cdnj6roi/master',
       `
     { 
       posts {
         id
      title
         slug
         excerpt
         featuredImage
         {
           url
        }
       }
     }
   `
     );

     setPosts(posts);
   };

   fetchPosts();
 }, []);

  return ( <div className='app'>
    <Header/>
    {
      postData.length>0 && (<>
        <Main postData={postData} selectedPost={selectedPost}/>
        <PostList postData={postData} setSelectedPost={setSelectedPost} />
        </>
      )
    }

  
  </div>
  )
}

export default App;
