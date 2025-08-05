
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
export default App


const NetflixSeries = () => {
  return(
    <>

      {/* <h1>Vite + React {version}</h1> */}
      <div>
        <img src="qot.jpg" alt="Queen Of Tears" width={"40%"} height={"40%"} />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating:8.2</h3>
      <p>
        Sammary: The queen of department stores and the prince of supermarkets weather a marital crisis, until love miraculously begins to bloom again.
      </p>

    </>
  )
}



