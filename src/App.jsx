// import React from 'react'
// import Item from "./components/Item"
// import ItemCount from "./components/ItemCount"
import About from "./components/About"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
// import Home from "./components/Home"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        {/* <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer />} /> */}

      {/* <ItemListContainer
      greeting="Welcome to GamerMint, upgrade your stats and enjoy a new refreshing way to play"
      /> */}
      {/* <Home></Home>
      <About></About> */}
      {/* <ItemCount/> */}
      {/* <Item/> */}
      {/* <ItemList/> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App