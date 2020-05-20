import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokemonReducer from './pokedux'

const rootReducer = combineReducers({
    pokemons:pokemonReducer
})


// Extensao do Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore () {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}