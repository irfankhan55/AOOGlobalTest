import { ICustomProperties } from '@microsoft/applicationinsights-web';
import AsyncStorage from '@react-native-community/async-storage';

const getStringValue = async (key: string): Promise<string> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getObjectValue = async (key: string): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const setStringValue = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const setObjectValue = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
    return null;
  }
};

const mergeObjectValue = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.mergeItem(key, jsonValue);
  } catch (e) {
    console.log(e);
    return null;
  }
};

const isTimeRegistrationFormOpen = async (): Promise<boolean> => {
  const value: boolean | null = await getObjectValue(
    'isTimeRegistrationFormOpen'
  );
  const result = value ? value : false;
  return result;
};

const setIsTimeRegistrationFormOpen = async (value: boolean): Promise<void> => {
  return setObjectValue('isTimeRegistrationFormOpen', value);
};

const setUserAuthToken = (token: string): Promise<void> => {
  return setStringValue('authToken', token);
};

const getUserAuthToken = (): Promise<string> => {
  return getStringValue('authToken');
};

const setUserInitials = (userInitials: string): Promise<void> => {
  return setStringValue('userInitials', userInitials);
};

const getUserInitials = (): Promise<string> => {
  return getStringValue('userInitials');
};

const setUserId = (userId: string): Promise<void> => {
  return setStringValue('userId', userId);
};

const getUserId = (): Promise<string> => {
  return getStringValue('userId');
};

const removeUserInitials = (): Promise<void> => {
  return AsyncStorage.removeItem('userInitials');
};

const setMaintenancePlants = (plants: string[]): Promise<void> => {
  return setObjectValue('maintenancePlants', plants);
};

const getMaintenancePlants = async (): Promise<string[]> => {
  return getObjectValue('maintenancePlants');
};

const setProfitCenters = (profitCenters: string[]): Promise<void> => {
  return setObjectValue('profitCenters', profitCenters);
};

const getProfitCenters = async (): Promise<string[]> => {
  return getObjectValue('profitCenters');
};

const updateCommonProperties = (
  properties: ICustomProperties
): Promise<void> => {
  return mergeObjectValue('commonProperties', properties);
};

const getCommonProperties = async (): Promise<any> => {
  return getObjectValue('commonProperties');
};

/**
 * It will clear all data except 'userInitials', to keep tracking of user while login
 */
const clear = async (): Promise<void> => {
  await AsyncStorage.removeItem('authToken');
  await AsyncStorage.removeItem('userId');
  await AsyncStorage.removeItem('commonProperties');
  await AsyncStorage.removeItem('maintenancePlants');
  await AsyncStorage.removeItem('profitCenters');
  await setIsTimeRegistrationFormOpen(false);
};

export default {
  isTimeRegistrationFormOpen,
  setIsTimeRegistrationFormOpen,
  setUserAuthToken,
  getUserAuthToken,
  setUserId,
  getUserId,
  setUserInitials,
  getUserInitials,
  removeUserInitials,
  setMaintenancePlants,
  getMaintenancePlants,
  setProfitCenters,
  getProfitCenters,
  updateCommonProperties,
  getCommonProperties,
  clear
};
