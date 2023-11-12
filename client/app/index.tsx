import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, userAuth } from '../hooks/context/AuthContext';

import Home from './home';
import Login from './login';

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
                authState?.authenticated ? (<Stack.Screen name='Home' component={Home} />)
                    : (<Stack.Screen name='Login' component={Login} />)
            }
        </Stack.Navigator>
    )
};