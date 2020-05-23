import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {detailAction } from '../redux/pokedux';


const DetailPokemon = () => {

    const pokemon_detail_state = useSelector(store => store.pokemons.pokemon_detail_state);
    const dispatch = useDispatch();
    var id = useParams('id');

    if(id.id) {
        dispatch(detailAction(id.id));
    }
    
    console.log(pokemon_detail_state);


    return (
        <Fragment>
            <h1>Detalhe do Pokemon</h1>
          

            <ul>
                {
                        pokemon_detail_state.map(pokemon => (
                        <li key={pokemon.id}>
                            Nome: {pokemon.name}

                            <div>
                                Habilidades: 
                                <ul>
                                    {  
                                        pokemon.abilities.map(abilitie => (
                                                <li>
                                                    {abilitie.ability.name}
                                                </li>
                                            )
                                        )
                                    }
                                    
                                </ul>
                            </div>

                            <div>
                                Estatíticas: 
                                <ul>
                                    {  
                                        pokemon.stats.map(stat => (
                                                <li>
                                                    {stat.stat.name} - {stat.base_stat}
                                                </li>
                                            )
                                        )
                                    }
                                    
                                </ul>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    );
}
 
export default DetailPokemon;