import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { Platform } from "react-native";
import { colors } from "./colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4fa67a",
    secondary: "#ffffff",
  },
};

const styling = {
  neomorphism: {
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: colors.secondary,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
};

export { theme, styling };
