import React, { createContext, useContext, useEffect, useState } from 'react';

import { addToCart, emptyCart, loadCart, removeFromCart, placeOrder } from '../../services/cart';
import Cart from '../../types/cart';


interface CartProps {
    cart?: Cart;
    onAddToCart?: (product: Product) => Promise<any>;
    onRemoveFromCart?: (product: Product) => Promise<any>;
    onEmptyCart?: () => Promise<any>;
    onRefreshCart?: () => Promise<any>;
    onPlaceOrder?: () => Promise<any>;
}

const CartContext = createContext<CartProps>({});

export const useCart = () => {
    return useContext(CartContext);
}

interface CartConsumerProps {
    builder: (cart: CartProps | null) => React.JSX.Element;
}

export const CartConsumer = (props: CartConsumerProps) => {
    return <CartContext.Consumer>{cart => props.builder(cart)}</CartContext.Consumer>;
}

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<Cart>();

    const onRefreshCart = () => {
        loadCart().then(result => {
            if (result.error) {

            } else {
                setCart(result.data!);
            }
        });
    };

    useEffect(onRefreshCart, []);

    const value: CartProps = {
        cart,
        onAddToCart: async (product: Product) => {
            const result = await addToCart(product._id);
            if (result.error) {
            } else {
                setCart(result.data!);
            }
        },
        onRemoveFromCart: async (product: Product) => {
            const result = await removeFromCart(product._id);
            if (result.error) {
            } else {
                setCart(result.data!);
            }
        },
        onEmptyCart: async () => {
            const result = await emptyCart();
            if (result.error) {
            } else {
                setCart(result.data!);
            }
        },
        onRefreshCart: async () => onRefreshCart(),
        onPlaceOrder: placeOrder,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};