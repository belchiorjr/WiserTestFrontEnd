import React from 'react';
import { useParams } from 'react-router-dom';
import ListPokemons from './ListPokemons';
import Search from './Search';
import DetailPokemon from './DetailPokemon';

const SwitchApp = () => {

    // Obtém a uri e retorna os componentes necessários
    const objectStringUrl = JSON.stringify(useParams('*'));
    const url = JSON.parse(objectStringUrl.replace(/^[{\d"]+/gm, '{"uri"'));

    // Verifica se é um nome
    if (/\/[a-z\- ]+$/gm.test(url.uri)) { 

        const _name = url.uri.replace(/^\/|[ ]/gm, '')
       
        return (
            <DetailPokemon name={_name} />
        )

    // Verifica se é vazio ou numero e chama os componentes padrões
    } else if (/\/|\/[\d]+$/.test(url.uri)) {

        const _position = url.uri.replace(/[\D]+/, '');

        return (
            <div className="w-inner ml-auto mr-auto mt-20 mb-10 ">  
                <Search />
                <ListPokemons position={_position} />
            </div>
        )
    }
}
 
export default SwitchApp;