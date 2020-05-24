import React, { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {searchPokemonAction } from '../redux/pokedux';
import CardLink from './CardLink';

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
            <div className="text-black font-bold text-3xl">
                Pokedex
            </div>
            <div className="text-sm text-normal mb-2">
                Pesquise o Pokemon pelo seu nome<br></br> ou seu número nacional.
            </div>
            <div className="bg-input rounded-lg p-5 pb-3">
                <form  onSubmit={searchPokemon} className="flex inline-block">
                    <div className="w-1/12 ">
                        <button type="submit" className="outline-none active:outline-none focus:outline-none backgroud:transparent">
                            <img src="./img/search.svg" />
                        </button>
                    </div>
                    <div className="w-11/12 -mt-1">
                        <input 
                            placeholder="Qual o pokemon que você procura?"
                            type="text"
                            name="word_search"
                            className="pl-2 bg-input bg-transparent bg:focus:bg-transparent bg:active:bg-transparent  outline-none w-full text-gray"
                        />    
                    </div>
                </form>
            </div>    
            <div>
                {
                    results_search_state.map(item => (
                        <CardLink key={item.id} pokemon={[item]} />
                    ))
                }
            </div>
            
        </Fragment>
    );
}
 
export default SearchForm;