import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'


const Paginate = () => {
    const positions_init_pages_state = useSelector(store => store.pokemons.positions_init_pages_state);


    console.log(positions_init_pages_state);

    return (
        <Fragment>
            <div>
                { 
                    positions_init_pages_state.map(page => (
                        <Link  key={page.page} to={`/${page.position_init}`}>
                            {page.separator_before} <span> {page.page}  </span> {page.separator_after}
                        </Link>
                    ))
                }
            </div>
        </Fragment>
    );
}
 
export default Paginate;