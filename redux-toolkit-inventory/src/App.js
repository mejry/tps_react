import React from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
const App = () => {
return (
<div>
<h1>Gestion d’inventaire</h1>
<AddProduct />

<ProductList />
<UpdateProduct productId={1} />
</div>
);
};
export default App;