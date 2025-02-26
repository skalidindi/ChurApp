import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ViewStyle } from "react-native";

export default function Screen({ children, style }: {children: React.ReactNode, style?: ViewStyle }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
