import { createDrawerNavigator } from '@react-navigation/drawer';
import List from '../Posts/List.js';
import Detail from '../Posts/Buylist.js';
import Form from '../Posts/Register.js';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="list" component={List} />
      <Drawer.Screen name="detail" component={Detail} />
<Drawer.Screen name="form" component={Form} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;