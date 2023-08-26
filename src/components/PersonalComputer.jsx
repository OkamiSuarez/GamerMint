import { Menu, Button, MenuButton, MenuList, MenuItem, MenuGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PersonalComputer = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} color='black'>
          Categories
        </MenuButton>
        <MenuList>
          <MenuGroup title='Virtual' color='black'>
            <MenuItem color='black'>
              <Link to={"/pc/virtual/games"}>
                All games
              </Link>
            </MenuItem>
          </MenuGroup>
          <MenuGroup title='Released' color='black'>
            <MenuItem color='black'>
              <Link to={`/category/released`}>
                Only released
              </Link>
            </MenuItem>
          </MenuGroup>
          <MenuGroup title='Preorder' color='black'>
            <MenuItem color='black'>
              <Link to={`/category/preorder`}>
                Only Pre-Order
              </Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  )
}

export default PersonalComputer