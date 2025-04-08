import React, { useContext } from 'react';
import { ProductContext } from '../../context/products-context';

import Card from '../UI/Card';
import './ProductItem.css';
import { useStore } from '../../hooks-store/store';


const ProductItem = props => {
  const [state, dispatch] =  useStore(false);
  // const {toggleFavFunction} = useContext(ProductContext)


  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={() => dispatch('TOGGLE_FAV', props.id)}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
