import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import SearchQueryScreen from '../screens/SearchQueryScreen';
import SearchedNewsScreen from '../screens/SearchedNewsScreen';

const MainNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Search: SearchQueryScreen,
    SearchedNews: SearchedNewsScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(MainNavigator);
