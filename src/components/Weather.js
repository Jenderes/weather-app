import React from "react";

const Weather = props => {
    return (
        <div >
            {props.city && props.country && <p>Loacation: {props.city}, {props.country} </p> }
            {props.humidity && <p>Temperature: {props.temperature} &#8451;</p> }
            {props.humidity && <p>Humidity: {props.humidity}&#37;</p> }
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    );
}

export default Weather;