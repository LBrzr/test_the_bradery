import { TextInput } from "react-native";
import { View, Text } from "../Themed";
import Styles from "../../constants/Styles";

interface TextFieldProps {
    label?: string,
    hint?: string,
    onChanged: (value: string) => void,
    required?: boolean,
    hide?: boolean,
}

export default function TextField(props: TextFieldProps) {
    const { label, onChanged, hint, required, hide = false } = props;
    return (
        <View style={Styles.transparent}>
            {label ? <Text>{label}</Text> : <View />}
            <TextInput
                style={[Styles.input]}
                placeholder={hint}
                onChangeText={onChanged}
                secureTextEntry={hide}
            />
        </View>
    )
}

