import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";

function Profile(props) {
	const [Name,setName] = useState("Kyaw Kyaw");
	const [Password,setPassword] = useState("1234");
	const [Address,setAddress] = useState("Yangon");
	const [Phone,setPhone] = useState("0987878787");

	return (
		<View style={styles.container}>
			{/* <Text> Registration </Text> */}
			<Image style={styles.image} source={require("../../img/winkboy.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username" value={Name}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          secureTextEntry={false} value={Password}
        /> 			
      </View>

	  <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Address" value={Address}
        /> 			
      </View>

	  <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="PHONE" value={Phone}
        /> 			
      </View>
      {/* <TouchableOpacity style={styles.button} 
	  onPress={registerCLick}>
        <Text> Register </Text>
      </TouchableOpacity> */}
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
	  height: 150
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

export default Profile;
