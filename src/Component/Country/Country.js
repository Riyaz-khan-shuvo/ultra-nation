import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name , population , flag } = props.countr;

    const HandleAddCountry = props.handleAddCountry;
    
    return (
        <div className='country-style'>
            <h1>{name}</h1>
            <p>Population: {population} </p>
            <img src={flag} alt="" style={{width:'355px' , height:'auto'}}/>
            <br/> <br/>
            <button onClick={ () => HandleAddCountry(props.countr)}>Add Country</button>
        </div>
    );
};

export default Country;








// import React, { useState, useEffect } from 'react';
// import css from './Country.css'
// const Country = (props) => {
//    console.log(props.countr)
//    const { name , population , region , flag , callingCodes} = props.countr;

//     return (
        
//         <div>
//             <h3>Country: {name}</h3>
//             <h3>Population: {population} </h3>
//             <p><small>Region: {region} </small></p>
//             <p>Celling Code: {callingCodes} </p>
//             <img src={flag} alt=""/>
//             <br/><br/> <br/>
//         </div>
//     );
// };

// export default Country;