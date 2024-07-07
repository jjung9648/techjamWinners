import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/shop/Header';
import ProductList from '../components/shop/ProductList';

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}

export default ProductDetails;
