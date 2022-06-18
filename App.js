import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
