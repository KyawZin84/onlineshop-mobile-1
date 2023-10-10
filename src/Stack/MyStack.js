import { createStackNavigator } from '@react-navigation/stack';
import List from '../Posts/List.js';
import Detail from '../Posts/Buylist.js';
import Form from '../Posts/Register.js';
import MyBottomTab from './MyBottomTab.js';
import Login from '../Components/Login.js';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="bottom" component={MyBottomTab} options={{headerShown: false,}} />
      <Stack.Screen name="register" component={Form} />
    </Stack.Navigator>
  );
}
export default MyStack;
