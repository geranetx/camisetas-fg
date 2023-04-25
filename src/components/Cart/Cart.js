import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, total } = useCart()

    return (
        <div>
            <h1>Cart View</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h2>{prod.name}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <h2>${prod.price} x Unidad</h2>
                            </div>
                        )
                    })
                }
            </div>

            <h1>Total de la compra ${total}</h1>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart