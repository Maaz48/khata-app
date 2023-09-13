import React from "react";
import { Checkbox } from "react-native-paper";
import TextComp from "./textComp";
import { View } from "react-native";
const CheckboxComp = ({ text, checked, setChecked, setStyle,id }) => {
  return (
    <View style={setStyle}>
      <TextComp children={text} />
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default CheckboxComp;
