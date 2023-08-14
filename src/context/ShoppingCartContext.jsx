import { createContext, useState } from "react"

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=>{
    
    
    
    return(
        <CartContext.Provider>

            {children}

        </CartContext.Provider>
    )
}
export default ShoppingCartProvider