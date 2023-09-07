import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Navigation/Home';
import Login from './src/Navigation/Login';
import SignUP from './src/Navigation/SignUp';
import Cities from './src/Navigation/Cities';


const App_page = createStackNavigator(

  {
    Home:Home,
    SignUP:SignUP,
    Cities_Page:Cities,
    
    Login: Login

  },
  {
    headerMode:"none"
  }
  
)
export default createAppContainer(
  createSwitchNavigator(
    {
      stack1: App_page,

    }
  )
)