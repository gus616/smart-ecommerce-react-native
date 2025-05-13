import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import { AppColors } from "../styles/colors";

const Stack = createStackNavigator();

const MainAppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
        </Stack.Navigator>
    );
}

export default MainAppStack;