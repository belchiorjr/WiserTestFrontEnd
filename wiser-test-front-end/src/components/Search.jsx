import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {searchPokemonAction } from '../redux/pokedux';


const SearchForm = () => {

    const results_search_state = useSelector(store => store.pokemons.results_search_state);
    const dispatch = useDispatch();

    const searchPokemon = (event) => {

        // Coleta o valor do input do formulário.
        if (event.target) {
            const word_search_form =  event.target.word_search.value;
            if (word_search_form) {
                dispatch(searchPokemonAction(word_search_form));
            }
        }
        
        // Reset event.
        event.preventDefault();
    }

    return (
        <Fragment>
            <form  onSubmit={searchPokemon}>
                <div  >
                    <input 
                        placeholder="Procurar pokemon"
                        type="text"
                        name="word_search"
                    />
                    <button type="submit">Procurar</button>
                </div>
            </form>

            <ul>
                {
                    results_search_state.map(item => (
                        <li key={item.id}>
                            <Link  to={`/detail/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>

        </Fragment>
    );
}
 
export default SearchForm;