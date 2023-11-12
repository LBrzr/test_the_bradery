import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, userAuth } from '../hooks/context/AuthContext';

import Home from './home';
import Connection from './conection';

import { values as Strings } from '../constants/strings';

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
                authState?.authenticated ? (<Stack.Screen name={Strings.home} component={Home} />)
                    : (<Stack.Screen name={Strings.connection} component={Connection} />)
            }
        </Stack.Navigator>
    )
};