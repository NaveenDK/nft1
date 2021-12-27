import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {useState,useEffect} from 'react';
import CollectionCard from './components/CollectionCard';
import placeholderImage from './assets/header/featured01.jpg';
import PostList from './components/PostList';
import Main from './components/Main';
import { request } from 'graphql-request';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Post from './components/Post';


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
 const [posts, setPosts] = useState([]);


 useEffect(() => {
   const fetchPosts = async () => {
     const { posts } = await request(
       'https://api-ap-southeast-2.graphcms.com/v2/ckxo1np9m5kw601xpccps4lrn/master',
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
     console.log("print posts " , posts)
     setPosts(posts);
   };

   fetchPosts();
 }, []);

  return (
    <Router>
      <div className='app'>
        
      <Header/>
      

    <Switch>
      <Route exact path='/'>{
        posts.length>0 && (<>
          {/* <Main posts={posts} selectedPost={selectedPost}/>   */}
          <PostList posts={posts} setSelectedPost={setSelectedPost} />
          </>
        )

      } </Route>
       <Route path='/posts/:slug'> 
           <Post posts={posts} /> 
      </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
