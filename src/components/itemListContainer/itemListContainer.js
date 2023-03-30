import {useState, useEffect } from 'react'
import {getProducts, getProductsByCategory} from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    
    const {categotyId} = useParams()

    useEffect (() => {
const asyncFunctions = categotyId ? getProductsByCategory : getProducts

    asyncFunctions(categotyId)
    .then(response => {
        setProducts(response)
    } )
    .catch   (error => {
        console.log(error)
         })
    .finally(() => {
        setLoading(false)
    })


    },  [])
    
    if (loading) {
    return <h1>Cargando...</h1>
}
    return (
        <div>
            <h1>Camisetas FG</h1>
            <div>
                {
            products.map( prod => {
                    return (
                        <div>
                            <h2>{prod.name}</h2>
                            <img src={prod.img} alt={prod.name} style={{width: 100}}/>
                            <button>Ver Detalles</button>
                        </div>
                    )
     })
    }
            </div>

        </div>

    )
}

export default ItemListContainer 