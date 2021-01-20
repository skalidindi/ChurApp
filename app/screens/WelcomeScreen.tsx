import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Button from '../components/Button';
import routes from '../navigation/routes';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <ImageBackground blurRadius={10} source={require('../assets/background.jpg')} style={tailwind('flex-auto items-center justify-end')}>
      <View style={tailwind('absolute top-24 items-center')}>
        <Image
          source={require('../assets/logo-red.png')}
          style={tailwind('h-24 w-24')}
        />
        <Text style={tailwind('m-4 font-medium italic text-base')}>Your goto online marketplace for beauty services...</Text>
      </View>
      <View style={tailwind('w-full px-2 py-8')}>
        <Button title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
        <Button title="Register" onPress={() => navigation.navigate(routes.REGISTER)} style={tailwind('my-2')} />
      </View>
    </ImageBackground>
  );
}
