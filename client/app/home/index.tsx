import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../services/product';
import ProductTile from '../../components/tile/product';
import StaggeredList from '../../components/StaggeredList';
import { CartProvider } from '../../hooks/context/CartContext';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then((result) => {
            if (result.error) {

            } else {
                setProducts(result.data!);
            }
        });
    }, []);
    return (
        <CartProvider>
            <StaggeredList
                items={products}
                builder={(prod) => <ProductTile key={prod._id} product={prod} />}
            />
        </CartProvider>
    )
}