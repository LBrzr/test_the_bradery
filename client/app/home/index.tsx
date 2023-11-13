import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../services/product';
import ProductTile from '../../components/tile/product';
import StaggeredList from '../../components/StaggeredList';
import { CartProvider, useCart } from '../../hooks/context/CartContext';

const Home = () => {
    return (
        <HomeLayout />
        // <CartProvider></CartProvider>
    )
};

export default Home;

export const HomeLayout = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { onAddToCart } = useCart();
    useEffect(() => {
        fetchProducts().then((result) => {
            if (result.error) {

            } else {
                setProducts(result.data!);
            }
        });
    }, []);
    return (
        <StaggeredList
            items={products}
            builder={prod => <ProductTile
                key={prod._id}
                product={prod}
                addToCart={() => onAddToCart!(prod)}
            />}
        />
    );
}

