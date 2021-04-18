// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries,setcountries] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then (data => setcountries(data))
    .catch(error => console.log(error))
  },[])
  return (
    <div className="App">
      <h1>Total Countries : {countries.length}</h1>
      {
        countries.map(country=><Country passingData={country} key={country.alpha3Code}></Country>)
      }
      
    </div>
  );
}

export default App;
