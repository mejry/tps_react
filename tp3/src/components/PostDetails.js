import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function PostDetails() {
const { id } = useParams();
const [post, setPost] = useState(null);
useEffect(() => {
// Récupérer les détails de l'article
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response => response.json())
.then(data => setPost(data))
.catch(error => console.error(error));
}, [id]);
if (!post) return <div>Loading...</div>;
return (
<div className="p-6 bg-white rounded-lg shadow-md">
<h1 className="text-2xl font-bold mb-2">{post.title}</h1>
<p className="text-gray-700">{post.body}</p>
</div>
);
}
export default PostDetails;