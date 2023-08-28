import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
// import { Button } from '@chakra-ui/react'
import Loading from './Loading'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'
import styles from '../styles/Cart.module.css'

const Cart = () => {

  const [loading, setLoading] = useState(true)
  const { cart, setCart } = useContext(CartContext)

  const qty = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  }, 0)

  const removeItem = (id) => {

    setCart((currItems) => {
      let foundQty = cart.find((element) => element.id == id)
      if (foundQty) {
        let indexCart = cart.indexOf(foundQty)
        cart.splice(indexCart, 1)
      }
      if (currItems.find((item) => item.id != id)?.quantity === 1) {
        return currItems.filter((item) => item.id != id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const clearCart = () => {
    setCart([])
  }

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
    return <Loading />
  } else {
    // console.log('Cart loaded')
  }

  if (cart[0] === undefined) {
    return <EmptyCart />
  } else

    return (
      <div className={styles.cartContainer}>
        {/* <center> */}
          <h1 className={styles.h1Cart}>Items in cart: {qty}</h1>
          <div className={styles.cartCardsContainer}>
            
          {cart.map((p) => {
            return (
              <div className={styles.itemContainer} key={p.id}>
                <h2>Game: {p.title}</h2>
                <h3>Price: {p.price}</h3>
                <h3>Qty: {p.quantity}</h3>
                <button className={styles.redBtn} onClick={() => removeItem(p.id)}>
                  Remove game
                </button>
              </div>
            )
          })}
          </div>
          <h2 className={styles.h2Cart}>Total: ${totalPrice}</h2>
          {/* <br /> */}
          <button className={styles.redBtn} onClick={() => clearCart()}>
          Clear cart
          </button>
          <Link to='/checkout'>
          <button className={styles.greenBtn}>
            Buy now
          </button>
          </Link>


      </div>
    )
}

export default Cart