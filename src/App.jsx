// import React from 'react'
// import Item from "./components/Item"
// import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import VirtualTokens from "./components/VirtualTokens"


const App = () => {
  return (
    <div>
      <VirtualTokens/>
      <NavBar/>
      <ItemListContainer
      greeting="Welcome to GamerMint, upgrade your stats and enjoy a new refreshing way to play"
      />
      {/* <ItemCount/> */}
      {/* <Item/> */}
      {/* <ItemList/> */}
    </div>
  )
}

export default App