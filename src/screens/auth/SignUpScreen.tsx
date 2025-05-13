import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import AppSafeView from '../../components/views/AppSafeView'; // Ensure this is the correct path and AppSafeView is a React component
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { IMAGES } from '../../constants/images-paths';
import { s, vs } from 'react-native-size-matters';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppText from '../../components/texts/AppText';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const handlerSignInNavigation = () => navigation.navigate('SignInScreen');
    return (
        <AppSafeView style={styles.container}>
           <Image source={IMAGES.appLogo} style={styles.logo} />
           <AppTextInput placeholder='Email' onChangeText={setEmail} value={email}/>
           <AppTextInput placeholder='Username' onChangeText={setUserName} value={userName}/>
           <AppTextInput placeholder='password' onChangeText={setPassword} secureTextEntry value={password}/>
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title='Create New Account' onPress={() => console.log("signing creds", email + ' ' + userName)}/>
            <AppButton title='Go to Sign In' style={styles.signInButton} textColor={AppColors.primary} onPress={handlerSignInNavigation}/>
        </AppSafeView> 
    );
}

export default SignUpScreen;

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
    signInButton: {
        backgroundColor: AppColors.white,
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: AppColors.primary,
        width: '100%',
    }
});