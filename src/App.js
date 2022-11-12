import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Router from './Router';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
