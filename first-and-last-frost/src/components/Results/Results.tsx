import { useState } from "react";
//Take in the users postcode from for sumbission (needs to be validated)
//Do an api geo call with the postcode to get the lat and long codes
//extract lat and long codes to create a weather api call 
//Send weather api call with lat and long and return results


function Results({userPostcode}:any){

    return (
        <div className='Results'>
            <div className="postcode">
          <p>postcode is {userPostcode}</p>
          </div>
          
          <div className="location"></div>
          <p>location is</p>
        </div>
    );
    }
    export default Results;