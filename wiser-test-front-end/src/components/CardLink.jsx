import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

const CardLink = (props) => {
    return (
        <Fragment>
            {
                props.pokemon.map(item => (
                    <div key={item.id} >
                        <div className={`w-full  p-2 pb-2 pl-5 mt-5 shadow-lg rounded-lg flex bg-${item.primary_type}-lighter` }>
                            <div className="w-2/3 ">
                                <div className="text-number font-bold text-sm ">#{item.id}</div>
                                <div className="text-white font-semibold text-4xl  leading-8">
                                    <Link to={`/${item.name}`}>
                                        {item.name}
                                    </Link>
                                </div>
                                <div className="flex mt-3">
                                    {
                                        item.types.map(data_type => (
                                            <div key={data_type.type.name} className={`text-sm text-white bg-${data_type.type.name} text-center rounded-md  pl-1 pr-1 mr-2 `}>
                                                <div className="flex">
                                                    <div className="inline-flex mr-1"><img src={`./img/${data_type.type.name}.svg`} alt={data_type.type.name} /></div>
                                                    <div className="inline-flex">{data_type.type.name}</div>
                                                </div> 
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="-mt-10 -mr-2">
                                <img src={item.sprites.front_default} className="w-40 float-right"  alt={item.sprites.front_default} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    );
}
 
export default CardLink;