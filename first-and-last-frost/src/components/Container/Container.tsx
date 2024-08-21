import React from 'react';
import './Container.css'

interface Props { //Define the type of children that can be passed to the container
    children: React.ReactNode; // This is a TypeScript type that represents any valid React child, 
  }

function Container({children}:Props){ //Container component will be fed children as parameter, type of childrenn will be prop as defined above
return (
    <div className='container'> 
    {children}
    </div>
);
}
export default Container;