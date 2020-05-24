import React, { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {listPokemonAction } from '../redux/pokedux';

import CardLink from './CardLink';
import Paginate from './Paginate';


const ListPokemons = (props) => {

    const dispatch = useDispatch();
    const pokemons = useSelector(store => store.pokemons.pokemons_state);

    dispatch(listPokemonAction(props.position));

    return (
        <Fragment>
                {
                    pokemons.map(item => (
                        <CardLink key={item.name} pokemon={[item]} />
                    ))
                }
            <Paginate />
        </Fragment>
    );
}
 
export default ListPokemons;