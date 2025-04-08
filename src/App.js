import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

//USE CONTEXT IS BETTER FOR DATA THAT IT IS NOT CHANGING ALL THE TIME -> LOW FRECUENCY 
//CONTEXT API -> IT HAS NO WAY TO IDENTIFY WHICH COMPONENT IT IS CHANGING IS STATE
// THAT IS WHY ALL THE COMPONENTS ARE RE RENDERED IF AT LIST THE STATE OF ONE IS CHANGED
// THIS IS THE PARTH THAT IMPACTS


const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </React.Fragment>
  );
};

export default App;
