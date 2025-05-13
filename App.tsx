import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppSafeView from './src/components/views/AppSafeView';
import AppButton from './src/components/buttons/AppButton';
import AppTextInput from './src/components/inputs/AppTextInput';
import SignInScreen from './src/screens/auth/SignInScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import MainAppBottomTabs from './src/navigation/MainAppBottomTabs';
import MainAppStack from './src/navigation/MainAppStack';

export default function App() {
  return (
    <NavigationContainer>
      <FlashMessage position="top" style={{top: 0}} />
      <MainAppStack />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
