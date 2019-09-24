import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import SearchQueryScreen from '../screens/SearchQueryScreen';

const MainNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Search: SearchQueryScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(MainNavigator);
