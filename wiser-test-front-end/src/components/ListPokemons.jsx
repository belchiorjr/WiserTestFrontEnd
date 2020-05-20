import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux'
import {listPokemonAction } from '../redux/pokedux';


const ListPokemons = () => {

    const dispatch = useDispatch();
    var position = useParams('position');
    const pokemons = useSelector(store => store.pokemons.pokemons_state);
    

    if (!position.position)
        position.position = 0;


    dispatch(listPokemonAction(position.position));

    
    return (
        <Fragment>
            <h1>Lista de Pokemons</h1>
         
            <ul>
                {
                    pokemons.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>

        </Fragment>
    );
}
 
export default ListPokemons;