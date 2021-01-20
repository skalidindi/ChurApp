import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import tailwind from 'tailwind-rn';

import Text from "./Text";
import colors from "../config/colors";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={[styles.container, tailwind('absolute flex items-center justify-center bg-red-300 h-full w-full')]}>
        <Text style={tailwind('text-white')}>Error</Text>
        <Text style={tailwind('text-white')}>No Internet Connection</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
    zIndex: 1,
  },
});
