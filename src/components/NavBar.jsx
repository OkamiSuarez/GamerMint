// import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div>
      {/* Brand of the project */}
      GamerMint
      {/* Menu Navbar */}
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          MenuItem
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Country" type="checkbox">
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Phone</MenuItemOption>
            <MenuItemOption value="country">Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu> 
      {/* Cart component */}
      <CartWidget/>
    </div>
  );
};

export default NavBar;
