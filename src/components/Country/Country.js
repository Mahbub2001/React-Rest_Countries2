import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Country Name : {props.name} </h2>
            <p>capital Name : {props.capital}</p>
            <p>Population : {props.population}</p>
            <p>Area : {props.area} sq.km</p>
        </div>
    );
};

export default Country;