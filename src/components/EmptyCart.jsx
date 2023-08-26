import { Link } from "react-router-dom"
import { Center, Button } from "@chakra-ui/react"
import styles from '../styles/EmptyCart.module.css'

const EmptyCart = () => {
  return (
    <div className={styles.emptyCartContainer}>

        <h1>
          Your chest is missing treasures
        </h1>

        {/* <Button variant="solid" colorScheme="green"> */}
          <Link to='/pc/virtual/games'>
      <button className={styles.greenBtn}>

            Go buy some items
      </button>
            </Link>
        {/* </Button> */}

    </div>
    // <Center>
    // </Center>
  )
}

export default EmptyCart