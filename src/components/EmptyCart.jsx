import { Link } from "react-router-dom"
import { Center } from "@chakra-ui/react"

const EmptyCart = () => {
  return (
    <Center>
        <h1>
        Your cart is missing some items
        </h1>
        <div>
        <Link to='/pc/virtual/games'>Go buy some stuff</Link>
        </div>
            
        {/* <Link to></Link> */}
    </Center>
  )
}

export default EmptyCart