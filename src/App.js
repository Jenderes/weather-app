import React from "react";
import Form1 from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import PhotoWeather from "./components/PhotoWeather";
import day from "./img/day.jpg";
import morning from "./img/morning.jpg";
import sunset from "./img/sunset.jpg";
import night from "./img/night.jpg";


const API_KEY = "8cc2e41bd0eb0816dc87fbec657bd7f2";
// Time
        var ImageTime;
        let date = new Date();
        let hours = date.getHours();  
        console.log(date);
        if (hours < 9) {
          ImageTime = {
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${morning})`
          };
        } else if (hours < 14) {
          ImageTime = {
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${day})`
          };
        } else if (hours < 18) {
          ImageTime = {
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${sunset})`
          };
        } else if (hours < 22) {
          ImageTime = {
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${night})`
          };
        }
class App extends React.Component {
  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
    main:undefined
  }
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      // Check Country and City
      if (city && country) 
      {
        console.log(data);
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          main: data.weather[0].main,
          error: ""
        });
      }
      else if(city)
      {
          this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          main: undefined,
          error: "Please enter the Conuntry"
        }); 
      } else if(country){
          this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          main: undefined,
          error: "Please enter the City"
        });
      } else
      {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          main: undefined,
          error: "Please enter the City and Country"
      });
    }
    }
  render() {
      return(
        <div style = {ImageTime}>
          <div className = "box" >
              <div className = "weather">
                <PhotoWeather main = {this.state.main}/>
              </div>
              <div>
              <Titles />
              <Form1 getWeather = {this.getWeather}/>
              <Weather 
                temperature={this.state.temperature}
                city ={this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                error = {this.state.error}
              />
              </div>
          </div>
        </div>
      );
  }
};
export default App;