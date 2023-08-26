import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/loginScreen";
import SignUpScreen from "../screens/signUpScreen";
import HomeScreen from "../screens/homeScreen";
import { Context } from "../contextApi/context";
import CustomDrawer from "./customDrawer";
import { colors } from "./colors";
import AddBuyer from "../screens/addBuyer";
import AddJins from "../screens/addJins";
import AddSections from "../screens/addSections";
import IconButtonComp from "./iconButtonComp";
import FormScreens from "../screens/formScreens";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "card" }}
    >
      <Stack.Screen
        name="Login"
        options={{ animation: "slide_from_left" }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Signup"
        options={{ animation: "slide_from_right" }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="forms" component={FormScreens} />
      {/* Add more screens and their configurations here */}
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  const { setopenModal, openModal } = useContext(Context);
  ///////////////////////////////////// OPEN RECORD PAGE IN ADD BUYER PAGE //////////
  const showRecords = () => {
    setopenModal(!openModal);
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.secondary,
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.secondary,
        headerTitleAlign: "center",
        drawerPosition: "right",
        drawerLabelStyle: {
          textAlign: "right",
        },
      }}
      initialRouteName="Home"
      backBehavior="initialRoute"
      drawerContent={(props) => {
        return <CustomDrawer {...props} />;
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainStack}
        options={{ headerShown: false, drawerLabel: "ہوم پیج" }}
      />
      <Drawer.Screen
        name="خریدار شامل کریں۔"
        component={AddBuyer}
        options={{
          drawerLabel: "خریدار شامل کریں۔",
        }}
      />
      <Drawer.Screen
        name="جنس شامل کریں۔"
        component={AddJins}
        options={{
          drawerLabel: "جنس شامل کریں۔",
        }}
      />
      <Drawer.Screen
        name="سیکشن تبدیل کریں۔"
        component={AddSections}
        options={{
          drawerLabel: "سیکشن تبدیل کریں۔",
        }}
      />
      {/* Add more screens for the drawer menu */}
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  /////////////// CONTEXT RAPPER ///////////////
  const { contextValue } = useContext(Context);

  return contextValue.isLogedIn ? <DrawerNavigator /> : <AuthStack />;
};

export default StackNavigator;
