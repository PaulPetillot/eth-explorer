import { NavigationContainer } from '@react-navigation/native';
import Router from "./Router";
import AlchemyProvider from "./context/Alchemy";

export default function App() {
  return (
    <AlchemyProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AlchemyProvider>
  );
}



