import { useState,useEffect } from 'react';
import React from 'react';
function cart(){
    const [country,setcountry]=useState([]);
  useEffect(() => {
    const dataApi= async()=>{
      try {
        const data=await fetch('https://restcountries.com/v3.1/all');
       const json=await data.json();
       setcountry(json)
       console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  dataApi()
   }, []);
 return(
   <div>

    {country.map((item,index)=>{
      return(
        <Card key={index}
        name={item.name.common}
        capital={item.capital}
        image={item.flags.png}
        region={item.region}
        population={item.population}
        />
      )
    })}
   </div>
 )
}
export default cart;