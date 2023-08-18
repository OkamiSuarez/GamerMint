import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Text } from '@chakra-ui/react'

const Cart = () => {

  const {cart} = useContext(CartContext)
  console.log('cart recibido de context')
  console.log(cart)
  return (
    <>
      <Text color="black">Cart</Text>
      <h1>Products on cart</h1>
      <h2>{cart[0].title}</h2>
      <h2>{cart[0].qty}</h2>
    </>
  )
}

export default Cart