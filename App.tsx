import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MainNavigation from './Src/Navigation/MainNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './Src/Store/ConfigureStore';
import  Splashscreen from "react-native-splash-screen"

const App = () => {

  useEffect(()=>{
    Splashscreen.hide()
  },[])

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})