import React, { Dispatch, SetStateAction, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';
import tailwind from 'tailwind-rn';
import 'react-native-gesture-handler';

// import WelcomeScreen from './app/screens/WelcomeScreen';
import authStorage from "./app/auth/storage";
import AppLoading from "expo-app-loading";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';

export default function App() {
  const [user, setUser]: [user: string | undefined, setUser: Dispatch<SetStateAction<string | undefined>>] = useState();
  const [isReady, setIsReady] = useState(false);
  const navigationRef = React.useRef(null);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={() => setIsReady(true)} />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
