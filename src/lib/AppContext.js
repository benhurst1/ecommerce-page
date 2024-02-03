import { createContext, useState } from "react";

export const Busket = createContext({
    cart: [], // global state
    modifyCart: () => {} // modifier function
});

export default function BusketContext ({ children }) {
    const [cart, setCart] = useState([]);

    const modifyCart = (item) => {
        const foundItem = cart.filter( it => it.id == item.id);

        if (foundItem.length) {
            const toBeModifiedItem = foundItem[0];
            const filteredCart = cart.filter( it => it.id !== item.id)

            setCart([...filteredCart, {
                id: "1234",
                qty: toBeModifiedItem.qty + 1,
                image: "",
                price: 0
              }])
        } else {
            setCart([...cart, item])
        }
    }

    return (
        <Busket.Provider value={{cart, modifyCart}}>
            {children}
        </Busket.Provider>
    )
}


const item = {
    id: "1234",
    qty: 1,
    image: "",
    price: 0
  }