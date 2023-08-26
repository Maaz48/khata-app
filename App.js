import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/StackNavigator";
import { theme } from "./components/theme";
import { ContextProvider } from "./contextApi/context";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./components/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    urduFont: require("./assets/fonts/UrduFont.ttf"),
  });

  if (!fontsLoaded) {
    return console.log("HELL WORLD");
  } else {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <ContextProvider
            Children={
              <PaperProvider theme={theme}>
                <StackNavigator />
                <StatusBar style="light" backgroundColor={colors.primary} />
              </PaperProvider>
            }
          />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
