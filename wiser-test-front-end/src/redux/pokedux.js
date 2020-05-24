import axios from 'axios'

// constantes
const dataState = {
    pokemons_state: [],
    positions_init_pages_state: [],
    position_state: null,
    total_state:0,
    search_state:"",
    results_search_state: [],
    error_message: "",
    pokemon_detail_id_state: "",
    pokemon_detail_state:[]
}

const LISTAR_POKEMONS = 'LISTAR_POKEMONS';
const SEARCH = 'SEARCH';
const DETAIL = 'DETAIL';


// Reducers
export default function pokemonReducer(state = dataState, action) {
    switch (action.type) {

        case LISTAR_POKEMONS:
            return {...state, 
                pokemons_state: action.payload.pokemons, 
                actual_position: action.payload.position, 
                total: action.payload.total,
                positions_init_pages_state: action.payload.positions_inits_pages,
                position_state: action.payload.position
            }    

        case SEARCH:
            return {...state, 
                search_state: action.payload.search, 
                results_search_state: action.payload.data, 
                error_message: action.payload.error_message, 
            }       

        case DETAIL:
            return {...state, 
                pokemon_detail_id_state: action.payload.id,
                pokemon_detail_state: action.payload.data, 
                error_message: action.payload.error_message, 
            }       
        
        default:
            return state;
    }
}




// Detalha Dados do Pokemon
export const detailAction = (id) => async (dispatch, getState) => {

    const _pokemon_detail_id_state = getState().pokemons.pokemon_detail_id_state;

    if (_pokemon_detail_id_state != id) {

        var payload_values = {
            data: [],
            id: id,
            error_message: "Não foi possível encontrar o pokemon"
        }

        const urlGet = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const r = await axios.get(urlGet);

        if (r.data) {

            // Detalhes do pokemon solicitado.
            var pokemon = {
                id: r.data.id,
                name: r.data.name,
                sprites: r.data.sprites,
                image_large: `https://pokeres.bastionbot.org/images/pokemon/${r.data.id}.png`,
                abilities: r.data.abilities,
                stats: r.data.stats,
                primary_type: r.data.types[0].type.name,
                types: r.data.types
            };

            payload_values.data = [pokemon]; 
            payload_values.error_message = "";
        }

        dispatch({
            type: DETAIL,
            payload: payload_values
        });
    }
}



// Busca um pokemon pelo nome
export const searchPokemonAction = (search) => async (dispatch, getState) => {
    const _search_state = getState().pokemons.search_state;

    if (search !== _search_state) {
       
        const urlSearch = `https://pokeapi.co/api/v2/pokemon/${search}`;
        const r = await axios.get(urlSearch);

        if (r) {

            const pokemon = {
                id: r.data.id,
                sprites: r.data.sprites,
                name: r.data.name,
                primary_type: r.data.types[0].type.name,
                types: r.data.types
            }

            dispatch({
                type: SEARCH,
                payload: {
                    data: [pokemon]
                }
            })
        }
    }
}




// Buscar os pokemons por posição no web-service
export const listPokemonAction = (position) => async(dispatch, getState) => {

    try{
        position = (!position) ? 0 : position;

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

                res.data.results.map( async(item) => {
                  
                    var r = {};

                    if (r = await axios.get(item.url)) {
                        const pokemon = {
                            id: r.data.id,
                            
                            sprites: r.data.sprites,
                            name: r.data.name,
                            primary_type: r.data.types[0].type.name,
                            types: r.data.types
                        }

                        pokemons_prepared[r.data.id] = pokemon;

                        setTimeout(() =>{
                            dispatch({
                                type: LISTAR_POKEMONS,
                                payload: {
                                    pokemons: pokemons_prepared,
                                    position: position,
                                    total:res.data.count,
                                    positions_inits_pages: positions_inits_pages
                                }
                            })
                        }, 500);
                    }
                });
            }
        }
    } catch(error) {
        console.log(error);
    }
}