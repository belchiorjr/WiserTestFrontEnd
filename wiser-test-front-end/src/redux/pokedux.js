import axios from 'axios'

// constantes
const dataState = {
    pokemons_state: [],
    positions_init_pages_state: [],
    position_state: null,
    total_state:0
}

const LISTAR_POKEMONS = 'LISTAR_POKEMONS';


// Reducers
export default function pokemonReducer(state = dataState, action) {
    switch (action.type) {
        case LISTAR_POKEMONS:
            return {...state, 
                pokemons_state: action.payload.pokemons, 
                actual_position: action.payload.position, 
                total: action.payload.total,
                positions_init_pages_state: action.payload.positions_inits_pages
            }    
   
        default:
            return state;
    }
}


// Buscar os pokemons por posição no web-service
export const listPokemonAction = (position) => async(dispatch, getState) => {

    try{
        const _position = getState().pokemons.actual_position;
        
        if (_position !== position) {

            const limit = 20;
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=${limit}`;
            const res = await axios.get(url);

            if (res.data.results.length > 0 ) {

                const total = res.data.count
                const total_pages = (total%limit > 0 ? 1 : 0) + parseInt(total/limit);
                
                var positions_inits_pages = [];
                const pageSelect = (parseInt(position) / limit) + 1;

                
                // Algoritmo de paginação.
                for (var i = 0; i < total_pages; i++) {
                    
                    if (pageSelect < 4 && i > 7  && (i !== 0 && i !== total_pages - 1)) {
                        continue;
                    } else if (pageSelect > (total_pages - 4) && (i <= (total_pages - 9) && i !== 0)) {
                        continue;
                    } else if ((pageSelect > 3 && pageSelect < (total_pages - 3)) && (i < pageSelect - 3 || i > pageSelect + 3) && (i !== 0 && i !== total_pages - 1)) {
                        continue;
                    } 

                    var separator_before = "";
                    var separator_after = "";
                    
                    if (i === (total_pages - 1)) 
                        separator_before = "...";
                    
                    if (i === 0)
                        separator_after = "...";

                    const position_init_page =  i * limit; 
                    const page = {page: i + 1, position_init:position_init_page, separator_before: separator_before, separator_after: separator_after}
                    positions_inits_pages.push(page);
                }

                var pokemons_prepared = [];

                res.data.results.map(item => {
                    const pokemon = {
                        'id' : item.url.replace(/^[\s\S]+pokemon\/|\//gm, ''),
                        'name': item.name
                    }
                    return pokemons_prepared.push(pokemon);
                });
                
                dispatch({
                    type: LISTAR_POKEMONS,
                    payload: {
                        pokemons: pokemons_prepared,
                        position: position,
                        total:res.data.count,
                        positions_inits_pages: positions_inits_pages
                    }
                })
            }
        }
    } catch(error) {
        console.log(error);
    }
}