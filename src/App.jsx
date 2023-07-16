// import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer
      greeting="Welcome to GamerMint, upgrade your stats and enjoy a new refreshing way to play"
      />
    </div>
  )
}

export default App