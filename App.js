import HomeScreen from './components/HomeScreen';
import ImageScreen from './components/ImageScreen';
import InfoScreen from './components/InfoScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Image: {screen: ImageScreen},
  Info: {screen: InfoScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
