import React, { useState, useEffect } from "react";//{ useContext } from "react";

const API_key = "c47a67513f793be01fd78b932ab39567";

export function Cities() {
   const [city_name, setCityName] = useState("");
   const [favCities, setFavCities] = useState(["Севастополь", "Tel-aviv", "Александровск-Сахалинский"]);

   useEffect(() => {
      //getCities from LocalStorage
      localStorage.getItem('favCities') ? setFavCities(JSON.parse(localStorage.getItem('favCities'))) : setFavCities([]);
   }, []);

   const handleSubmit = e => {
      e.preventDefault();
      console.log(city_name);
      let currentListOfCities = [...favCities, city_name];
      setFavCities(currentListOfCities);
      localStorage.setItem('favCities', JSON.stringify(currentListOfCities));
      setCityName("");
   }

   const removefavCity = idx => {
      let currentListOfCities = favCities.filter((value, index) => index !== idx);
      setFavCities(currentListOfCities);
      localStorage.setItem('favCities', JSON.stringify(currentListOfCities));
   }

   return (
      <div id="grid_2-columns">
         <div className="left_column">
            <form onSubmit={handleSubmit} className="form">
               <input
                  className="form__input"
                  name="text"
                  value={city_name}
                  onChange={e => setCityName(e.target.value)}
                  placeholder="Введите название города..."
               />
            </form>
         </div>

         <div>
            {favCities.map((city, idx) => {
               return <Card city={city} key={`${city}${idx}`} removeCard={() => removefavCity(idx)} />
            }
            )}
         </div>
      </div>
   )
}

function Card(props) {
   const [temp, setTemp] = useState(null);

   useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${API_key}&units=metric `)
         .then(response => response.json())
         .then(data => {
            console.log(data);
            console.log("temp", data.main.temp);
            data.main.temp > 0 ? setTemp(`+${data.main.temp}`) : setTemp(`+${data.main.temp}`);
         });

   }, [])

   //<button className="cityCard__remove" onClick={() => props.removeCard(props.i)}>x</button>

   return (
      <div className="cityCard">
         <button className="cityCard__remove" onClick={props.removeCard}>x</button>
         <div className="cityCard__info">
            <span >{props.city}</span>
            <span className="cityCard__temp">{temp}</span>
         </div>
      </div >
   )
}