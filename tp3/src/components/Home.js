import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {
const [posts, setPosts] = useState([]);
useEffect(() => {
// Récupérer les données des articles
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => setPosts(data.slice(0, 10))) // Limite à 10 articles
.catch(error => console.error(error));
}, []);
return (
<div>
<h1 className="text-3xl font-bold mb-4">Articles</h1>
<ul className="space-y-2">
{posts.map(post => (
<li key={post.id}>
<Link to={`/post/${post.id}`} className="block p-4 bg-white
rounded-lg shadow-md hover:bg-gray-100">
<h2 className="text-lg font-semibold">{post.title}</h2>
</Link>
</li>
))}
</ul>

</div>
);
}
export default Home;