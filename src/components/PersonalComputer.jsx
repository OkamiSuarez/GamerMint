// import React from 'react'
import {Menu, Button, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider} from "@chakra-ui/react";
import PhysicalAccessories from "./PhysicalAccessories";
import PhysicalGames from "./PhysicalGames";
import VirtualGames from "./VirtualGames";
import VirtualTokens from "./unused/VirtualTokens";
import VirtualSubscriptions from "./VirtualSubscriptions";
import { Link } from "react-router-dom";

const PersonalComputer = () => {
  return (
    <div>
        
        <Menu>
  <MenuButton as={Button} colorScheme='gray' color='black'>
    PC
  </MenuButton>
  <MenuList>
    {/* <MenuGroup title='Physical'>
      <MenuItem>
        <PhysicalAccessories/>
      </MenuItem>
      <MenuItem>
        <PhysicalGames/>
      </MenuItem>
    </MenuGroup> */}
    <MenuDivider />
    <MenuGroup title='Virtual' color='black'>
      <MenuItem color='black' colorScheme='gray'>
        <Link to={"/pc/virtual/games"}>
          <VirtualGames/>
        </Link>
      </MenuItem>
      {/* <MenuItem>
        <VirtualTokens/>
      </MenuItem>
      <MenuItem>
        <VirtualSubscriptions/>
      </MenuItem> */}
    </MenuGroup>
  </MenuList>
</Menu>


    </div>
  )
}

export default PersonalComputer