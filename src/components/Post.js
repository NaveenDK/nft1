
import './Post.scss'
import React from 'react';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import { request } from 'graphql-request';
import Markdown from 'markdown-to-jsx';


const Post = ({posts}) => {
    const [postsOn, setPostsOn] = useState([]);

    //const { slug } = useParams();    
useEffect(() => {

    if (posts.length===0){
        console.log("array is empty!");

        const fetchPost = async () => {
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
               content{
             html
               }
              }
            }
          `
            );
            console.log("print posts " , posts)
            setPostsOn(postsOn);
          };
         
        fetchPost();
        }
  }, []);


    console.log("posts inside post-component " , posts)
    const { slug } = useParams();
    console.log("slug: ", slug)
    const post = posts.find((post) => post.slug === slug);
    return (
   
    <div className="singlePost">
       <div className="postWrapper">
    {/* <div className="banner"><img src={post.featuredImage.url}></img></div> */}

    <div className="single-post-title"><h1>{post.title}</h1></div>

     <div className="text-content" dangerouslySetInnerHTML={{__html:post.content.html}}/> 
    {/* {console.log("test meow " + post.content )} */}
    {/* <Markdown>{post.content.markdown}</Markdown> */}
    </div>
    </div>

    );
      
    
}

export default Post


// const Post = ({ data: { loading, post } }) => {
//  if (!loading) {
//   return (
//    <article className="wrapper">
//     <div className="post">
//      <h1>{post.title}</h1>
//       <img src={post.image.url} alt="Dogs" />
//       <p dangerouslySetInnerHTML={{ __html: post.description }} />
//     </div>
//    </article>
//   );
//  }
//  return <h2>Loading article...</h2>
// };
// const singlePost = gql`
//  query singlePost($slug: String!) {
//   post: Post(slug: $slug) {
//     id
//     slug
//     title
//     description
//     image {
//      url
//     }
//    }
//  }
// `;
// export default graphql(singlePost, {
//  options: ({ match }) => ({
//   variables: {
//    slug: match.params.slug
//   }
//  })
// })(Post);