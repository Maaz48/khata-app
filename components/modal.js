import { StyleSheet, View } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import ButtonComp from "./buttonComp";
import TextComp from "./textComp";

const ModalComp = ({ visible, content, modalClose, styling }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  console.log(modalClose);
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => {
            modalClose();
          }}
          style={styling}
          contentContainerStyle={containerStyle}
        >
          {content}
        </Modal>
      </Portal>
      <ButtonComp extraStyle={{ marginTop: 30 }} />
    </View>
  );
};

export default ModalComp;
