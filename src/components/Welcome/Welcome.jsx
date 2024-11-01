import { useState } from "react"
import './Welcome.css'
const Welcome =() =>{

const [inputName,setInputName]= useState('')
const handleName = (event) =>setInputName(event.target.values)

return(
    <>
    <h2 className="Welcome">{inputName}</h2>
    <input onChange={handleName} placeholder="Tu nombre" type="text"/>
</>
)
}
export default Welcome
