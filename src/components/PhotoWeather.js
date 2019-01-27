import React from "react";
import snow from './imag/snow.png'
import cloud from './imag/cloud.png'
import sun from './imag/sun.png'
import haze from './imag/haze.png'
import rain from './imag/rain.png'
import mist from './imag/mist.png'
import thundercloud from './imag/thundercloud.png'
class PhotoWeather extends React.Component{
    render(){
        let imagemassage;
        switch (this.props.main) {
            case 'Snow':
                 imagemassage = (
                <img src={snow}  alt="snow" />
                    )
                break;
              case 'Clouds':
                 imagemassage = (
                <img src={cloud}  alt="cloud" />
                    )
                break;               
             case 'Clear':
                 imagemassage = (
                <img src={sun}  alt="sun" />
                    )
                break;
             case 'Thundecloud':
                 imagemassage = (
                <img src={thundercloud}  alt="thundercloud" />
                    )
                break;
             case 'Haze':
                 imagemassage = (
                <img src={haze}  alt="haze" />
                    )
                break;
             case 'Mist':
                 imagemassage = (
                <img src={mist}  alt="mist" />
                    )
                break;
             case 'Rain':
                 imagemassage = (
                <img src={rain}  alt="rain" />
                    )
                break;
            default:
              imagemassage = (
                <div></div>
                )           
                break;
        }
           return (
               <div>
               {imagemassage}   
               </div>

           );
    }
}
export default PhotoWeather;