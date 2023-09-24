import React, { useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";


import logo from '../../../assets/pngwing.com (1).png';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const handleSignInPressed = () => {
        navigation.navigate('Home');
    }

    const handleForgotPasswordPressed = () => {
        navigation.navigate('Forgot Password');
    }

    const handleRegisterPressed = () => {
        navigation.navigate('Register');
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View
                style={styles.root}
            >
                <Image
                    source={logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />

                <CustomInput
                    placeholder='Correo Electronico'
                    value={username}
                    setValue={setUsername}
                />

                <CustomInput
                    placeholder='Contraseña'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton
                    onPress={handleSignInPressed}
                    text="Ingresar"
                />

                <CustomButton
                    onPress={handleForgotPasswordPressed}
                    text="Olvidé mi contraseña"
                    type='tertiary'
                />

                <SocialSignInButtons/>

                <CustomButton
                    onPress={handleRegisterPressed}
                    text="No tengo cuenta"
                    type='tertiary'
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        root: {
            alignItems: 'center',
            padding: 20,
        },
        logo: {
            width: '70%',
            maxHeight: 200,
        }
    }
)

export default SignInScreen;