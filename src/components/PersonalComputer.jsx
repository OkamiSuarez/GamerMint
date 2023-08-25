import { Menu, Button, MenuButton, MenuList, MenuItem, MenuGroup } from "@chakra-ui/react";
import VirtualGames from "./VirtualGames";
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
          <MenuGroup title='Virtual' color='black'>
            <MenuItem color='black' colorScheme='gray'>
              <Link to={"/pc/virtual/games"}>
                <VirtualGames />
              </Link>
            </MenuItem>
          </MenuGroup>
          <MenuGroup title='Released' color='black'>
            <MenuItem color='black' colorScheme='gray'>
              <Link to={`/category/released`}>
                <ReleasedVirtual />
              </Link>
            </MenuItem>
          </MenuGroup>
          <MenuGroup title='Preorder' color='black'>
            <MenuItem color='black' colorScheme='gray'>
              <Link to={`/category/preorder`}>
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