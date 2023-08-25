import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import styles from '../styles/CartWidget.module.css'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  const quantity = cart.reduce((acc,curr) =>{
    return acc + curr.quantity
  }, 0)

  return (
    <div className={styles.widgetContainer}>
      {/* Poner un cart aqui */}
      <img src="src\imgs\Cart.jpeg" alt="Cart Image" className={styles.cartImg}/>
      <p>Qty</p>
      <p>{quantity}</p>
    </div>
  )
}

export default CartWidget