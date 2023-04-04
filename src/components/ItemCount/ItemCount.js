import { useState,} from "react"

import (useState)

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (initial)

    const increment = () => {
        if (count < stock) setCount (prev => prev + 1 )
    }   

    const decrement = () => {
        if (count > 1) setCount (prev => prev - 1 )
    }  

    return(
        <div>
            <h1>{count}</h1>
            <button onClick ={decrement}>-</button>
            <button onClick ={increment}>+</button>
            <button onClick={() =>onAdd(count)} >Agregar al Carrito</button>
        </div>  
    )
}

export default ItemCount    