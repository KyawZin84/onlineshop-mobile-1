import { createStackNavigator } from '@react-navigation/stack';
import List from '../Posts/List.js';
import BuyList from '../Posts/Buylist.js';
import Form from '../Posts/Register.js';

const Stack = createStackNavigator();

function MyListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="list2" component={List} options={{headerShown: false}}/>
      <Stack.Screen name="buylist" component={BuyList}/>
    </Stack.Navigator>
  );
}
export default MyListStack;
