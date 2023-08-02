// import React from 'react'
// import { Menu, MenuButton, Button, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Nintendo from "./Nintendo";
import PersonalComputer from "./PersonalComputer";
import Playstation from "./Playstation";
import Xbox from "./Xbox";
import { Box, Text, Flex } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex>
      {/* Brand of the project */}
      <Box bg='white' w='100%' p={4} color='white'>
        <Link to={"/"}>
          <Text fontSize='5xl' color='blue'>GamerMint</Text>
        </Link>
      </Box>
      {/* Menu Navbar */}
      <Box bg='white' w='100%' p={4} color='white'>
        <Xbox></Xbox>
      </Box>
      <Box bg='white' w='100%' p={4} color='white'>
        <Playstation></Playstation>
      </Box>
      <Box bg='white' w='100%' p={4} color='white'>
        <Nintendo></Nintendo>
      </Box>
      <Box bg='white' w='100%' p={4} color='white'>
        <PersonalComputer></PersonalComputer>
      </Box>
      {/* Cart component */}
      <Box bg='white' w='100%' p={4} color='white'>
        <Link to={"/cart"}>
        <CartWidget />
        </Link>

      </Box>

    </Flex>
  );
};

export default NavBar;
