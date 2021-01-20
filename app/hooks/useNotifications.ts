import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

// import expoPushTokensApi from "../api/expoPushTokens";
import { Notification } from "expo-notifications";

export default (notificationListener?: (event: Notification) => void) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      // expoPushTokensApi.register(token);
    } catch (error) {
      console.error("Error getting a push token", error);
    }
  };
};
