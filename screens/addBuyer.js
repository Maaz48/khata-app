import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import InputComp from "../components/inputComp";
import DropDownComp from "../components/dropDownComp";
import { colors } from "../components/colors";
import TextComp from "../components/textComp";
import { width } from "../screenSize/size";
import { styling } from "../components/theme";
import ButtonComp from "../components/buttonComp";
import DialogBoxComp from "../components/dialogBoxComp";
import ModalComp from "../components/modal";
import IconButtonComp from "../components/iconButtonComp";

const AddBuyer = () => {
  ////////////////////// MODAL STATE ///////////
  const [isModalOpen, setisModalOpen] = useState(false);

  /////// GET DROPDOWN VALUE
  const dropDownItemValue = (e) => {
    console.log(e);
  };
  //////// DROPDOWN ITEMS
  const dropDownList = [
    { id: 0, name: "منڈی" },
    { id: 1, name: "ھدط" },
  ];

  //////////////// DIALOG BOX ////////////
  const [dialogVisible, setDialogVisible] = useState(false);

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
  ////////////////////////////////// MODAL CONTENT FOR BUYER ADD //////////////
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
            children="خریدار کی فہرست"
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
              children="خریدار کو اپ ڈیٹ کریں۔"
              style={{ textAlign: "center" }}
            />
          </View>
          <View style={{ width: "40%" }}>
            <TextComp
              children="خریدار کا نام"
              style={{ textAlign: "center" }}
            />
          </View>
        </View>
        {/* //////////////////////// PRINT VIA BACKEND DATA ///////////////// */}
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "60%", alignItems: "center" }}>
              <ButtonComp buttonType="contained" buttonValue="EDIT" />
            </View>
            <View style={{ width: "40%", alignItems: "center" }}>
              <TextComp children="maaz" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "60%", alignItems: "center" }}>
              <ButtonComp buttonType="contained" buttonValue="EDIT" />
            </View>
            <View style={{ width: "40%", alignItems: "center" }}>
              <TextComp children="maaz" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "60%", alignItems: "center" }}>
              <ButtonComp buttonType="contained" buttonValue="EDIT" />
            </View>
            <View style={{ width: "40%", alignItems: "center" }}>
              <TextComp children="maaz" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "60%", alignItems: "center" }}>
              <ButtonComp buttonType="contained" buttonValue="EDIT" />
            </View>
            <View style={{ width: "40%", alignItems: "center" }}>
              <TextComp children="maaz" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "60%", alignItems: "center" }}>
              <ButtonComp buttonType="contained" buttonValue="EDIT" />
            </View>
            <View style={{ width: "40%", alignItems: "center" }}>
              <TextComp children="maaz" />
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
    <>
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
                children={"براہ کرم اپنا خریدار شامل کریں۔"}
                style={{
                  fontSize: width * 0.06,
                  textAlign: "center",
                  marginBottom: 20,
                  color: colors.primary,
                }}
              />
            </View>
            <InputComp
              placeholder="ماشاخور کوڈ"
              keyboardType="numeric"
              style={{ textAlign: "right", backgroundColor: "transparent" }}
            />
            <InputComp
              placeholder="ماشاخور نام"
              keyboardType="default"
              style={{ textAlign: "right", backgroundColor: "transparent" }}
            />
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <DropDownComp
                items={dropDownList}
                onSelect={dropDownItemValue}
                label="سیکشن"
                style={{ textAlign: "right", backgroundColor: "transparent" }}
              />
            </View>
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
                extraStyle={{ paddingVertical: 5 }}
                buttonValue="خریداروں کی تفصیلات چیک کریں۔"
                buttonType="contained"
                extraStyleText={{ fontSize: width * 0.04 }}
                onClick={() => {
                  setisModalOpen(!isModalOpen);
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{ backgroundColor: colors.primary }}>
          <ButtonComp
            extraStyle={{ paddingVertical: 5 }}
            onClick={showDialog}
            buttonValue="فارم بھیجئے"
            buttonType="contained"
            extraStyleText={{ fontSize: width * 0.04 }}
          />
        </View>
      </SafeAreaView>
      <DialogBoxComp
        visible={dialogVisible}
        content={"خریدار کو شامل کیا گیا ہے۔"}
        onClose={hideDialog}
        onConfirm={handleConfirm}
        buttonRightvalue="ہوم پیج پر جائیں۔"
        buttonLeftvalue="ٹھیک ہے"
      />
    </>
  );
};

export default AddBuyer;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
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
