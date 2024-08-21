import React from 'react';
import { useState } from 'react';
import './Form.css'

function Form(){ 

    const [userPostcode, setUserPostcode] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
            return(
                console.log(`submitted postcode is ${userPostcode}`)
            )
        }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input 
            name='postcode' 
            placeholder='postcode' 
            value={userPostcode}
            onChange={(e) => setUserPostcode(e.target.value)}
            required
            />
            <button type='submit'>Submit</button>
        </form>
    )
    }
    export default Form;