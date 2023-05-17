import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { AlchemyContext } from '../../context/Alchemy'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Bubble from '../../components/Bubble/Bubble'

const BlockDetails = ({ blockNumber, navigation }) => {
  const { alchemy } = React.useContext(AlchemyContext);


  const [blockData, setBlockData] = useState();

  useEffect(() => {
    async function getBlockData() {
      setBlockData(await alchemy.core.getBlockWithTransactions(blockNumber));
    }

    getBlockData();
  }, []);

  return (
    <View style={styles.container}>
      {blockData && (<SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <Bubble color="#FFA000">
            <Text style={styles.text}>Block number: {blockData.number}</Text>
          </Bubble>
          <Bubble color="#FFC107">
          <Text style={styles.text}>Gas used: {Math.round(Number(blockData.gasUsed) / 1000)}</Text>
          </Bubble>
          <Bubble color="#FFECB3">
          <Text style={styles.text}>Hash: {blockData.hash}</Text>
          </Bubble>
          <Bubble color="#FF9800">
          <Text style={styles.text}>Miner: {blockData.miner}</Text>
          </Bubble>
          <Bubble color="#FF5722">
          <Text style={styles.text}>Timestamp: {blockData.timestamp}</Text>
          </Bubble>
          <Bubble color="#FFCCBC">
          <Text style={styles.text}>Transactions:</Text>
          {blockData.transactions.map((tsx, i) => (
            <Text style={styles.list} key={i}>{tsx.hash}</Text>
          ))}
          </Bubble>
        </ScrollView>
      </SafeAreaView>)}
    </View>
  )
}

export default BlockDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '5%'
  },
  scrollView: {

  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: '5%'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  list: {
    marginVertical: '1%',
  }
});