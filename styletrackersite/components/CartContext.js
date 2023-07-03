import { useContext, useState } from "react";

const CartContext = useContext({});

export function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <CartContext.Provider value={{ cartProducts }}>
            {children}
        </CartContext.Provider>
    )
};

