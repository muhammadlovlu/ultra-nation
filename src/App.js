// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries,setcountries] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then (data => setcountries(data))
    .catch(error => console.log(error))
  },[])
const handleAddCountry = (country) => {
  const newCart = [...cart,country];
  setCart(newCart);

}
  return (
    <div className="App">
      <h1>Total Countries : {countries.length}</h1>
      <div>
      <Cart updateCart={cart}></Cart>
      </div>
      {
        countries.map(country=><Country passingData={country} key={country.alpha3Code} addHandler={handleAddCountry}></Country>)
      }
      
    </div>
  );
}

export default App;
