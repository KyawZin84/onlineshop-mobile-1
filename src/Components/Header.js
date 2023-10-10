import React,{ useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

function Header(props) {
	const [name, setName] = useState('Aung Aung');
	return (
		<View>
			<Text> { props.message } </Text>
			<Text onPress={ props.popup }> Our { props.name } page </Text>
			<TextInput onChangeText={(name) => setName(name)}
				style={{ backgroundColor: 'gray'}}/>
				<Button onPress={() => alert("You typed" + name)} title="Click Me"/>
		</View>
	);
}

export { Header };
