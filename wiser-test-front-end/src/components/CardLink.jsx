import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

const CardLink = (props) => {
    return (
        <Fragment>
            {
                    props.pokemon.map(item => (
                    <div key={item.id} >
                        <div className={`w-full p-2 pl-5 mt-10 shadow-lg rounded-lg flex bg-`+item.primary_type }>
                            <div className="w-2/3 ">
                                <div className="text-number font-bold text-sm    ">#{item.id}</div>
                                <div className="text-white font-semibold text-4xl  leading-8">
                                    <Link to={`/${item.name}`}>
                                        {item.name}
                                    </Link>
                                </div>
                                <div className="flex mt-3">
                                    {
                                        item.types.map(data_type => (
                                            <div key={data_type.type.name} className={`border-white border-2 mr-2  pl-2 pr-2 pt-1 pb-1 text-sm text-white bg-${data_type.type.name} text-center rounded-md`}>{data_type.type.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="-mt-10 -mr-2">
                                <img src={item.sprites.front_default} className="w-40 float-right" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    );
}
 
export default CardLink;