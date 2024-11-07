import { useState } from 'react'
import './HUseState.css'

const HUseState = () => {
  const [value, setValue] = useState(0)
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleInput2 = (event) => {
    setInput2(event.target.value)
  }

  const handlesumar = () => {
    setValue(parseInt(input) + parseInt(input2))
  }

  const handlerestar = () => {
    setValue(parseInt(input) - parseInt(input2))
  }

  const handleMultiplicar = () => {
    setValue(parseInt(input) * parseInt(input2))
  }

  const handledividir = () =>{
    setValue(parseInt(input) / parseInt(input2))
  }

  return (
    <div className="calculadora-container">
      <h2>Resultado: {value}</h2>
      <fieldset className='barra'>
        <input onChange={handleInput} type="number" placeholder='ingresar primer numero' />
        <input onChange={handleInput2} type="number" placeholder='ingresar segundo numero' />
      </fieldset>
      <fieldset className='operador'>
        <button onClick={handlesumar} className="calculadora-button">
          Sumar
        </button>
        <button onClick={handlerestar} className="calculadora-button">
          Restar
        </button>
        <button onClick={handleMultiplicar} className="calculadora-button">
          Multiplicar
        </button>
        <button onClick={handledividir} className="calculadora-button">
            Dividir
        </button>
      </fieldset>
    </div>
  )
}

export default HUseState