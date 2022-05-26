import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Index from "../pages/Index";
import React from "react";

const Stack = createStackNavigator();

const Navigation = () => {
    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Index" component={Index}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default Navigation;