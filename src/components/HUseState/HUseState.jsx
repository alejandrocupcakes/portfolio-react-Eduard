import { useState } from 'react'
import './HUseState.css'
 const HUseState =() => {
const [precio,setPrecio] =useState(0)
    return(
        <>
<h2 className='State'>{precio}</h2>
<button onClick={()=> setPrecio(precio+500)}>sueldo</button>
        </>
    )
 }
export default HUseState
