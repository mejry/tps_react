import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../features/inventory/inventorySlice';

const UpdateProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.inventory.products.find((p) => p.id === productId)
  );

  const [updatedProduct, setUpdatedProduct] = useState(
    product || { id: '', name: '', quantity: 0, price: 0 }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'quantity' || name === 'price' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updatedProduct.name.trim() || updatedProduct.quantity <= 0 || updatedProduct.price <= 0) {
      alert('Veuillez fournir des informations valides pour le produit.');
      return;
    }
    dispatch(updateProduct(updatedProduct));
    alert('Produit mis à jour avec succès !');
  };

  if (!product) {
    return <p>Produit introuvable.</p>;
  }

  return (
    <div>
      <h2>Mettre à jour le produit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={updatedProduct.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantité"
          value={updatedProduct.quantity}
          onChange={handleChange}
          min="1"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={updatedProduct.price}
          onChange={handleChange}
          min="1"
          required
        />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
