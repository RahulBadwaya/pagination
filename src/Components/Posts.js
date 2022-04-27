import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => {
       setPosts(data);
      });
  }, []);
  return <>
   <table className="table table-striped">
       <thead>
           <tr>
            <th>S.No</th>
           <th>Title</th>
           <th>Body</th>
           <th>Post</th>
           </tr>
       </thead>
       <tbody>
           {posts.map((pst,i)=>{
               return <tr>
                   <td>{i+1}</td>
                   <td>{pst.title}</td>
                   <td>{pst.body}</td>
                   <td> <Link to={"/post/"+pst.id}>
                     <button className="btn btn-danger" >View</button>
                     </Link></td>
               </tr>
           })}
       </tbody>
   </table>
  </>;
};
export default Posts;
