import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {detailAction } from '../redux/pokedux';


const DetailPokemon = (props) => {

    const pokemon_detail_state = useSelector(store => store.pokemons.pokemon_detail_state);
    var position_state = useSelector(store => store.pokemons.position_state);
    
    position_state = (!position_state) ? 0 : position_state;

    const dispatch = useDispatch();
    
    if (props.name) {
        dispatch(detailAction(props.name));
    }
    

    return (
        <Fragment>

            {
                pokemon_detail_state.map(pokemon => (
                    
                    <div key={pokemon.id} className={`bg-${pokemon.primary_type}-lighter rounded-large-24`}>
                        <div className="p-10 pb-3">
                            <div className="mb-5" >
                                <Link  to={`/` + position_state}  alt="seta">
                                    <img src="./img/left_arrow.svg" alt="seta" />
                                </Link>
                            </div>
                            <div className="flex mb-5">
                                <div className="w-1/3 content-center">
                                    <img src={pokemon.sprites.front_default} className="w-full" alt={pokemon.sprites.front_default} />
                                </div>
                                <div className="w-2/3 pt-3 pl-2">
                                    <div className="font-bold ">#{pokemon.id}</div>
                                    <div className="text-white font-semibold text-4xl leading-8">{pokemon.name}</div>
                                    <div className="flex mt-3">
                                        {
                                            pokemon.types.map(data_type => (
                                                <div key={data_type.type.name} className={`text-sm text-white bg-${data_type.type.name} text-center rounded  pl-1 pr-1 mr-2 `}>
                                                    <div className="flex">
                                                        <div className="inline-flex mr-1">
                                                            <img src={`./img/${data_type.type.name}.svg`} alt={data_type.type.name} />
                                                        </div>
                                                        <div className="inline-flex">
                                                            {data_type.type.name}
                                                        </div>
                                                    </div> 
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-large-24 pl-8 pr-8  p-5 bg-white -mt-18">


                            <div className={`text-${pokemon.primary_type} font-bold`}>
                                Estatísticas
                            </div>

                            <div>
                                {
                                    pokemon.stats.map(stat => (
                                        <div key={stat.stat.name} className="flex">
                                            <div className="w-3/6 ml-5 font-bold text-sm mr-5">
                                                {`${stat.stat.name}`}
                                            </div>
                                            <div className="w-3/6">
                                                {`${stat.base_stat}`}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            
                            <div className={`text-${pokemon.primary_type} font-bold mt-10`} >
                                Habilidades
                            </div>
                            <div>
                                {
                                    pokemon.abilities.map(ability => (
                                        <div key={ability.ability.name} className="ml-5 font-bold">
                                            {ability.ability.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    );
}
 
export default DetailPokemon;