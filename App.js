import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Homescreen from "./screens/home"; 
import Main from "./screens/Main"; 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
    <Stack.Navigator initialRouteName="Homescreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name = "Homescreen" component = {Homescreen}></Stack.Screen>
    <Stack.Screen name = "Main" component = {Main}></Stack.Screen>
     </Stack.Navigator>
    </NavigationContainer>
  )
}