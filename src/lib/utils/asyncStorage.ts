import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    } else {
      alert('An unknown error occurred')
    }
  }
}

export const getData = async (key: string): Promise<string | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    } else {
      alert('An unknown error occurred')
    }
    return null
  }
}

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    } else {
      alert('An unknown error occurred')
    }
  }
}
