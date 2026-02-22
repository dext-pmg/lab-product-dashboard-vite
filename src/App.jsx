import React, { useState } from 'react';
import ProductList from './components/ProductList';

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 'ksh 30000', inStock: true },
  { id: 2, name: 'Phone', price: 'ksh 20000', inStock: false },
  { id: 3, name: 'Tablet', price: 'ksh 15000', inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [filter, setFilter] = useState('all');

  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((p) => {
    if (filter === 'inStock') return p.inStock;
    if (filter === 'outOfStock') return !p.inStock;
    return true;
  });

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      </div>

      <ProductList 
        products={filteredProducts} 
        onRemoveProduct={handleRemove} 
      />
    </div>
  );
};

export default App;