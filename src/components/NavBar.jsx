import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import PersonalComputer from "./PersonalComputer";
import { Box, Text, Flex } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex backgroundColor={"black"}>
      {/* Brand of the project */}
      <Box bg='white' w='100%' p={4} color='white' backgroundColor='black'>
        <Link to={"/"}>
          <Text fontSize='5xl' color='blue' >GamerMint</Text>
        </Link>
      </Box>
      <Box bg='white' w='100%' p={4} color='white' backgroundColor='gray'>
        <PersonalComputer></PersonalComputer>
      </Box>
      {/* Cart component */}
      <Box bg='white' w='100%' p={4} backgroundColor='black' color='white'>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
