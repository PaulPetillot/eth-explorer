import { View, StyleSheet } from 'react-native'
import React from 'react'

const Bubble = ({ children, color }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 20,
      marginVertical: 10,
    }
  })

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default Bubble