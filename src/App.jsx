
import { useState } from 'react'
import './App.css'
import db from "./db/db.json"
import { getRandom } from './utils/random'
import CardsBox from './components/CardsBox'


/* en este apartado podemos agregar elementos, arreglos pero solo se ejecuta una vz */
// const listBg = ["bg1","bg2","bg3","bg4"] solo como ejemplo lo quito
const listPlanetBg = [
    {
      bg:"bg1",
      //bgLower:"background-image: url('/public/images/planeta1_Bg.png')"
      bgLower: "planeta1_Bg",
      bgColors: "#1C118A"
    },
    {
      bg:"bg2",
      //bgLower:"background-image: url('/public/images/planeta2_Bg.png')"
      bgLower: "planeta2_Bg",
      bgColors: "#8A1200"
    },
    {
      bg:"bg3",
      //bgLower:"background-image: url('/public/images/planeta3_Bg.png')"
      bgLower: "planeta3_Bg",
      bgColors: "#3B7D2C" 
    },
    {
      bg:"bg4",
      //bgLower:"background-image: url('/public/images/planeta4_Bg.png')"
      bgLower: "planeta4_Bg",
      bgColors: "#700889"
    },
  ]



function App() {
  

  /* crearemos un estado para controlar las frases*/
    const [information, setinformation] = useState(getRandom(db))


  /* maneja el cambio de Bg o Fondo con un estado */
  //const [currentBg, setcurrentBg] = useState(getRandom(listBg)) solo como ejemplo la quito
  const [currentBg, setcurrentBg] = useState(getRandom(listPlanetBg))

  /* maneja el cambio de los panetas con un estado */
  //const [planetBg, setplanetBg] = useState(listPlanetBg)


  /* funcion que se encarga de la funcionalidad del btn */
  const handleChangeBtn = () => {
    setinformation(getRandom(db)); /* se encarga de retornar una frase Random */
    //setcurrentBg(getRandom(listBg)); /* se encarga de retornar un fondoBg Random */ solo como ejemplo lo quito
    setcurrentBg(getRandom(listPlanetBg)); /* se encarga de retornar un fondoBg Random */
  }

  return (
    <main className={`App ${currentBg.bg}`}>
      < CardsBox handleChangeBtn ={handleChangeBtn} information={information} currentBg={currentBg} />
      
    </main>
  )
}

export default App
