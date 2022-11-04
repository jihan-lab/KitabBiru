import {NavigationContainer} from '@react-navigation/native';
import {Splash} from './pages';
import Router from './Router';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

export default App;
