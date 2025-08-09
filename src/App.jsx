
import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   
      <NetflixSeries />
      <NetflixSeries />
   
    </>
       
  )
}


 let age = 19;

//  let canWatch = "Not Available";
//  if(age >= 18) canWatch = "Watch Now";


const canWatch = () =>{
  if(age >= 18) return "Watch Now";
  return "Not Available";
}


const  returnGenere =() => {
const genere = " RomPOm";
return genere;
}

export default App


const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = 8.2;
  const summary = "The queen of department stores and the prince of supermarkets weather a marital crisis, until love miraculously begins to bloom again."
  return(
    <>

      {/* <h1>Vite + React {version}</h1> */}
      <div>
        <img src="qot.jpg" alt="Queen Of Tears" width={"40%"} height={"40%"} />
      </div>
      <h2>Name:{name} </h2>
      <h3>Rating:{15/3.2}</h3>
      <p>Sammary: {summary}</p>
      <p>Genere:{returnGenere()}</p>

      {/* <button>{age >= 18 ? "Watch Now": "Not Available"}</button> */}
  <button>{canWatch()}</button>

    </>
  )
}


