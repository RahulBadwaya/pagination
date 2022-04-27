
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Post = ()=>{
    const [post , setPost] = useState([])
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/?id=${id}`)
        .then(resp=>resp.json())
        .then(data=>{
            setPost(data)
            console.log(data)
        })
    },[])


    return <>
         <table className="table table-striped">
             <thead>
                 <tr>
                     <th>S.No</th>
                     <th>Title</th>
                     <th>Body</th>
                 </tr>
             </thead>
             <tbody>
                 {post.map((pst,i)=>{
                     return <tr>
                         <td>{i+1}</td>
                         <td>{pst.title}</td>
                         <td>{pst.body}</td>
                     </tr>
                 })}
             </tbody>
         </table>
    </>
}
export default Post