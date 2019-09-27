import HomeScreen from './components/HomeScreen';
import ImageScreen from './components/ImageScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Image: {screen: ImageScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
