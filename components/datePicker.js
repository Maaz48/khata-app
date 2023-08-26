import React from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { colors } from "./colors";
import TextComp from "./textComp";
const DatePickerComp = ({ date, show, mode, onChange }) => {
  return (
    <View>
      <TextComp children={date.toLocaleDateString()} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={(e, j) => onChange(e, j)}
          // accentColor={colors.overlay}
          // textColor={colors.greyBorderColor}
          display="spinner"
          // style={{ backgroundColor: colors.primary }}
          // themeVariant="light"
        />
      )}
    </View>
  );
};

export default DatePickerComp;
