import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { colors } from "./colors";
import { height, width } from "../screenSize/size";
import TextComp from "./textComp";
import IconButtonComp from "./iconButtonComp";
import ButtonComp from "./buttonComp";
import { fonts } from "./fonts";
import { Context } from "../contextApi/context";

const CustomDrawer = (props) => {
  const { contextValue, setcontextValue } = useContext(Context);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: colors.primary }}
      >
        <View style={{ position: "relative" }}>
          <ImageBackground
            source={require("../assets/drawerImage.jpg")}
            style={styles.bgImage}
            resizeMode="cover"
          >
            <View style={styles.textContainer}>
              <IconButtonComp
                iconName="account-circle"
                iconColor={colors.secondary}
                iconSize={50}
                style={{ margin: 0, position: "absolute", top: 0, right: 0 }}
              />
              <TextComp children={"معیز"} style={styles.userName} />
            </View>
            <View style={styles.overlay} />
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: colors.secondary,
            paddingHorizontal: 10,
            paddingTop: 20,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomBar}>
        <ButtonComp
          buttonIcon="logout"
          buttonType="text"
          extraStyle={{ width: "80%", marginLeft: -40 }}
          buttonValue="لاگ آوٹ"
          extraStyleText={{ fontSize: 20 }}
          textColor={colors.secondary}
          onClick={() => {
            setcontextValue(
              (contextValue.isLogedIn = { ...contextValue, isLogedIn: false })
            );
          }}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userName: {
    color: colors.secondary,
    fontFamily: fonts.urduFont,
    fontSize: width * 0.11,
    position: "absolute",
    bottom: -30,
    right: 10,
  },
  bgImage: {
    width: "100%",
    height: height / 5,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.overlay,
    opacity: 0.7,
  },
  textContainer: {
    zIndex: 22,
    width: "100%",
    height: "100%",
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: colors.greyBorderColor,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    alignItems: "flex-end",
  },
});
