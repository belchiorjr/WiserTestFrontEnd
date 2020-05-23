import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import ListPokemons from './components/ListPokemons';
import Search from './components/Search';
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
            <Search />
            <ListPokemons />
          </Route>
          <Route path="/:position" exact>
            <Search />
            <ListPokemons  />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailPokemon />
              <Link to="/">
              Voltar
              </Link>
          </Route>
        </Switch>
      </Router>
    </Provider>
    );
  }
  
  export default App;
  