import { Text, Pressable } from 'react-native'
import React from 'react'
import Styles from '../../constants/Styles';

interface OutlinedButtonProps {
    text: string,
    onTap: () => Promise<any>,
    expanded?: boolean,
    active?: boolean,
}

export default function (props: OutlinedButtonProps) {
    const { text, onTap, expanded = false, active = true } = props;
    const [btnStyle, textStyle, action] = active
        ? [Styles.outlinedButton, Styles.outlinedButtonText, onTap]
        : [Styles.disabledButton, null, null];
    return (
        <Pressable style={[
            btnStyle,
            expanded ? { flex: 1 } : {},
        ]} onPress={action} disabled={!active}>
            <Text style={textStyle}>{text}</Text>
        </Pressable>
    )
}