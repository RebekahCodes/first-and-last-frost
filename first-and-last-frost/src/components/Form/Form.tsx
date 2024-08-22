import React from 'react';
import { useState } from 'react';
import './Form.css'
import Results from '../Results/Results';


function Form() { 

    const [userInput, setUserInput] = useState('');
    const [userPostcode, setUserPostcode] = useState('');

    async function getLocation (userPostcode:any){
        const response = await fetch (`https://api.opencagedata.com/geocode/v1/json?q=${userPostcode}&key=b24754d869804a358fb2a74f3a52a961&language=en&pretty=1`);
        const data = await response.json();
        console.log(data)
        console.log(data.results[0].geometry.lat)
        console.log(data.results[0].geometry.lng)
        console.log(userPostcode)
        }
   
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUserPostcode(userInput)
        getLocation(userInput)
        console.log(`submitted postcode is ${userInput}`);
        
    
        <Results userPostcode={userPostcode} />; 
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
        
        <Results userPostcode={userPostcode} />
        </>
    )
    }
    export default Form;