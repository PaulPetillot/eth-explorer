import React from 'react';
import "react-native-get-random-values"
import "@ethersproject/shims"
import { REACT_APP_ALCHEMY_API_KEY } from '@env'
import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const initialCounterState = {
  alchemy
};

const alchemyContextWrapper = () => ({
  ...initialCounterState,
});

export const AlchemyContext = React.createContext(alchemyContextWrapper());

const AlchemyProvider = (props) => {
  return (
    <AlchemyContext.Provider value={alchemyContextWrapper()}>
      {props.children}
    </AlchemyContext.Provider>
  );
}

export default AlchemyProvider;