// import React from 'react'
import { Menu, Button, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from "@chakra-ui/react";
import PhysicalAccessories from "./PhysicalAccessories";
import PhysicalGames from "./PhysicalGames";
import VirtualGames from "./VirtualGames";
import VirtualTokens from "./unused/VirtualTokens";
import VirtualSubscriptions from "./VirtualSubscriptions";
import { Link } from "react-router-dom";
import ReleasedVirtual from "./ReleasedVirtual";
import PreorderVirtual from "./PreorderVirtual";

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
          {/* <MenuDivider /> */}
          <MenuGroup title='Virtual' color='black'>
            <MenuItem color='black' colorScheme='gray'>
              <Link to={"/pc/virtual/games"}>
                <VirtualGames />
              </Link>
            </MenuItem>
            {/* <MenuItem>
        <VirtualTokens/>
      </MenuItem>
      <MenuItem>
        <VirtualSubscriptions/>
      </MenuItem> */}
          </MenuGroup>
          <MenuGroup title='Released' color='black'>
            <MenuItem color='black' colorScheme='gray'>
              <Link to={"/pc/virtual/games/released"}>
                <ReleasedVirtual />
              </Link>
            </MenuItem>
          </MenuGroup>
          <MenuGroup title='Preorder' color='black'>
            <MenuItem color='black' colorScheme='gray'>
              <Link to={"/pc/virtual/games/preorder"}>
                <PreorderVirtual />
              </Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>


    </div>
  )
}

export default PersonalComputer