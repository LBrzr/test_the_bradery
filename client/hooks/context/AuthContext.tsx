import { createContext, useContext, useEffect, useState } from 'react';

import { registerUser, logUserIn, logUserOut, loadToken } from '../../services/auth';

interface AuthState { token: string | null, authenticated: boolean | null };

interface AuthProps {
    authState?: AuthState;
    onRegister?: (email: string, password: string) => Promise<any>;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});

export const userAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<AuthState>({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        loadToken().then(result => {
            if (result.error) {

            } else {
                setAuthState({
                    token: result.token!,
                    authenticated: true,
                })
            }
        });
    },)

    const value: AuthProps = {
        authState,
        onRegister: registerUser,
        onLogin: async (email: string, password: string) => {
            const result = await logUserIn(email, password);
            if (result.error) {

            } else {
                setAuthState({
                    token: result.token!,
                    authenticated: true,
                })
            }
        },
        onLogout: async () => {
            const result = await logUserOut();
            if (result.error) {

            } else {
                setAuthState({
                    token: null,
                    authenticated: false,
                })
            }
        },
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};