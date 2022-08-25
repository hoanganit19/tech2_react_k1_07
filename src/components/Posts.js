import React, {useEffect, useState} from 'react'

export default function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/posts')
    .then(response => response.json())
    .then(posts => {
        setPosts(posts);
    })
  }, [posts])

  const addPost = () => {
      fetch('http://localhost:3004/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: 'Test Tech2',
            content: 'Test Tech2'
          })
      })
      .then(response => response.json())
      .then(response => {

      });  
  }


  return (
    <>
        <h1>Posts</h1>
        <button type='button' onClick={addPost}>Add</button>
        {
            posts.map(post => {
                return <h2 key={post.id}>{post.title}</h2>
            })
        }
    </>
  )
}
