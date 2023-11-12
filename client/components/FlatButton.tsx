import { Text, Pressable } from 'react-native'
import React from 'react'
import Styles from '../constants/Styles';

interface FlatButtonProps {
    text: string,
    onTap: () => Promise<any>,
    expanded?: boolean,
}

export default function FlatButton(props: FlatButtonProps) {
    const { text, onTap, expanded = false } = props;
    return (
        <Pressable style={[
            Styles.flatButton,
            expanded ? { flex: 1 } : {},
        ]} onPress={onTap}>
            <Text style={Styles.flatButtonText}>{text}</Text>
        </Pressable>
    )
}