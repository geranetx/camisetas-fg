import {useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { Spinner } from 'reactstrap'
import { useParams } from "react-router-dom"




const ItemDetailContainer = () => {
const [product, setProduct] = useState({})
const [loading, setLoading] = useState(true)
const {productId} = useParams()
    
    useEffect(() => {   
        getProductById(productId)
        .then(response =>{
            setProduct(response)
        })
        .catch   (error => {
            console.log(error)
             })
        .finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <Spinner color= "primary"/>
    }

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <div>
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name}/>
            <h3>precio: ${product.price}</h3>
            </div>
        </div> 
    )
}

export default ItemDetailContainer