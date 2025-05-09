import React, { useEffect, useLayoutEffect, useState } from 'react'

function FetchApi() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(result=>setPost(result))
        .catch((err)=>{
            console.log("no data found" + err)
        })
    })
  return (
    <>
    <div>FetchApi</div>
    <ul>
    {post.map(pst=>{
        return(
            <>
            <li key={pst.id}>{pst.id}.{pst.title}</li>
         
            </>
        )
    })}
    </ul>
    </>

  )
}

export default FetchApi