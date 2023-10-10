import React, { Component } from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';

class Footer extends Component {
	state = {
		name: 'Aung Aung'

	}

    logConsole() {
		Alert.alert('you typed in footer ...');
	}

	setName = name => {
		this.setState({name});
	}

	showName = () => {
		Alert.alert("You typed " + this.state.name);
	}

	render() {
		return (
			<View>
				<Text> { this.props.address } </Text>
                <TextInput onChangeText={ this.logConsole } />
				<TextInput onChangeText={ this.setName } style={{ backgroundColor: 'orange'}}/>
			<Button onPress={ this.showName } title="Click Me"/>

			</View>
		);
	}
}
export default Footer;
