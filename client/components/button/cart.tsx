import { Text, Pressable } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';
import { useCart } from '../../hooks/context/CartContext';
import { View } from '../Themed';
import { Feather } from '@expo/vector-icons';

interface CartButtonProps {
    onTap: () => Promise<any>,
}

export default function (props: CartButtonProps) {
    const { onTap, } = props;
    const { cart } = useCart();
    return cart ?
        (
            <Pressable style={[Styles.outlinedButton, Styles.row]} onPress={onTap} >
                <Feather name='shopping-cart' size={16} />
                {
                    cart.lines.length > 0 ?
                        <Text
                            style={[
                                Styles.outlinedButtonText,
                                { paddingLeft: 10 },
                            ]}>
                            {cart.lines.length}
                        </Text>
                        : <View style={{ margin: 2 }} />
                }
            </Pressable>
        )
        : <View />
        ;
}