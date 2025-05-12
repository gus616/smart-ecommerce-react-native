import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import AppSafeView from '../../components/Views/AppSafeView'; // Ensure this is the correct path and AppSafeView is a React component
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { IMAGES } from '../../constants/images-paths';
import { s, vs } from 'react-native-size-matters';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppText from '../../components/texts/AppText';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();

    const handlerSignInNavigation = () => navigation.navigate('SignUpScreen');
    return (
        <AppSafeView style={styles.container}>
           <Image source={IMAGES.appLogo} style={styles.logo} />
           <AppTextInput placeholder='Email' onChangeText={setEmail} value={email}/>
           <AppTextInput placeholder='password' onChangeText={setPassword} secureTextEntry value={password}/>
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title='Login' onPress={() => console.log('login', email)}/>
            <AppButton title='Sign Up' style={styles.registerButton} textColor={AppColors.primary} onPress={handlerSignInNavigation}/>
        </AppSafeView> 
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        paddingHorizontal: sharedPaddingHorizontal,
    },
    logo: {
        height: s(150),
        width: s(150),
        marginBottom: vs(30),
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(15),        
    },
    registerButton: {
        backgroundColor: AppColors.white,
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: AppColors.primary,
        width: '100%',
    }
});