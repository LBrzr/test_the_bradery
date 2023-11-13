import { Pressable, Text } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';
import { values as Strings } from '../../constants/strings';
import { View } from '../Themed';
import { Feather } from '@expo/vector-icons';
import { useCart } from '../../hooks/context/CartContext';

export const PlaceOrderButton = () => {
    const { onPlaceOrder } = useCart();
    return (<Pressable style={[Styles.outlinedButton, Styles.row]} onPress={onPlaceOrder}>
        <Feather name='dollar-sign' size={16} />
        {
            <Text style={[Styles.outlinedButtonText, { paddingLeft: 10 }]}>
                {Strings.pay}
            </Text>
        }
    </Pressable >);
}