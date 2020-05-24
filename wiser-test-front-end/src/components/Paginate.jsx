import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'


const Paginate = () => {
    const positions_init_pages_state = useSelector(store => store.pokemons.positions_init_pages_state);

    return (
        <Fragment>
            <div className="flex content-center mt-5">
                { 
                    positions_init_pages_state.map(page => (
                        <span key={page.page}  className="bg-ground p-1 w-8 pl-2 pr-2 rounded-full ml-auto text-center text-white font-bold">
                            <Link  to={`/${page.position_init}`} >
                                {page.page}  
                            </Link>
                        </span>
                    ))
                }
            </div>
        </Fragment>
    );
}
 
export default Paginate;