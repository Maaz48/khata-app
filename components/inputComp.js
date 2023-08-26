import React from "react";
import { TextInput } from "react-native-paper";

const InputComp = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCompleteType,
  error,
  helperText,
  placeholderColor,
  onFocus,
  itemOnRight,
  style,
}) => {
  return (
    <TextInput
      mode="flat"
      right={itemOnRight}
      onFocus={onFocus}
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCompleteType={autoCompleteType}
      error={error}
      helperText={helperText}
      style={style}
      theme={{ colors: { onSurfaceVariant: placeholderColor } }}
    />
  );
};

export default InputComp;
