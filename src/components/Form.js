import React from "react";

const Form1 = props => {
            return(
		<div>
			<form onSubmit = {props.getWeather}>
			<input type="text" name="city" placeholder="City..."/>
			<input type="text" name="country" placeholder="Country..."/>
			<button className="btn btn-outline-light">Get Weather</button>
			</form>	    
		</div>

        );
}

export default Form1;