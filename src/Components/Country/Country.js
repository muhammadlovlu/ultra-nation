import React from 'react';
import './country.css';
const Country = (props) => {
    console.log("checking from Country component",props)
    const {name,area,population,capital, flag} = props.passingData;
    return (
        <div className="country">
            <h1>{name}</h1>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Capital : {capital}</p>
            <p>Flag : </p>
            <img src={flag} alt=""/>
        </div>
    );
};

export default Country;