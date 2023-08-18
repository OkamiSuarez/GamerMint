import { createContext, useState } from "react"

export const CartContext = createContext(null)

export const CartProvider =({children})=>{
    const [cart, setCart] = useState([])
    
    const pruebamsg = 'Mensaje de prueba'
    // console.log('Cart de context')
    // console.log(cart)

    return(
        <CartContext.Provider value ={{cart,setCart,pruebamsg}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider