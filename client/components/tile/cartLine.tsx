import { Image, View } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';
import { Text } from '../../components/Themed';
import { values as Strings } from '../../constants/strings';
import { OutlinedButton } from '../button';
import { CartLine } from '../../types/cart';
import Spacer from '../Spacer';

interface CartLineTileProps {
    line: CartLine
}

export default function CartLineTile(props: CartLineTileProps) {
    const { line } = props;
    const { count, product } = line;
    return (
        <View
            style={[
                Styles.container,
                // Styles.row,
            ]}>
            <Image source={{ uri: product.image }} style={{ height: 100, width: 100 }} />
            <Spacer />
            <View style={[
                Styles.container,
                {
                    flexDirection: "column",
                    paddingBottom: 10,
                }]}>
                <Text style={{ height: 50 }}>{product.name}</Text>
                <Spacer />,
                <Text style={{ height: 50 }}>{product.price}</Text>
            </View>
        </View>
    );
}