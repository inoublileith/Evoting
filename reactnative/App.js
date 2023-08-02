import * as React from 'react'
import 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import Lun from './App/index'
export default function App() {
  const [loaded] = useFonts({
    'Roboto-Black': require('./App/assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./App/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./App/assets/fonts/Roboto-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }
  return <Lun />
}
