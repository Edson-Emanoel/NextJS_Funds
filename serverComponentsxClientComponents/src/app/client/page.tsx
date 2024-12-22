'use client'

import { useEffect, useState } from "react"
import Button from "../components/button/page";

export default function ClientPage() {
  
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts))
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center text-3xl mt-4 mb-4">Client Component Page</h1>

      <Button />

      {posts.map((post: any) => (
        <div key={post.id} className="bg-stone-700 p-4 rounded-md">
          <h2 className="font-bold text-gray-200">{post.title}</h2>
          <p className="text-gray-300">{post.body}</p>
        </div>
      ))}
    </div>
  )
}