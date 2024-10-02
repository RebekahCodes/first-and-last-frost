import React from 'react';
import { useState } from 'react';
import './Form.css'
import Results from '../Results/Results';

const geoKey= import.meta.env.VITE_GEO_API_KEY // API key is secret place in the .env file. 

function Form() { 

    const [userInput, setUserInput] = useState(''); //Updates as the user types 
    const [userPostcode, setUserPostcode] = useState(''); //Updates when the form is submitted
    const [latitude, setLatitude] = useState('') 
    const [longitude, setLongitude] = useState('')

    async function getLocation (userPostcode:any){
        const response = await fetch (`https://api.opencagedata.com/geocode/v1/json?q=${userPostcode}&key=${geoKey}&language=en&pretty=1`);
        const data = await response.json();
        console.log(data)
        const lastIndex = data.results.length - 1;
        setLatitude(data.results[lastIndex].geometry.lat)
        setLongitude(data.results[lastIndex].geometry.lng)
        console.log(`latitude is ${latitude}`);
        console.log(`longitude is ${longitude}`);
        }
   
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        setUserPostcode(userInput)
        getLocation(userInput)
        console.log(`submitted postcode is ${userInput}`);
  
        <Results userPostcode={userPostcode}/>; 
    };    
        

    return (
        <>
        <form onSubmit={handleSubmit} className='form'>
            <input 
            name='postcode' 
            placeholder='postcode' 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
            />
            <button type='submit'>Submit</button>
            
        </form>
        
        <Results userPostcode={userPostcode} latitude={latitude} longitude={longitude} />
        </>
    )
    }
    export default Form;