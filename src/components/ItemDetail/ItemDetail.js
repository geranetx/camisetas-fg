import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, img, price, stock}) => {
const handleOnAdd = (quantity) => {
console.log(`se agregaron ${quantity} ${name}`)
}

return (
    
    <div>
    <h2>{name}</h2>
    <img src={img} alt={name}/>
    <h3>precio: ${price}</h3>
    <ItemCount stock = {stock} initial = {1} onAdd = {handleOnAdd}/>
    </div>

)


}

export default ItemDetail