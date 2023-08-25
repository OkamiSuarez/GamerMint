import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'
import Loading from './Loading'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'



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
    }, 2000)
    return <Loading />
  } else {
    // console.log('Cart loaded')
  }

  if (cart[0] === undefined) {
    return <EmptyCart />
  } else

    return (
      <>
        <center>
          <h1>Items in cart: {qty}</h1>
          {cart.map((p) => {
            return (
              <div key={p.id}>
                <h2>Product {p.title}</h2>
                <h3>Price {p.price}</h3>
                <h3>Quantity {p.quantity}</h3>
                <Button variant="solid" colorScheme="red" onClick={() => removeItem(p.id)}>
                  Remove game
                </Button>
              </div>
            )
          })}

          <h2>Total: ${totalPrice}</h2>
          <br />
          <Button variant="solid" colorScheme="red" onClick={() => clearCart()}>
            Clear cart
          </Button>
          <br />
          <Button variant="solid" colorScheme="green">
            <Link to='/checkout'>Buy now</Link>
          </Button>
        </center>

      </>
    )
}

export default Cart