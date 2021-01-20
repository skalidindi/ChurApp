import { AsyncStorage } from "react-native";
import dayjs from "dayjs";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.error(error);
  }
};

const isExpired = (item: { timestamp: dayjs.ConfigType }) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) return null;

    const item = JSON.parse(value);
    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error(error);
  }
};

export default {
  store,
  get,
};
