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
import SwitchApp from './components/SwitchApp';


function App() {

  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="flex bg-dark w-full min-h-screen p-5 ">
        <div className="w-layout bg-white rounded-lg ml-auto mr-auto mt-auto mb-auto shadow-xl">
            <Router>
              <Switch>
                <Route path="*">
                    <SwitchApp />
                </Route>
                {/* <Route path="/:position" exact>
                  <div className="w-inner ml-auto mr-auto mt-20 mb-10 ">  
                    <Search />
                    <ListPokemons  />
                  </div>  
                </Route>
                <Route path="/detail/:id" exact>
                  <DetailPokemon />
                    <Link to="/">
                      Voltar
                    </Link>
                </Route> */}
              </Switch>
            </Router>
        </div>
      </div>
      
    </Provider>
    );
  }
  
  export default App;
  