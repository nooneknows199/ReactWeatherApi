import React,{useState,useEffect} from 'react';
import './App.css';

const App =() =>{
  const [city,setCity] = useState(null);
  const [search, setSearch] = useState("Lucknow");

  useEffect(() => {
    const fetchApi = async() =>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eb86402fb925bcf9868de5062d75449a`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  },[search])

  return (
    <>
    <div className="box">
      <div className="inputData">
        <input
        type="search"
        value={search}
        className="inputField"
        placeholder="Search.."
        onChange={(event) => {
          setSearch(event.target.value)
        }}
       />
      </div>
      {
        !city? (
          <p className="errorMsg">No Data Found!</p>
        ) : (
          <div>
            <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
          </h2>
          <h1 className="temp">
              {city.temp} °C
          </h1>
          <h3 className="tempmin_max">Min : {city.temp_min} °C  |  Max : {city.temp_max} °C</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div></div>
        )
      }
    </div>
    </>
  );
}

export default App;
