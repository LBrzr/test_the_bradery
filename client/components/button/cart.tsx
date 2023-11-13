import { Text } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';
import { useCart } from '../../hooks/context/CartContext';
import { View } from '../Themed';
import { Feather } from '@expo/vector-icons';
import { userAuth } from '../../hooks/context/AuthContext';

export default function () {
    const { authState } = userAuth();
    const { cart, onRefreshCart } = useCart();
    if (authState?.authenticated && !cart) {
        onRefreshCart!();
    }
    return cart ?
        (<View style={[Styles.outlinedButton, Styles.row]}>
            <Feather name='shopping-cart' size={16} />
            {
                cart.size > 0
                    ? <Text style={[Styles.outlinedButtonText, { paddingLeft: 10 }]}>
                        {cart.size}
                    </Text>
                    : <View style={{ margin: 2 }} />
            }
        </View>)
        : <View />;
}