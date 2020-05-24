import React, { Fragment } from 'react';

import { useParams } from 'react-router-dom';

import ListPokemons from './ListPokemons';
import Search from './Search';
import DetailPokemon from './DetailPokemon';



const SwitchApp = () => {

    const objectStringUrl = JSON.stringify(useParams('*'));
    const url = JSON.parse(objectStringUrl.replace(/^[\{\d\"]+/gm, '{"uri"'));


    if (/\/[a-z\- ]+$/gm.test(url.uri)) { 

        const _name = url.uri.replace(/^\/|[ ]/gm, '')
        console.log(_name);
        return (
            <div className="w-inner ml-auto mr-auto mt-20 mb-10 ">  
            <DetailPokemon name={_name} />
            </div>
        )

       
    } else if (/\/|\/[\d]+$/.test(url.uri)) {

        const _position = url.uri.replace(/[\D]+/, '');
        return (
            <div className="w-inner ml-auto mr-auto mt-20 mb-10 ">  
                <Search />
                <ListPokemons position={_position} />
            </div>
        )

    } 


    // const url = JSON.parse(objectStringUrl);

    // console.log(url.url)

    // if (/detail\/\d/gm.url.match) {
    //     console.log('passou');
    // }





    // return (
    //     <div className="flex bg-dark w-full min-h-screen p-5 ">
    //     <div className="w-layout bg-white rounded-lg ml-auto mr-auto mt-auto mb-auto shadow-xl">
    //         <Router>
    //         <Switch>
    //             <Route path="/" exact>
    //             <div className="w-inner ml-auto mr-auto mt-20 mb-10 ">  
    //                 <Search />
    //                 <ListPokemons />
    //             </div>
    //             </Route>
    //             <Route path="/:position" exact>
    //             <div className="w-inner ml-auto mr-auto mt-20 mb-10 ">  
    //                 <Search />
    //                 <ListPokemons  />
    //             </div>  
    //             </Route>
    //             <Route path="/detail/:id" exact>
    //             <DetailPokemon />
    //                 <Link to="/">
    //                 Voltar
    //                 </Link>
    //             </Route>
    //         </Switch>
    //         </Router>
    //     </div>
    // </div>
    // );
}
 
export default SwitchApp;