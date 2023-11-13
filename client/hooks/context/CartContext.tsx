import { createContext, useContext, useEffect, useState } from 'react';

import { addToCart, emptyCart, loadCart, removeFromCart } from '../../services/cart';


interface CartProps {
    cart?: Cart;
    onAddToCart?: (product: Product) => Promise<any>;
    onRemoveFromCart?: (product: Product) => Promise<any>;
    onEmptyCart?: () => Promise<any>;
}

const CartContext = createContext<CartProps>({});

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<Cart>();

    useEffect(() => {
        loadCart().then(result => {
            if (result.error) {

            } else {
                setCart(result.data!)
            }
        });
    }, []);

    const value: CartProps = {
        cart,
        onAddToCart: async (product: Product) => {
            const result = await addToCart(product._id);
            return result.data;
        },
        onRemoveFromCart: async (product: Product) => {
            const result = await removeFromCart(product._id);
            return result.data;
        },
        onEmptyCart: async () => {
            const result = await emptyCart();
            return result.data;
        },
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};