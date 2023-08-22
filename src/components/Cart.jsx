import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'
import Loading from './Loading'
import EmptyCart from './EmptyCart'



const Cart = () => {

  const [loading, setLoading] = useState(true)
  // const[proofCart,setProofCart] = useState([])

  const { cart, setCart } = useContext(CartContext)

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  }, 0)



  console.log('cart from context')
  console.log(cart)

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id != id)?.quantity === 1) {
        return currItems.filter((item) => item.id != id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            // console.log(item)
            // console.log(item.total)
            if(item.quantity < 1){
              item.quantity = 1
            }
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  if (loading) {
    setTimeout(() => {
      // setProofCart(['ElementA','ElementB'])
      setLoading(false)
    }, 3000)
    return <Loading />
  } else {
    console.log('Cart loaded')
  }

  if(cart[0] === undefined){
    return <EmptyCart/>
  }else

  return (
    <>
      <center>
        <h1>Items in cart: {quantity}</h1>

        {cart.map((p) => {
          return (
            <div key={p.id}>
              {/* Por que ponemos aqui el key? */}

              <h2>Product {p.title}</h2>
              <h3>Price {p.price}</h3>
              <h3>Quantity {p.quantity}</h3>
              <Button variant="solid" colorScheme="green" onClick={()=>removeItem(p.id)}>
                Remove item
              </Button>
              
            </div>
          )
        })}
        {/* <Text color="black">Cart</Text>
      <h1>Products on cart</h1>
      {proofCart.map((e)=>(
        <li>{e}</li>
      ))}
      <h2>title {cart[0].id}</h2>
      <h2>Quantity {cart[0].quantity}</h2>
      <h2>Price {cart[0].price}</h2>
      <button onClick={()=> removeItem(cart[0].id)}>Remove item</button> */}

        <h2>Total: ${totalPrice}</h2>
        <button onClick={() => console.log(cart)}>Buy now (console)</button>

      </center>

    </>
  )
}

export default Cart