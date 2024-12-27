import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../features/inventory/inventorySlice';
const ProductList = () => {
const products = useSelector((state) =>
state.inventory.products);
const dispatch = useDispatch();
const handleDelete = (id) => {
dispatch(deleteProduct({ id }));
};
return (
<div>
<h2>Liste des produits</h2>
<ul>
{products.map((product) => (
<li key={product.id}>
{product.name} - {product.quantity} unités -
${product.price}
<button onClick={() =>
handleDelete(product.id)}>Supprimer</button>
</li>
))}
</ul>
</div>
);
};
export default ProductList;