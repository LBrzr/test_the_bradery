import { Text, Pressable, View, ImageBackground, ImageBackgroundComponent } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';
import { values as Strings } from '../../constants/strings';

interface ProductTileProps {
    product: Product,
}

export default function ProductTile(props: ProductTileProps) {
    const { product } = props;
    return (
        <ImageBackground
            style={{ height: '100%', width: '100%' }}
            resizeMode="cover"
            source={{ uri: 'https://en.thebradery.com/cdn/shop/products/sac-speedy30-louisvuitton-2303-74-LOUIS_VUITTON-vintega-seconde-main-luxe-maroquinerie-occasion_003_900x.jpg?v=1683206086' }}>
            <Text>{product.name}</Text>
            <Text>{product.price + Strings.currency}</Text>
        </ImageBackground>
    )
}