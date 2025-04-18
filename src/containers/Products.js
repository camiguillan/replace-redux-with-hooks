import React, { useContext } from 'react';
import { ProductContext } from '../context/products-context';
import { useStore } from '../hooks-store/store';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  // const productList = useContext(ProductContext).products
  // console.log(productList) 
  const  [state, dispatch] = useStore();



  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
