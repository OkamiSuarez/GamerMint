// import React from 'react'
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer
      greeting="Welcome to GamerMint, upgrade your stats and enjoy a new refreshing way to play"
      />
      <ItemCount/>
    </div>
  )
}

export default App