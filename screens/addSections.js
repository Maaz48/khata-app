import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import InputComp from "../components/inputComp";
import { colors } from "../components/colors";
import TextComp from "../components/textComp";
import { width } from "../screenSize/size";
import ButtonComp from "../components/buttonComp";
import { styling } from "../components/theme";
import IconButtonComp from "../components/iconButtonComp";
import ModalComp from "../components/modal";
import DialogBoxComp from "../components/dialogBoxComp";

const AddSections = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);
  const handleConfirm = () => {
    // Perform actions on confirmation
    hideDialog();
  };

  const handleSubmit = () => {
    showDialog();
    // Perform form submission logic here
  };

  ////////////////////////////////// MODAL CONTENT FOR JINS ADD //////////////
  let ModalContent = () => {
    return (
      <View style={{ maxHeight: 400 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: colors.primary,
            paddingHorizontal: 10,
          }}
        >
          <IconButtonComp
            iconName="close"
            onIconPress={closeModal}
            iconColor={colors.secondary}
          />
          <TextComp
            style={{ color: colors.secondary }}
            children="سیکشن کی فہرست"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ width: "60%" }}>
            <TextComp
              children="  اپ ڈیٹ یا ڈیلیٹ کریں۔"
              style={{ textAlign: "center" }}
            />
          </View>
          <View style={{ width: "40%" }}>
            <TextComp children="سیکشن کا نام" style={{ textAlign: "right" }} />
          </View>
        </View>
        {/* //////////////////////// PRINT VIA BACKEND DATA ///////////////// */}
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 100,
              backgroundColor: colors.secondary,
              padding: 10,
              ...styling.neomorphism,
            }}
          >
            <View
              style={{
                width: "60%",
                alignItems: "center",
                flexDirection: "row",
                gap: 3,
              }}
            >
              <ButtonComp buttonType="contained" buttonValue="edit" />
              <ButtonComp buttonType="contained" buttonValue="Delete" />
            </View>
            <View style={{ width: "40%", alignItems: "flex-end" }}>
              <TextComp children="سلاد پتا" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 100,
              backgroundColor: colors.secondary,
              padding: 10,
              ...styling.neomorphism,
            }}
          >
            <View
              style={{
                width: "60%",
                alignItems: "center",
                flexDirection: "row",
                gap: 3,
              }}
            >
              <ButtonComp buttonType="contained" buttonValue="edit" />
              <ButtonComp buttonType="contained" buttonValue="Delete" />
            </View>
            <View style={{ width: "40%", alignItems: "flex-end" }}>
              <TextComp children="پھول گوبھی" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 100,
              backgroundColor: colors.secondary,
              padding: 10,
              ...styling.neomorphism,
            }}
          >
            <View
              style={{
                width: "60%",
                alignItems: "center",
                flexDirection: "row",
                gap: 3,
              }}
            >
              <ButtonComp buttonType="contained" buttonValue="edit" />
              <ButtonComp buttonType="contained" buttonValue="Delete" />
            </View>
            <View style={{ width: "40%", alignItems: "flex-end" }}>
              <TextComp children="آلو" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 100,
              backgroundColor: colors.secondary,
              padding: 10,
              ...styling.neomorphism,
            }}
          >
            <View
              style={{
                width: "60%",
                alignItems: "center",
                flexDirection: "row",
                gap: 3,
              }}
            >
              <ButtonComp buttonType="contained" buttonValue="edit" />
              <ButtonComp buttonType="contained" buttonValue="Delete" />
            </View>
            <View style={{ width: "40%", alignItems: "flex-end" }}>
              <TextComp children="پیاز" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 100,
              backgroundColor: colors.secondary,
              padding: 10,
              ...styling.neomorphism,
            }}
          >
            <View
              style={{
                width: "60%",
                alignItems: "center",
                flexDirection: "row",
                gap: 3,
              }}
            >
              <ButtonComp buttonType="contained" buttonValue="edit" />
              <ButtonComp buttonType="contained" buttonValue="Delete" />
            </View>
            <View style={{ width: "40%", alignItems: "flex-end" }}>
              <TextComp children="سرسون" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };
  const closeModal = () => {
    setisModalOpen(!isModalOpen);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {isModalOpen ? (
          <ModalComp
            visible={isModalOpen}
            modalClose={closeModal}
            content={<ModalContent />}
            styling={{ paddingHorizontal: 10 }}
          />
        ) : null}

        <View style={styles.container}>
          <View style={{ width: "100%" }}>
            <TextComp
              children={"براہ کرم اپنا سیکشن منتخب کریں۔"}
              style={{
                fontSize: width * 0.06,
                textAlign: "center",
                color: colors.primary,
              }}
            />
          </View>

          <InputComp
            placeholder="براہ کرم اپنے سیکشن کا نام لکھیں۔"
            keyboardType="default"
            style={{ textAlign: "right", backgroundColor: "transparent" }}
          />
          <View style={{ width: "100%" }}>
            <TextComp
              children={"یا"}
              style={{
                fontSize: width * 0.06,
                textAlign: "center",
                color: colors.primary,
              }}
            />
          </View>
          <View style={{ backgroundColor: colors.primary }}>
            <ButtonComp
              buttonValue="سیکشن کی تفصیلات چیک کریں۔"
              extraStyle={{
                backgroundColor: colors.primary,
                paddingVertical: 6,
              }}
              btnTextColor={colors.secondary}
              onClick={() => setisModalOpen(!isModalOpen)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ backgroundColor: colors.primary }}>
        <ButtonComp
          buttonValue="سیکشن شامل کریں"
          extraStyle={{
            backgroundColor: colors.primary,
            paddingVertical: 6,
          }}
          btnTextColor={colors.secondary}
          onClick={showDialog}
        />
      </View>
      <DialogBoxComp
        visible={dialogVisible}
        content="سیکشن شامل کر دیا گیا ہے۔"
        onClose={hideDialog}
        onConfirm={handleConfirm}
        buttonRightvalue="ہوم پیج پر جائیں۔"
        buttonLeftvalue="ٹھیک ہے"
      />
    </SafeAreaView>
  );
};

export default AddSections;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 30,
  },
  container: {
    gap: 20,
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 16,
    ...styling.neomorphism,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.overlay,
    opacity: 0.7,
    zIndex: 0,
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
});
