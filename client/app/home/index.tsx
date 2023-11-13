import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../services/product';
import ProductTile from '../../components/tile/product';
import StaggeredList from '../../components/StaggeredList';
import { useCart } from '../../hooks/context/CartContext';
import { View } from '../../components/Themed';
import { CartButton } from '../../components/button';
import { Pressable } from 'react-native';
import { values as Strings } from '../../constants/strings';
import Styles from '../../constants/Styles';

const Home = ({ navigation }: any) => {
    return (
        <HomeLayout navigation={navigation} />
        // <CartProvider></CartProvider>
    )
};

export default Home;

export const HomeLayout = ({ navigation }: any) => {
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
        <View style={[{ height: '100%', width: '100%' }]}>
            <Pressable onPress={() => navigation.navigate(Strings.cart)}>
                <CartButton />
            </Pressable>
            <StaggeredList
                items={products}
                builder={prod => <ProductTile
                    key={prod._id}
                    product={prod}
                    addToCart={() => onAddToCart!(prod)}
                />}
            />
        </View>
    );
}

