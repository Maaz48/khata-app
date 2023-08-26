import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useContext } from "react";
import InputComp from "../components/inputComp";
import ButtonComp from "../components/buttonComp";
import TextComp from "../components/textComp";
import { width } from "../screenSize/size";
import { colors } from "../components/colors";
import { Context } from "../contextApi/context";
import { appName } from "../components/data";

const SignUpScreen = ({ navigation }) => {
  /////////////// CONTEXT RAPPER ///////////////
  const { contextValue, setcontextValue } = useContext(Context);
  //////////////// ANIMATION ///////////
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(translateX, {
      toValue: width / 2 - 100,
      duration: 1000,
      useNativeDriver: true,
    });

    animation.start();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/loginScreen.jpg")}
      style={styles.image}
    >
      <View style={styles.appNameBox}></View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Animated.View
          style={[
            { alignItems: "flex-start", justifyContent: "center" },
            [styles.animation, { transform: [{ translateX }] }],
          ]}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 150, height: 150, borderRadius: 50 }}
          />
        </Animated.View>
        {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TextComp style={styles.appName} children={appName} />
          </View> */}

        <View style={{ marginTop: -40, gap: 12 }}>
          <InputComp
            placeholderColor={colors.secondary}
            style={{ backgroundColor: "transparent", textAlign: "right" }}
            placeholder={"براہ کرم اپنا پہلا نام درج کریں۔"}
          />
          <InputComp
            placeholderColor={colors.secondary}
            style={{ backgroundColor: "transparent", textAlign: "right" }}
            placeholder={"براہ کرم اپنا آخری نام درج کریں۔"}
          />
          <InputComp
            placeholderColor={colors.secondary}
            style={{ backgroundColor: "transparent", textAlign: "right" }}
            placeholder={"براہ کرم اپنا ای میل درج کریں۔"}
          />
          <InputComp
            placeholderColor={colors.secondary}
            style={{ backgroundColor: "transparent", textAlign: "right" }}
            placeholder={"برائے مہربانی اپنا پاس ورڈ داخل کریں"}
          />
          <ButtonComp
            buttonValue="رجسٹر کریں۔"
            buttonType="contained"
            extraStyleText={{ fontSize: 18 }}
            onClick={() => {
              setcontextValue(
                (contextValue.isLogedIn = {
                  ...contextValue,
                  isLogedIn: true,
                })
              );
            }}
            extraStyle={{ paddingVertical: 5 }}
          />
        </View>
        <ButtonComp
          buttonValue="پہلے سے ہی ایک اکاؤنٹ ہے یہاں کلک کریں۔"
          buttonType="text"
          btnTextColor="white"
          onClick={() => {
            navigation.replace("Login");
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  appNameBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colors.overlay,
    opacity: 0.6,
  },
  appName: {
    fontSize: width * 0.1,
    color: "white",
  },
});
