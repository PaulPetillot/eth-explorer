import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { AlchemyContext } from '../../context/Alchemy'
import { StyleSheet } from 'react-native'
import Block from '../../components/Block/Block'
import Bubble from '../../components/Bubble/Bubble'

const HomeScreen = ({ navigation }) => {
  const { alchemy } = React.useContext(AlchemyContext);


  const [blockData, setBlockData] = useState();

  useEffect(() => {
    async function getBlockData() {
      setBlockData(await alchemy.core.getBlock());
    }

    getBlockData();
  }, []);

  return (
    <View style={styles.container}>
      <Bubble color='#FFEB3B'>
        <Text style={styles.header}>Latest block:</Text>
      {blockData && <Block navigation={navigation} blockData={blockData} />}
      </Bubble>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '5%'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: '5%'
  },
});