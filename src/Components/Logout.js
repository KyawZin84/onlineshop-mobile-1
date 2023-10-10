import React,{useEffect, useState} from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
 
function Logout(props) {
    useEffect(()=>{
        props.navigation.navigate('login');
    })
}
 
export default Logout;
