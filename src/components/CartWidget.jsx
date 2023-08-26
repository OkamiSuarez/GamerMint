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
      <img src="https://firebasestorage.googleapis.com/v0/b/gamermint-aee9e.appspot.com/o/Cart.jpeg?alt=media&token=8aacbd28-cd7a-4b51-8992-77448d4834fe" alt="Cart Image" className={styles.cartImg}/>
      <p>Qty</p>
      <p>{quantity}</p>
    </div>
  )
}

export default CartWidget