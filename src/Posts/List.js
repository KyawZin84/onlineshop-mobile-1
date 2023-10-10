import React, { useState } from 'react';
import {StyleSheet,Text, View, FlatList, Button, Alert,Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function List(props) {
    const [N,setN] = useState(0);
    const [buylist,setbuylist] = useState([]);

    const Products = [  
        {id:1,name:"Yarthetpan Soybean oil(450 ml)",img:require("../../img/p1.jpg"),price:3250,type:"cooking oil"},
        {id:2,name:"Ovaltine 400gm Bot",img:require("../../img/p2.jpg"),price:11500,type:"drink"},
        {id:3,name:"Ensure Gold Powder",img:require("../../img/p3.jpg"),price:9200,type:"drink"},
        {id:4,name:"Premier 3in1 Instant Coffee 18g",img:require("../../img/p4.jpg"),price:7750,type:"drink"},
        {id:5,name:"BOSS Hero Permanent Marker 1C",img:require("../../img/p5.jpg"),price:10000,type:"marker"},
        {id:6,name:"Ah May Htwar Pure Peanut Oil 2Ltr",img:require("../../img/p6.jpg"),price:19500,type:"cooking oil"},
        {id:7,name:"Uni Paint Marker Pen",img:require("../../img/p7.jpg"),price:6500,type:"marker"},
        {id:8,name:"Ariel Detergent Powder 400g/360g",img:require("../../img/p8.jpg"),price:2600,type:"cleaning product"},
        {id:9,name:"Super Clean ( chlorine )",img:require("../../img/p9.jpg"),price:2300,type:"cleaning product"},
]
    
       const BuyClick = (id) => {
        const result = Products.find((product)=>{
            return product.id == id
        })
        Alert.alert("you Buy " + result.name )
        buylist.push(result);
        setN(buylist.length);
    }

    const RemoveClick = (id,n) => {
        buylist.splice(id,n);
        setN(buylist.length);
    }

    const CartClick = () => {
        props.navigation.navigate('buylist',{"buylist":buylist,"Remove":(e)=> RemoveClick(e)})
    }

     return (
	<View>
        <View style={{flexDirection:'row', flexWrap:'wrap',backgroundColor:"white",marginTop:50,padding:10}}>
        <Text style={{fontSize:30,color:"orange"}}>Company Name</Text>
        <Text style={{marginLeft:100}} onPress={CartClick}>
            <View style={{position:"relative"}}>
            <Image style={{width: 50,height:50}} source={require("../../img/cart.png")}  /> 
            <Text style={styles.cartnumber}>{N}</Text>
            </View>
        </Text>
        </View>

            <FlatList style={{marginBottom:100}}  
            numColumns={2}
                data={Products}
                renderItem={({item}) => (
                    <View style={{width: 150,height:200,backgroundColor:"skyblue",margin:20 }}>
                        <Image style={{width: 150,height:130}} source={item.img}  /> 
                        <Text>{item.name}</Text>
                        <Text>{item.price} Ks</Text>

                        {buylist.find((product)=>{return product.id == item.id}) ?
                        <Button style={{ width: 100,height:50 }} variant="primary" title="Remove From Cart"
                        onPress={() => RemoveClick(buylist.indexOf(item),1)}/>
                        :<Button style={{ width: 100,height:50 }} variant="primary" title="Add to Cart"
                        onPress={() => BuyClick(item.id)}/>
                         }
                    </View>
                )}
            />
          </View>
      );
      }

      const styles = StyleSheet.create({
        cartnumber : { backgroundColor:"blue",
                        color:"white",
                        position:"absolute",
                        padding:5,
                        fontSize:15,
                        top:20,
                        right:20,
                        borderRadius:10
                    }
      })
export default List;
