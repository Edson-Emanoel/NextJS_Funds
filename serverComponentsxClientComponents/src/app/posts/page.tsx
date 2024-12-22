interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

/* SERVER COMPONENT */ export default async function PostsPage() {

  const response = await fetch(`https://dummyjson.com/posts`)
  const data:ResponseProps = await response.json();

  console.log(data);


  return (
    <div>
      <h1 className="text-center text-3xl mt-4 mb-4">Todos os Posts</h1>

      <div className="flex flex-col gap-4">
        {data.posts.map(post => (
          <div key={post.id} className="bg-stone-700 p-4 rounded-md">
            <h2 className="font-bold text-gray-200">{post.title}</h2>
            <p className="text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// CLIENT COMPONENT
// export default function PostsPage() {
//   return (
//     <div>Todos os Posts</div>
//   )
// }