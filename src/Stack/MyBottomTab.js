import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyListStack from './MyListStack.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Logout from '../Components/Logout.js';
import Profile from '../Posts/Profile.js';


const Tab = createBottomTabNavigator();

function MyBottomTab() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="list" component={MyListStack} options={{headerShown: false,tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart" color={color} size={size} />),}}/>

      <Tab.Screen name="profile" component={Profile} options={{tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />),}}/>

      <Tab.Screen name="logout" component={Logout} options={{tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="logout" color={color} size={size} />),}}/>
    </Tab.Navigator>
  );
}

export default MyBottomTab