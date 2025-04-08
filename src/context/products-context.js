import React from "react";
import { useState } from "react";

const initialState = [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }
    ]

export const ProductContext = React.createContext(
    {products: [],
    toggleFavFunction: (id) => {}
        }
)




export default props => {
    const [productsList, setProducts] = useState(initialState)


    function toggleFavorite(id){
        setProducts(prevList => {
            console.log(prevList, 'preeev')
            const prodIndex = prevList.findIndex(
                p => p.id === id
              );
              const newFavStatus = !prevList[prodIndex].isFavorite;
              const updatedProducts = [...prevList];
              updatedProducts[prodIndex] = {
                ...prevList[prodIndex],
                isFavorite: newFavStatus
              };

            return updatedProducts
        })
    }

        return(
            <ProductContext.Provider   value={{products: productsList, toggleFavFunction: toggleFavorite}} >
                {props.children}
            </ProductContext.Provider>
        )
}