import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommanActivityIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
    <ActivityIndicator></ActivityIndicator>
  </View>
  )
}

export default CommanActivityIndicator

const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  