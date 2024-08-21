import React from 'react';
import { useState } from 'react';
import './Form.css'
import Results from '../Results/Results';


function Form() { 

    const [userInput, setUserInput] = useState('');
    const [userPostcode, setUserPostcode] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUserPostcode(userInput)
        console.log(`submitted postcode is ${userPostcode}`);
        <Results userPostcode={userPostcode} />; // Call Results with the prop
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