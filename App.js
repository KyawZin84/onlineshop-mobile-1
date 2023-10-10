// import { StyleSheet, Text, View,Alert } from 'react-native';
// import { Header } from './src/Components/Header';
// import Footer from './src/Components/Footer';
// import List from './src/Posts/List';

// function showTesting() {
//   Alert.alert('you click testing !');
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Header message="header page" name="testing" popup={ showTesting } />
//         <Text> main page </Text>
//       <Footer address="yangon" /> */}
//       <List />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 100,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import MyStack from './src/Stack/MyStack'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MyDrawer from './src/Stack/MyDrawer';
import MyBottomTab from './src/Stack/MyBottomTab';


function App(){
	return(
		<NavigationContainer>
      <MyStack/>
		</NavigationContainer>
	)
}

export default App;
