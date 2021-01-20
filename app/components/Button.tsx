import React from 'react';
import tailwind from 'tailwind-rn';
import { GestureResponderEvent, Pressable, Text, View, ViewStyle } from 'react-native';

export default function Button({ onPress, title, style }: { onPress: (event: GestureResponderEvent) => void, title: string, style?: ViewStyle }) {
  return (
    <Pressable onPress={onPress} style={[tailwind('flex items-center justify-center rounded-3xl bg-red-500 w-full p-2'), style]}>
      <Text style={tailwind('text-white text-lg')}>{title}</Text>
    </Pressable>
  );
}
