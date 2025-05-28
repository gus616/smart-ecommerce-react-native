import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import { AppColors } from "../styles/colors";

const Stack = createStackNavigator();

const MainAppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
            <Stack.Screen
            name="CheckoutScreen"
            options={{
                headerShown: true,
                title: 'Checkout',
                headerTitleAlign: 'left',        
                headerTintColor: AppColors.black,
            }}
            component={CheckoutScreen}
            />
        </Stack.Navigator>
    );
}

export default MainAppStack;