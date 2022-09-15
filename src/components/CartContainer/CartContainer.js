import { useContext } from "react"
import { CartContex } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"

export const CartContainer = () => {

    const { productCartList, removeAllItems } = useContext(CartContex);

    const carritoVacio = productCartList.length === 0 && "Carrito vacio"

    return (
        <div className="item-detail">
            <h1 style={{ paddingBottom: "40px", fontSize: "30px" }}>CARRITO DE COMPRA</h1>
            {
                productCartList.map(item => (<CartItem key={item.id} item={item} />))
            }

            <Button onClick={removeAllItems} variant="danger" style={{ marginTop: "50px", fontSize: "20px" }} disabled={carritoVacio}>Vaciar Carrito</Button>

            <h3 style={{ marginTop: "140px" }}>{carritoVacio}</h3>
            <Link to="/" ><Button variant="info" style={{ marginTop: "140px" }} >Volver a la lista de Naves</Button></Link>
        </div >
    )
}