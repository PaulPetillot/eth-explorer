import { Text, View, Button, StyleSheet } from 'react-native'

const Block = ({ blockData, navigation }) => {

  const { gasUsed, hash, miner, timestamp, number } = blockData

  return (
    <View>
      <Text>Block number: {number}</Text>
      <Text>Gas used: {Math.round(Number(gasUsed) / 1000)}</Text>
      <Text>Hash: {hash}</Text>
      <Text>Miner: {miner}</Text>
      <Text>Timestamp: {timestamp}</Text>
      <View>
        <Button
          style={styles.button}
          title="View more"
          onPress={() =>
            navigation.navigate('block-details', { blockNumber: number })
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
})

export default Block

