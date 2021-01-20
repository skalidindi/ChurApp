import React from 'react';
import tailwind from 'tailwind-rn';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, ...otherProps }:
  {
    value: string,
    onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    onChangeText: (text: string) => void,
    icon?: any,
    width?: number,
  }) {
  return (
    <View style={tailwind('w-full bg-blue-200 p-4 my-4 rounded-lg')}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={tailwind('mr-2')}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}
