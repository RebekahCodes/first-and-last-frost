import React from 'react';
import './Container.css'
import Logo from '../../../public/images/first-last-frost-logo.png'
import Form from '../Form/Form'

// interface Props { //Define the type of children that can be passed to the container
//     children: React.ReactNode; // This is a TypeScript type that represents any valid React child, 
//   }

function Container(){ //Container component will be fed children as parameter, type of children will be prop as defined above
return (
    <div className='container'>
      <img className='logo' src={Logo} alt='logo' />
      <p className='instructions'>Enter your postcode to find out your average first and last frost dates</p>
      <Form/>
      <p>Results</p>
    </div>
);
}
export default Container;