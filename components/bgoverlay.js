import React from "react";
import { ImageBackground, View } from "react-native";
import TextComp from "./textComp";
const Bgoverlay = ({
  containerStyle,
  imagePath,
  resizeMode,
  style,
  overlayStyle,
  welcomeTextStyle,
  appNameStyle,
  appname,
  welcomeText,
}) => {
  return (
    <View style={containerStyle}>
      <ImageBackground source={imagePath} resizeMode={resizeMode} style={style}>
        <View style={overlayStyle} />
        <TextComp style={welcomeTextStyle} children={welcomeText} />
        <TextComp style={appNameStyle} children={appname} />
      </ImageBackground>
    </View>
  );
};

export default Bgoverlay;
