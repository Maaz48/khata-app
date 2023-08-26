import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Context } from "../contextApi/context";
import IconButtonComp from "../components/iconButtonComp";
import { colors } from "../components/colors";
import { width } from "../screenSize/size";
import { homeItemsContent } from "../components/data";
import TextComp from "../components/textComp";
import { formsFields } from "../components/data";
import { styling } from "../components/theme";
import InputComp from "../components/inputComp";
import DropDownComp from "../components/dropDownComp";
import ButtonComp from "../components/buttonComp";
import DatePickerComp from "../components/datePicker";
import DialogBoxComp from "../components/dialogBoxComp";

const FormScreens = ({ navigation }) => {
  const { screens, setscreens } = React.useContext(Context);
  const [alertBoxContent, setalertBoxContent] = useState("");
  const goToHomeScreen = () => {
    navigation.goBack();
  };
  /////// GET DROPDOWN VALUE
  const dropDownItemValue = (e) => {
    console.log(e);
  };

  ///////////// SHOW DATE ////////
  const currentDate = new Date(); // Current date
  const timestamp = currentDate.getTime(); // Unix timestamp in milliseconds

  const [date, setDate] = React.useState(new Date(timestamp));
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

  // console.log(date.toLocaleDateString());
  const onChange = (event, selectedDate) => {
    if (event.type == "dismissed") {
      setShow(false);
      setDate(date);
    } else {
      setShow(false);
      setDate(selectedDate);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  //////////////// DIALOG BOX ////////////
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [formValue, setFormValue] = React.useState("");

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);
  const handleConfirm = () => {
    // Perform actions on confirmation
    hideDialog();
  };

  const handleSubmit = () => {
    if (screens === 0 || screens === 1) {
      setalertBoxContent("فارم جمع کرا دیا ہے۔");
    } else if ([2, 3, 9, 10, 7, 8].includes(screens)) {
      setalertBoxContent("کوئی ریکارڈ نہیں ملا");
    } else if (screens === 4) {
      setalertBoxContent("اس شخص کے بارے میں کوئی ریکارڈ نہیں ملا");
    } else if (screens === 5) {
      setalertBoxContent(`${date.toLocaleDateString()} وصولی کی تاریخ`);
    } else if (screens === 6) {
      setscreens(1);
      return;
    }

    showDialog();
    // Perform form submission logic here
  };

  // const alertBoxValue = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/formSection.jpg")}
        style={styles.image}
        blurRadius={3}
      >
        {/* ///////////////// CUSTOM HEADER ///////////// */}
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
              iconName="backburger"
              iconColor={colors.secondary}
              onIconPress={goToHomeScreen}
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
              children={homeItemsContent[screens].value}
              style={{ color: colors.secondary, fontSize: 20 }}
            />
          </View>
        </View>

        {/* ///////////////////////////// FORM FIELDS ///////////////// */}
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            {formsFields[screens].map((data, index) => {
              return (
                <View key={index}>
                  {data.type == "default" || data.type == "numeric" ? (
                    <InputComp
                      placeholder={data.value}
                      style={{
                        textAlign: "right",
                        backgroundColor: "transparent",
                      }}
                      keyboardType={data.type}
                    />
                  ) : data.type == "date" ? (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <TextComp children={data.value} />
                      <IconButtonComp
                        onIconPress={showDatepicker}
                        iconName="calendar"
                        iconColor={colors.primary}
                      />
                      <DatePickerComp
                        date={date}
                        show={show}
                        mode={mode}
                        onChange={onChange}
                      />
                    </View>
                  ) : (
                    <View style={{ width: "100%", alignItems: "flex-end" }}>
                      <DropDownComp
                        items={data.dropdownData}
                        label={data.value}
                        onSelect={dropDownItemValue}
                        style={{
                          textAlign: "right",
                          backgroundColor: "transparent",
                        }}
                        listItemWidth={{ width: 150 }}
                      />
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={{ backgroundColor: colors.primary }}>
          <ButtonComp
            extraStyle={{ paddingVertical: 5 }}
            // buttonValue="فارم بھیجئے"
            buttonValue={
              [2, 3, 9, 10, 7, 8, 4].includes(screens)
                ? "ریکارڈ چیک کریں"
                : [0, 1].includes(screens)
                ? "فارم بھیجئے"
                : screens == 5
                ? "وصولی کی تاریخ چیک کریں"
                : "وصولی"
            }
            buttonType="contained"
            extraStyleText={{ fontSize: width * 0.04 }}
            onClick={handleSubmit}
          />
        </View>
        <DialogBoxComp
          visible={dialogVisible}
          // content="فارم جمع کرا دیا ہے۔"
          content={alertBoxContent}
          onClose={hideDialog}
          onConfirm={handleConfirm}
          buttonRightvalue="ہوم پیج پر جائیں۔"
          buttonLeftvalue="ٹھیک ہے"
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FormScreens;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container: {
    gap: 5,
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 16,
    ...styling.neomorphism,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
