import React, { useState } from 'react'
import { View, Text } from '../../components/Themed'
import { values as Strings } from '../../constants/strings'
import { userAuth } from '../../hooks/context/AuthContext'
import Styles from '../../constants/Styles'
import TextField from '../../components/textField'
import Spacer from '../../components/Spacer'
import { FlatButton } from '../../components/button'


export default function Connection() {
    const [email, setEmail] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const { onLogin, onRegister } = userAuth();

    const login = async () => {
        if (onLogin)
            return onLogin(email, pwd).then((result) => {
                if (result && result.error) alert(result.msg);
            });
    }

    const register = async () => {
        if (onRegister)
            return onRegister(email, pwd).then((result) => {
                if (result) {
                    const { error, msg } = result;
                    if (error) alert(msg);
                    else login();
                }
            });
    }

    return (
        <View style={[Styles.page, Styles.center]}>
            <View style={[
                Styles.selfCenter,
                Styles.boxSizeSmall,
                Styles.container,
                Styles.rounded,
                Styles.padding,
            ]}>
                <Text style={Styles.titleText}>{Strings.connection}</Text>
                <Spacer />
                <View style={Styles.transparent}>
                    <TextField onChanged={setEmail} hint={Strings.email} />
                    <Spacer />
                    <TextField hide onChanged={setPwd} hint={Strings.password} />
                    <Spacer />
                    <View style={[Styles.row, Styles.transparent]}>
                        <FlatButton expanded onTap={login} text={Strings.connect} />
                        <Spacer />
                        <FlatButton expanded onTap={register} text={Strings.register} />
                    </View>
                </View>
            </View>
        </View>
    )
}