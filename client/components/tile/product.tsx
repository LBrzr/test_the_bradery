import { ImageBackground } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';
import { Text, View } from '../../components/Themed';
import { values as Strings } from '../../constants/strings';
import { OutlinedButton } from '../button';

interface ProductTileProps { product: Product }

export default function ProductTile(props: ProductTileProps) {
    const { product } = props;
    return (
        <ImageBackground
            style={{ height: '100%', width: '100%' }}
            resizeMode="cover"
            source={{ uri: product.image }}>
            <View style={[Styles.page, Styles.transparent, { flex: 1 }]}>
                <View style={[
                    Styles.transparent,
                    Styles.row,
                    Styles.alignHEnd,
                    Styles.alignVCenter,
                    Styles.padding,
                ]}>
                    <View style={[
                        Styles.transparent,
                        Styles.column,
                        Styles.alignVEnd,
                        { paddingEnd: 10 }
                    ]}>
                        <Text style={Styles.subtitleText}>{product.name}</Text>
                        <Text>{product.price + Strings.currency}</Text>
                    </View>
                    <OutlinedButton active={product.inventory > 0} text={Strings.addToCart} onTap={async () => { }} />
                </View>
            </View>
        </ImageBackground>
    )
}