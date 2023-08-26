import React from "react";
import { Dialog, Paragraph } from "react-native-paper";
import ButtonComp from "./buttonComp";
import IconButtonComp from "./iconButtonComp";
import { colors } from "./colors";

const DialogBoxComp = ({
  visible,
  title,
  content,
  onClose,
  onConfirm,
  buttonRightvalue,
  buttonLeftvalue,
}) => {
  return (
    <Dialog visible={visible} onDismiss={onClose}>
      <Dialog.Title style={{ textAlign: "center" }}>
        {/* {title} */}
        <IconButtonComp
          iconColor={colors.primary}
          iconSize={40}
          iconName="check-circle"
        />
      </Dialog.Title>

      <Dialog.Content>
        <Paragraph style={{ textAlign: "center" }}>{content}</Paragraph>
      </Dialog.Content>

      <Dialog.Actions>
        <ButtonComp onClick={onClose} buttonValue={buttonLeftvalue} />
        <ButtonComp onClick={onConfirm} buttonValue={buttonRightvalue} />
      </Dialog.Actions>
    </Dialog>
  );
};

export default DialogBoxComp;
