import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { Text, Center } from '@chakra-ui/react'
import Loading from './Loading'

const Cart = () => {

  const[loading,setLoading] = useState(true)
  const[proofCart,setProofCart] = useState([])

  // useEffect(()=>{
  //   setTimeout(() =>{
  //     setProofCart(['ElementA','ElementB'])
  //     setLoading(false)
  //   }, 3000)
  // })
  
    const {cart} = useContext(CartContext)
    console.log('cart recibido de context')
    console.log(cart)

if(loading){
  setTimeout(() =>{
    setProofCart(['ElementA','ElementB'])
    setLoading(false)
  }, 3000)
  return <Loading/>
}else{
  console.log('Cart loaded')
}
  return (
    <>
    <center>
    <Text color="black">Cart</Text>
      <h1>Products on cart</h1>
      {proofCart.map((e)=>(
        <li>{e}</li>
      ))}
      <h2>title {cart[0].id}</h2>
      <h2>Quantity {cart[0].quantity}</h2>
      <h2>Price {cart[0].price}</h2>
    </center>

    </>
  )
}

export default Cart