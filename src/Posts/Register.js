import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";

function Form(props) {
	const [Name,setName] = useState("");
	const [Password,setPassword] = useState("");
	const [Address,setAddress] = useState("");
	const [Phone,setPhone] = useState("");

	const registerCLick = () => {
		if(Name == ""|| Password == "" || Address == "" || Phone == "" ){
			Alert.alert("PLease Fill all Info !")
		}else{
			props.navigation.navigate('login');
			clear();
		}
	}

	const clear = () => {
		setName("");
		setPassword("");
		setAddress("");
		setPhone("");
	}

	return (
		<View style={styles.container}>
			{/* <Text> Registration </Text> */}
			<Image style={styles.image} source={require("../../assets/icon-register.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username" value={Name}
          onChangeText={(name) => setName(name)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          secureTextEntry={true} value={Password}
          onChangeText={(pw) => setPassword(pw)}
        /> 			
      </View>

	  <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Address" value={Address}
          onChangeText={(ad) => setAddress(ad)}
        /> 			
      </View>

	  <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="PHONE" value={Phone}
          onChangeText={(ph) => setPhone(ph)}
        /> 			
      </View>
      <TouchableOpacity style={styles.button} 
	  onPress={registerCLick}>
        <Text> Register </Text>
      </TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#fff",
	  alignItems: "center",
	  justifyContent: "center",
	},
   
	image: {
	  marginBottom: 30,
	  width: 200,
	  height: 200
	},
   
	inputView: {
	  backgroundColor: "#cfd3e6",
	  borderRadius: 30,
	  width: "70%",
	  height: 45,
	  marginBottom: 20,
	},
   
	inputText: {
	  height: 50,
	  padding: 10,
	  marginLeft: 20,
	},
   
	button: {
	  width: "50%",
	  height: 50,
	  alignItems: "center",
	  justifyContent: "center",
	  marginTop: 30,
	  backgroundColor: "#12ded4",
	},
  });

export default Form;
