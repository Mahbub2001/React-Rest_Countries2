import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countries,setCountries] = useState([])

    useEffect( ()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res =>res.json())
        .then(data => setCountries(data));
    },[])

    return (
        <div>
           <h1>Hello from Countries :{countries.length}</h1> 
           {/* {
               countries.map(country => 
               <Country 
                country = {country}
                >
                </Country>)
           } */}
           {
            countries.map(country => 
            <Country country={country}></Country>)
           }
        </div>
    );
};

export default Countries;


//Previous Way ---------------------

// import React, { useEffect, useState } from 'react';
// import Country from '../Country/Country';
// import './Countries.css';
// const Countries = () => {
//     const [countries,setCountries] = useState([])

//     useEffect( ()=>{
//         fetch('https://restcountries.com/v2/all')
//         .then(res =>res.json())
//         .then(data => setCountries(data));
//     },[])

//     return (
//         <div>
//            <h1>Hello from Countries :{countries.length}</h1> 
//            {
//                countries.map(country => 
//                <Country 
//                 country = {country}//
//                 name={country.name} 
//                 capital={country.capital} 
//                 population={country.population}
//                 area = {country.area}
//                 region={country.region}
//                 >
//                 </Country>)
//            }
//         </div>
//     );
// };

// export default Countries;