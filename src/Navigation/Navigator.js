
import { createStackNavigator } from "@react-navigation/stack";
import { PartsList } from "../screens/Parts/PartsList";
import { CreateParts } from "../screens/Parts/CreateParts";

const Stack = createStackNavigator();
/* const screenOptionsStyle = {
    headerShown:false
} */
export const StackNavigator = () => {
    
    return (
        <Stack.Navigator /* screenOptions={screenOptionsStyle} */ >
            
            <Stack.Screen name="PartsList" component={PartsList} initialParams={{level:'',flashMessage:'',part:{}}} />
            <Stack.Screen name="CreateParts" component={CreateParts} />
        </Stack.Navigator>
    )
};
