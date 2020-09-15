import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Component/Country/Cart/Cart';
import Country from './Component/Country/Country';

function App() {
  const [countries , setCountries] = useState([]);
  const [cart , setCart] = useState([]);


  useEffect( ()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
  } , []);

  const handleAddCountry =(country) =>{
    console.log(country.name ,'added'  );
    const newCart = [...cart , country];
    setCart(newCart);
  };


  // const [ countries , setCountries] = useState([]);

  // useEffect(() =>{
  //   fetch('https://restcountries.eu/rest/v2/all')
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  //   .catch(error => console.log(error))
  // } , [])
  return (
    <div className="App">
      <h1>Total number of Countries : {countries.length} </h1>
      <h4>Country Added: {cart.length}  </h4>
      <Cart cart={cart}></Cart>
      {
        countries.map(cou => <Country countr={cou} handleAddCountry={handleAddCountry} key={cou.name}></Country> )
      }
    </div>
  );
}
export default App;