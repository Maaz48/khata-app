import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { colors } from "../components/colors";
import { styling } from "../components/theme";
import { fonts } from "../components/fonts";
import { width } from "../screenSize/size";
import { submenuScreens } from "../components/data";
import TextComp from "../components/textComp";
import { Context } from "../contextApi/context";
import IconButtonComp from "../components/iconButtonComp";

const SubmenuScreen = ({ route, navigation }) => {
  const { params } = route;
  const { setscreens } = useContext(Context);

  const goToSection = (e, f, g) => {
    setscreens(e);
    navigation.navigate("subMenuForms", { screenName: f, mainScreen: g });
  };

  const goToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      {/* //////////////////////////// */}
      <View
        style={{
          width: width,
          height: 50,
          backgroundColor: colors.primary,
          flexDirection: "row",
        }}
      >
        <View style={{ width: width / 4 }}>
          <IconButtonComp
            iconName="backburger"
            iconColor={colors.secondary}
            onIconPress={goToHomeScreen}
          />
        </View>
        <View
          style={{
            width: width / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextComp
            children={route.params.screenName}
            style={{ color: colors.secondary, fontSize: 20 }}
          />
        </View>
      </View>
      {/* //////////////////////////// */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{ gap: 20, paddingVertical: 40, alignItems: "center" }}>
          {/* /////////////////// PRINT Screen DATA FROM DATA.js FILE ///////////// */}

          {submenuScreens[params.id].map((val, ind) => {
            return (
              <Pressable
                style={styles.box}
                key={ind}
                onPress={() => goToSection(val.id, val.name, params.id)}
              >
                <View style={styles.iconBox}>
                  {/* <Image source={icons[ind]} style={{ width: 40, height: 40 }} /> */}
                </View>
                <View style={styles.textBox}>
                  <TextComp style={styles.text} children={val.name} />
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default SubmenuScreen;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  box: {
    flexDirection: "row",
    width: "90%",
    height: 100,
    backgroundColor: colors.secondary,
    padding: 16,
    ...styling.neomorphism,
  },
  iconBox: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 16,
    ...styling.neomorphism,
  },
  textBox: {
    width: "60%",
    height: "100%",
  },
  text: {
    fontFamily: fonts.urduFont,
    fontSize: width * 0.05,
    color: colors.primary,
    textAlign: "right",
    // paddingHorizontal: 20,
  },
});
