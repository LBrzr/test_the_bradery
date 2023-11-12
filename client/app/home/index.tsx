import React, { useEffect, useState } from 'react'
import { View, Text } from '../../components/Themed';
import Styles from '../../constants/Styles';
import { values as Strings } from '../../constants/strings'
import { fetchProducts } from '../../services/product';

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
        <View style={Styles.page}>
            {products.map(prod => {
                return (
                    <div key={prod._id}>{prod.name}</div>
                );
            })}
        </View>
    )
}