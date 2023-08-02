// import React from 'react'
import {Menu, Button, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider} from "@chakra-ui/react";
import PhysicalAccessories from "./PhysicalAccessories";
import PhysicalGames from "./PhysicalGames";
import VirtualGames from "./VirtualGames";
import VirtualTokens from "./unused/VirtualTokens";
import VirtualSubscriptions from "./VirtualSubscriptions";

const Xbox = () => {
  return (
    <div>
<Menu>
  <MenuButton as={Button} colorScheme='green' color='white'>
    Xbox
  </MenuButton>
  <MenuList>
    <MenuGroup title='Physical'>
      <MenuItem>
        <PhysicalAccessories/>
      </MenuItem>
      <MenuItem>
        <PhysicalGames/>
      </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Virtual'>
      <MenuItem>
        <VirtualGames/>
      </MenuItem>
      <MenuItem>
        <VirtualTokens/>
      </MenuItem>
      <MenuItem>
        <VirtualSubscriptions/>
      </MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>

    </div>
  )
}

export default Xbox