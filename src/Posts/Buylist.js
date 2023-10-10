import React,{useEffect, useState} from 'react';
import {StyleSheet,Text, TextInput, View, Button, FlatList,TouchableOpacity, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';

function BuyList(props) {
    // const buylist = props.route.params.buylist;
    const [buylist,setbuylist] = useState([])
    const [refresh,setrefresh] = useState(false)
    useEffect(()=>{
        props.navigation.setOptions({
                title: "Cart Product List",
                headerStyle: {
                   backgroundColor: 'orange'
              }
              });
              setbuylist(props.route.params.buylist)
    })
     const RemoveClick = (index)=> {
        buylist.splice(index,1);
        props.route.params.Remove(index,1)
        setbuylist(buylist)
        onrefresh()
        console.log(buylist)
     }

     const onrefresh = () => {
        setrefresh(true)
        setTimeout(()=>{
            setrefresh(false)
    },100)
     }

     const orderCLick = () => {
        Alert.alert("ok")
        console.log(buylist)
     }
     
	return (
		<View>
            <FlatList 
            data={buylist}
            renderItem={({item, index}) => (
                <View style={{backgroundColor:"white",margin:5,flexDirection:"row"}}>
                    <Text style={{fontSize:20, fontWeight:'bold',padding:20}}>
                        {item.name}
                    </Text>
                    <Text onPress={()=>RemoveClick(index)} style={{paddingTop:20}}>
                        <Icons name="circle-with-cross" color="red" size={30}/>
                    </Text>
                </View>
            )}
            onRefresh={onrefresh}
            refreshing={refresh}

            />
            <TouchableOpacity style={styles.button} onPress={orderCLick}>
                <Text style={{fontSize:20,color:"white"}}> Order </Text>
            </TouchableOpacity>
		</View>
	);
}

 const styles = StyleSheet.create({
    button: {
        width: "50%",
	    height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginLeft:"25%",
        backgroundColor: "#12ded4",
      },
 })

export default BuyList;
