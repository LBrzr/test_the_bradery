import React from 'react'
import { userAuth } from '../../hooks/context/AuthContext'
import { View, Text } from '../../components/Themed';
import Styles from '../../constants/Styles';

export default function Home() {
    const { authState } = userAuth();
    const { user } = authState!;
    return (
        <View style={Styles.page}>
            <Text>{user!.email}</Text>
        </View>
    )
}