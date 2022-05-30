import './App.css'
import Quotebox from './components/Quotebox'
import users from "./JSON/users.json";
import { useEffect, useState } from 'react';
import Button from "./components/Button"

const arrayColors = [
  '#EB2CFB', '#681B0D', '#9C8B2E', '#91672E', '#8C91BA', '#BC136B', '#615AF4', '#63C893', '#0F1FBC', '#D70C1C',
  '#5CF8D6', '#F79DD5', '#FF5B71', '#692693', '#1581B0', '#D86A5F', '#79DC04', '#55992E', '#C8E41F', '#C296AB'
]


function App() {

  const createRandomNumber = array => {
    return Math.floor(Math.random() * array.length)
  }

  const [userRandom, setUserRandom] = useState({})
  const [colorRandom, setColorRandom] = useState("")
  const [click, setClick] = useState(0)

  useEffect(() => {

    let indexUserRandom = createRandomNumber(users)
    let indexColorRandom = createRandomNumber(arrayColors)

    setUserRandom(users[indexUserRandom])
    setColorRandom(arrayColors[indexColorRandom])

  }, [click])

  const color = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={color}>
      <Quotebox
        userRandom={userRandom}
        colorRandom={colorRandom}
      />
      <Button
        colorRandom={colorRandom}
        setClick={setClick}
        click={click}
      />
    </div>
  )
}

export default App