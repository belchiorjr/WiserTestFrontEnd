import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import ListPokemons from './components/ListPokemons';
import SearchPokemons from './components/SearchPokemons';
import DetailPokemon from './components/DetailPokemon';


import {Provider} from 'react-redux';
import generateStore from './redux/store';

function App() {

  const store = generateStore();



  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <ListPokemons />
          </Route>
          <Route path="/:position" exact>
            <ListPokemons  />
          </Route>
          <Route path="/search/:q" exact>
            <SearchPokemons />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailPokemon />
          </Route>
        </Switch>
      </Router>
    </Provider>
    );
  }
  
  export default App;
  