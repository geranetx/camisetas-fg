import './ItemDetailContainer.css'
import {useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductById('2')
        .then(response => {
            setProduct(response)
        
        })
    }, [])

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <div>
            <h2>{product.name}</h2>
            <img src={product.img} alt = {product.name}/>
            <h3>Precio: ${product.price}</h3>
            </div>
        </div>
    )
}

export default ItemDetailContainer