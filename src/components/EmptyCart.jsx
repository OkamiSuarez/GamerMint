import { Link } from "react-router-dom"
import { Center, Button } from "@chakra-ui/react"

const EmptyCart = () => {
  return (
    <Center>
        <h1>
        Your cart is missing some items
        </h1>

        <div>
        <Button variant="solid" colorScheme="green">
        <Link to='/pc/virtual/games'>Go buy some stuff</Link>
          </Button>
        </div>
            
        {/* <Link to></Link> */}
    </Center>
  )
}

export default EmptyCart