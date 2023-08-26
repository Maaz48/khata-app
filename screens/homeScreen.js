import { StyleSheet, ScrollView, View, Pressable, Image } from "react-native";
import React from "react";
import TextComp from "../components/textComp";
import { colors } from "../components/colors";
import { width } from "../screenSize/size";
import IconButtonComp from "../components/iconButtonComp";
import { homeItemsContent } from "../components/data";
import { fonts } from "../components/fonts";
import { styling } from "../components/theme";
import { Context } from "../contextApi/context";

const Home = ({ navigation }) => {
  const { setscreens } = React.useContext(Context);
  const goToSection = (e) => {
    setscreens(e);
    navigation.navigate("forms");
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  let icons = [
    require("../assets/icons/Icons-01.png"),
    require("../assets/icons/Icons-02.png"),
    require("../assets/icons/Icons-03.png"),
    require("../assets/icons/Icons-04.png"),
    require("../assets/icons/Icons-05.png"),
    require("../assets/icons/Icons-06.png"),
    require("../assets/icons/Icons-07.png"),
    require("../assets/icons/Icons-08.png"),
    require("../assets/icons/Icons-09.png"),
    require("../assets/icons/Icons-10.png"),
    require("../assets/icons/Icons-11.png"),
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          height: 50,
          backgroundColor: colors.primary,
          flexDirection: "row",
        }}
      >
        <View style={{ width: width / 3 }}>
          <IconButtonComp
            iconName="menu"
            iconColor={colors.secondary}
            onIconPress={openDrawer}
          />
        </View>
        <View
          style={{
            width: width / 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextComp
            children={"Home"}
            style={{ color: colors.secondary, fontSize: 20 }}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{ gap: 20, paddingVertical: 40, alignItems: "center" }}>
          {homeItemsContent.map((val, ind) => {
            return (
              <Pressable
                style={styles.box}
                key={ind}
                onPress={() => goToSection(val.id)}
              >
                <View style={styles.iconBox}>
                  <Image
                    source={icons[ind]}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View style={styles.textBox}>
                  <TextComp style={styles.text} children={val.value} />
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  box: {
    flexDirection: "row",
    padding: 20,
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
    fontSize: width * 0.07,
    color: colors.primary,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  appName: {
    fontSize: width * 0.04,
    color: colors.primary,
    fontWeight: "bold",
    color: colors.primary, // Text color
    textShadowColor: colors.primary,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
  appNameB: {
    fontSize: width * 0.1,
    color: colors.primary,
    fontWeight: "bold",
    color: colors.primary, // Text color
    textShadowColor: colors.primary,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.overlay,
    opacity: 0.7,
    zIndex: 0,
  },
});
