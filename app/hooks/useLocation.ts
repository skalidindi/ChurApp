import { useEffect, useState } from "react";
import { getLastKnownPositionAsync, LocationObject, requestPermissionsAsync } from "expo-location";

export default () => {
  const [location, setLocation]: [location: LocationObject | undefined, setLocation: Function] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) return;
      const lastKnownLocation = await getLastKnownPositionAsync();
      if (lastKnownLocation) {
        const {
          coords: { latitude, longitude },
        } = lastKnownLocation;
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
