import { Text, Pressable } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';

interface OutlinedButtonProps {
    text: string,
    onTap: () => Promise<any>,
    expanded?: boolean,
}

export default function (props: OutlinedButtonProps) {
    const { text, onTap, expanded = false } = props;
    return (
        <Pressable style={[
            Styles.outlinedButton,
            expanded ? { flex: 1 } : {},
        ]} onPress={onTap}>
            <Text style={Styles.outlinedButtonText}>{text}</Text>
        </Pressable>
    )
}