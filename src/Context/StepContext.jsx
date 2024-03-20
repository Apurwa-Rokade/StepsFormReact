import React, { useState } from 'react'
import App from '../App';


export const multistepContext = React.createContext();
 const StepContext=() =>{

  const[step,setSteps] = useState(1);
  const[userData,setuserData] = useState([]);
  const[finalData,setFinalData] = useState([]);
  return (
    <div>
      <multistepContext.Provider value={{step,setSteps,userData,setuserData,finalData,setFinalData}}>
      <App/>
      </multistepContext.Provider >
    </div>
  )
}

export default StepContext