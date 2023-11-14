import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, userAuth } from '../hooks/context/AuthContext';

import Home from './home';
import Connection from './conection';

import { values as Strings } from '../constants/strings';
import { OutlinedButton } from '../components/button';
import { Text, View } from '../components/Themed';
import Styles from '../constants/Styles';
import Spacer from '../components/Spacer';
import Colors from '../constants/Colors';
import { CartProvider } from '../hooks/context/CartContext';
import Cart from './cart';
import { Pressable } from 'react-native';
import { PlaceOrderButton } from '../components/button/placeOrder';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <AppLayout />
            </CartProvider>
        </AuthProvider>
    )
};

export default App;

export const AppLayout = () => {
    const { authState, onLogout } = userAuth();
    return (
        <Stack.Navigator>
            {
                authState?.authenticated
                    ? <Stack.Screen
                        name={Strings.appName} component={Home}
                        options={{
                            headerStyle: {
                                backgroundColor: Colors.light.containerBackground,
                            },
                            headerRight: ({ }) => (
                                <View style={[
                                    Styles.padding,
                                    Styles.transparent,
                                    Styles.row,
                                ]}>
                                    <Text style={[Styles.subtitleText, Styles.center]}>
                                        {authState?.user?.email}
                                    </Text>
                                    <Spacer />
                                    {/* <Link href='/cart/' asChild>
                                        <Pressable>
                                            <CartButton />
                                        </Pressable>
                                    </Link> */}
                                    <Spacer />
                                    <OutlinedButton
                                        text={Strings.logout}
                                        onTap={async () => {
                                            if (onLogout) onLogout();
                                        }} />
                                </View>
                            )
                        }} />
                    : <Stack.Screen name={Strings.connection} component={Connection} />
            }
            <Stack.Screen name={Strings.cart} component={Cart} options={{
                headerStyle: {
                    backgroundColor: Colors.light.containerBackground,
                },
                headerRight: ({ }) => (
                    <View style={[
                        Styles.padding,
                        Styles.transparent,
                    ]}>
                        <PlaceOrderButton />
                    </View>
                )
            }} />
        </Stack.Navigator>
    )
};