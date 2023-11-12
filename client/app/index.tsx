import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, userAuth } from '../hooks/context/AuthContext';

import Home from './home';
import Connection from './conection';

import { values as Strings } from '../constants/strings';
import { OutlinedButton } from '../components/button';
import { View } from '../components/Themed';
import Styles from '../constants/Styles';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <AuthProvider>
            <Layout></Layout>
        </AuthProvider>
    )
};

export default App;

export const Layout = () => {
    const { authState, onLogout } = userAuth();
    return (
        <Stack.Navigator>
            {
                authState?.authenticated ? (
                    <Stack.Screen
                        name={Strings.home} component={Home}
                        options={{
                            headerRight: () => <View style={[Styles.padding, Styles.transparent]}>
                                <OutlinedButton
                                    text={Strings.logout}
                                    onTap={async () => {
                                        if (onLogout) onLogout();
                                    }} />
                            </View>
                        }}
                    />
                )
                    : (<Stack.Screen name={Strings.connection} component={Connection} />)
            }
        </Stack.Navigator>
    )
};