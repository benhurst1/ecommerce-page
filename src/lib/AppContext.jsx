import { createContext, useMemo, useState } from "react";

export const AppContext = createContext({
    cart: [], // global state
    isCartOpen: false,
    toggleCartOpen: () => {},
    modifyCart: () => {}, // modifier function
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    isPreview: false, // toggle between opening and closing image preview
    togglePreview: () => {},
    isNavOpen: false,
    toggleNavOpen: () => {},
});

export default function AppContextProvider ({ children }) {
    
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isPreview, setIsPreview] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const contextValue = useMemo(() => 
    {
        const modifyCart = (item, increment=false, decrement=false) => {
            const foundItem = cart.filter( it => it.id == item.id);
    
            if (foundItem.length && increment) {
                const toBeModifiedItem = foundItem[0];
                const filteredCart = cart.filter( it => it.id !== item.id)
    
                setCart([...filteredCart, {
                    ...toBeModifiedItem,
                    qty: toBeModifiedItem.qty + 1,
                    
                  }])
            } else if (foundItem.length && decrement) {
                const toBeModifiedItem = foundItem[0];
                const filteredCart = cart.filter( it => it.id != item.id)
                const newQty = Number(`${toBeModifiedItem.qty > 1 ? toBeModifiedItem.qty - 1 : 1}`);
                
                setCart([...filteredCart, {
                    ...toBeModifiedItem,
                    qty: newQty,
                }])
            }
        }

        const addItemToCart = (item) => {
            const foundItem = cart.filter( it => it.id == item.id);
    
            if (!foundItem.length) {
                setCart([...cart, item])
            } 

            
        }

        const removeItemFromCart = (item) => {
            const foundItem = cart.filter( it => it.id === item.id);

            if (foundItem) {
                const remainingItems = cart.filter( it => it.id !== item.id);

                setCart([...remainingItems]);
            }
        }
    
        const togglePreview = (state) => {
            setIsPreview(state);
        }

        const toggleCartOpen = () => {
            setIsCartOpen(!isCartOpen)
        }

        const toggleNavOpen = () => {
            setIsNavOpen(!isNavOpen);
        }
        
        return {cart, isCartOpen, toggleCartOpen, modifyCart, addItemToCart, removeItemFromCart, isPreview, togglePreview, isNavOpen, toggleNavOpen}
    },
    [cart, isCartOpen, isPreview, isNavOpen]
    );

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}