import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ColumnScreen from "./screens/ColumnScreen";
import TextScreen from "./screens/TextScreen";
import TextInputScreen from "./screens/TextInputScreen";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import ListViewScreen from "./screens/ListViewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home" }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Profile" }} />
        <Stack.Screen name="ColumnScreen" component={ColumnScreen} options={{ title: "Column" }} />
        <Stack.Screen name="TextScreen" component={TextScreen} options={{ title: "Text" }} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} options={{ title: "Text Input" }} />
        <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} options={{ title: "Scroll View" }} />
        <Stack.Screen name="ListViewScreen" component={ListViewScreen} options={{ title: "List View" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
