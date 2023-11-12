import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../constants/Styles'

enum SpacerSize { big, small }

interface SpacerProps {
    size?: SpacerSize
}

export default function Spacer(props: SpacerProps) {
    const { size = SpacerSize.small } = props;
    return (
        <View
            style={[
                size == SpacerSize.small ? Styles.marginSmall : Styles.marginBig,
                Styles.transparent,
            ]}
        />
    )
}