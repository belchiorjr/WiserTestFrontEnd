import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {detailAction } from '../redux/pokedux';


const DetailPokemon = (props) => {

    const pokemon_detail_state = useSelector(store => store.pokemons.pokemon_detail_state);
    var position_state = useSelector(store => store.pokemons.position_state);
    
    position_state = (!position_state) ? 0 : position_state;

    const dispatch = useDispatch();
    
    if(props.name) {
        dispatch(detailAction(props.name));
    }
    


    return (
        <Fragment>
            
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
                                                <li key={abilitie.ability.name} >
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
                                                <li key={stat.stat.name}>
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

            <Link  to={`/` + position_state} >
                Voltar
            </Link>
        </Fragment>
    );
}
 
export default DetailPokemon;