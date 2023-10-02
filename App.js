import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { StackNavigator } from './src/Navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';

NativeWindStyleSheet.setOutput({
  default: "native",
});
 

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
