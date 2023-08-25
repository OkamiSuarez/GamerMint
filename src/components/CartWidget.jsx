import { StarIcon } from "@chakra-ui/icons"
import { Box, Flex, Spacer } from "@chakra-ui/react"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
const CartWidget = () => {

  const {cart} = useContext(CartContext)

  const quantity = cart.reduce((acc,curr) =>{
    return acc + curr.quantity
  }, 0)

  return (
    <Flex>
        <Box>
            <StarIcon/>
        </Box>
    <Spacer/>
        <Box>
            <p>Qty</p>
            <p>{quantity}</p>
        </Box>
    </Flex>

  )
}

export default CartWidget