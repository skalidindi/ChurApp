import React from "react";
import { Text, ViewStyle } from "react-native";

import defaultStyles from "../config/styles";

export default function AppText({ children, style, ...otherProps }: {children: React.ReactNode, style?: ViewStyle }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
