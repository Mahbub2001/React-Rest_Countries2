import React from "react";
import "./Country.css";
const Country = (props) => {
    //advance way
    const {area,region,population,name,capital} = props.country;
  return (
    <div className="country">
      <h2>Country Name : {name} </h2>
      <p>capital Name : {capital}</p>
      <p>Population : {population}</p>
      <p>Area : {area} sq.km</p>
      <p>Region : {region} </p>
    </div>
  );
};

export default Country;







//previous way------------

// import React from "react";
// import "./Country.css";
// const Country = (props) => {
//     const {area} = props.country;
//   return (
//     <div className="country">
//       <h2>Country Name : {props.country.name} </h2>
//       <p>capital Name : {props.country.capital}</p>
//       <p>Population : {props.country.population}</p>
//       <p>Area : {props.country.area} sq.km</p>
//       <p>Region : {props.country.region} </p>
//     </div>
//   );
// };

// export default Country;



//Previous previous Way----------------
// import React from 'react';
// import './Country.css'
// const Country = (props) => {
//     return (
//         <div className='country'>
//             <h2>Country Name : {props.name} </h2>
//             <p>capital Name : {props.capital}</p>
//             <p>Population : {props.population}</p>
//             <p>Area : {props.area} sq.km</p>
//             <p>Region : {props.region} </p>

//         </div>
//     );
// };

// export default Country;
