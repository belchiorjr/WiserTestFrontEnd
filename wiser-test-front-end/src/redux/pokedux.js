import axios from 'axios'

// constantes
const dataState = {
    pokemons_state: [],
    position: null,
    total:0
}

const LISTAR_POKEMONS = 'LISTAR_POKEMONS';


// reducers
export default function pokemonReducer(state = dataState, action) {
    switch (action.type) {
        case LISTAR_POKEMONS:
            return {...state, pokemons_state: action.payload.pokemons, position: action.payload.position }    
           
   
        default:
            return state;
            
    }
}


// Buscar os pokemons por posição na lista
export const listPokemonAction = (position) => async(dispatch, getState) => {

    try{

        const _position = getState().pokemons.position;

        if (_position != position) {

            const url = `https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=20`;
            const res = await axios.get(url);

            if (res.data.results.length > 0) {
                dispatch({
                    type: LISTAR_POKEMONS,
                    payload: {
                        pokemons: res.data.results,
                        position: position
                    }
                })
            }
        }
        

    } catch(error) {
        console.log(error);
    }
}