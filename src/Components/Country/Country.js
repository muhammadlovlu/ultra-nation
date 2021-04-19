import React from 'react';
import './country.css';
const Country = (props) => {
    const {name,area,population,capital, flag} = props.passingData;
const addHandle = props.addHandler;
    return (
        <div className="country">
            <h1>{name}</h1>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Capital : {capital}</p>
            <p>Flag : </p>
            <img src={flag} alt=""/> <br/>
            <button onClick={()=>addHandle(props.passingData)}>Add Country</button>
        </div>
    );
};

export default Country;