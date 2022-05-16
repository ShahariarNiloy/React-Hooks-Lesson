import React, {useState, useEffect} from 'react';
import axios from 'axios';
function UseEffectThree() {
    const [post, setPost] = useState<any>({})
    const [id,setId] = useState<any>(1)
    const [idFromBtn, setIdFromBtn] = useState<any>(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[idFromBtn])
    return (
        <div>
            <input type='text' value={id} onChange={(e)=> setId(e.target.value)} />
            <input type = 'button' value='Hit to change' onClick={()=>setIdFromBtn(id)}/>
            {/* <ul>
                {
                    post.map((post:any) => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
            <div>
                {post.title}
            </div>
        </div>
    );
}

export default UseEffectThree;