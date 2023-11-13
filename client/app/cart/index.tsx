import React, { useState } from 'react'
import { View, Text } from '../../components/Themed'
import { values as Strings } from '../../constants/strings'
import { userAuth } from '../../hooks/context/AuthContext'
import Styles from '../../constants/Styles'
import TextField from '../../components/textField'
import Spacer from '../../components/Spacer'
import { FlatButton } from '../../components/button'
import { useCart } from '../../hooks/context/CartContext'
import CartLineTile from '../../components/tile/cartLine'
import { ScrollView } from 'react-native-gesture-handler'


export default function Cart() {
    const { authState } = userAuth();
    const { cart, onRefreshCart } = useCart();
    console.log(cart, ": 5555555555555555555");
    if (authState?.authenticated && !cart) {
        onRefreshCart!();
    }
    return (
        <ScrollView style={[{ height: '100%', width: '100%' }]}>
            {cart?.lines.map(line => {

                console.log(line)
                return <CartLineTile key={line.product._id} line={line} />;
            }
            )}
        </ScrollView>
    )
}