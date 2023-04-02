import {useState, useEffect } from 'react'
import {getProducts, getProductsByCategory} from '../../asyncMock'
import { useParams, Link} from 'react-router-dom'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    
    const {categoryId} = useParams()

    useEffect (() => {
const asyncFunctions = categoryId ? getProductsByCategory : getProducts

    asyncFunctions(categoryId)
    .then(response => {
        setProducts(response)
    } )
    .catch   (error => {
        console.log(error)
         })
    .finally(() => {
        setLoading(false)
    })


    },  [categoryId])
    
    if (loading) {
    return <Spinner color= "primary"/>
}
    return (
        <div>
            <h1>Camisetas FG</h1>
            <div>
                {
            products.map( prod => {
                    return (
                        <div key={prod.id}>
                            <h2>{prod.name}</h2>
                            <img src={prod.img} alt={prod.name} style={{width: 100}}/>
                            <Link to={`/item/${prod.id}`} className='Option'>Ver detalle</Link>
                        </div>
                             
                    )
     })
    }
            </div>

        </div>

    )
}

export default ItemListContainer 