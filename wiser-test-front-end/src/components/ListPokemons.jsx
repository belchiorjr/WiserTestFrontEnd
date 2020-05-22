import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import {listPokemonAction } from '../redux/pokedux';

import Paginate from './Paginate';
import Title from './Title';



const ListPokemons = () => {

    const dispatch = useDispatch();
    var position = useParams('position');
    const pokemons = useSelector(store => store.pokemons.pokemons_state);

    if (!position.position)
        position.position = 0;

    dispatch(listPokemonAction(position.position));

    return (
        <Fragment>
            <Title value="Lista de Pokemons" />
            <ul>
                {
                    pokemons.map(item => (
                        <li key={item.id}>
                        <Link  to={`/detail/${item.id}`}>
                            {item.name}
                        </Link>
                        </li>
                    ))
                }
            </ul>
            <Paginate />
        </Fragment>
    );
}
 
export default ListPokemons;