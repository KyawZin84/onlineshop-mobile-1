import React,{useState} from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
 
function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState();

    const LoginClick = ()=> {
        console.log("in")
        if(name == "Kyaw kyaw" && password == 1234){
            console.log("ok")
            props.navigation.navigate('bottom');
        }else{
            Alert.alert("Username or Password is Wrong! ")
        }
    }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icon.png")} />
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          onChangeText={(name) => setName(name)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(pw) => setPassword(pw)}
        /> 			

      </View>
 
      <TouchableOpacity onPress={()=>props.navigation.navigate('register')}>
        <Text style={styles.signup}> Create New Account ?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.login} onPress={LoginClick}>
        <Text> Login </Text>
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
    marginBottom: 40,
    width: 100,
    height: 100
  },
 
  inputView: {
    backgroundColor: "#FFC7A1",
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
 
  signup: {
    height: 20,
    marginBottom: 20,
  },
 
  login: {
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF7D26",
  },
});
export default Login;
