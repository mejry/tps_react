import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
function App() {
return (
<Router>
<div className="container mx-auto p-4">
<nav className="mb-4">
<Link to="/" className="text-xl font-bold
text-blue-500">Mini Blog</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/post/:id" element={<PostDetails />} />
</Routes>
</div>
</Router>
);
}
export default App;