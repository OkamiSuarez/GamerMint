import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Home from "./components/Home"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from "./context/CartContext"
import SendOrder from "./components/SendOrder"

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/pc/virtual/games" element={<ItemListContainer />} />
            <Route exact path="/checkout" element={<SendOrder/>} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App