
import './Post.css'
import React from 'react';
import { useParams } from 'react-router-dom';


const Post = ({posts}) => {
    console.log("posts inside post-component " , posts)
    const { slug } = useParams();
    console.log("slug: ", slug)
    const post = posts.find((post) => post.slug === slug);
    return (
    <div className="singlePost">

    <div className="banner"><img src={post.featuredImage.url}></img></div>

    <div className="single-post-title"><h1>{post.title}</h1></div>
    <div className="text-content" dangerouslySetInnerHTML={{__html:post.content.html}}/>
     
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