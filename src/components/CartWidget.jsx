// import React from 'react'
import { StarIcon } from "@chakra-ui/icons"
import { Box, Flex, Spacer } from "@chakra-ui/react"

const CartWidget = () => {
  return (
    <Flex>
        <Box>
            <StarIcon/>
        </Box>
    <Spacer/>
        <Box>
            <p>3</p>
        </Box>
    </Flex>

  )
}

export default CartWidget