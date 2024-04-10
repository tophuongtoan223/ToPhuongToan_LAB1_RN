import {Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

const Exersise2 =()=>{
    const onPress = ()=>
    {
        Alert.alert("Hello")
    }
    return (
        <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button} onPress ={onPress}>
                <Text style={myStyle.textbutton}>
                    Nhấn vào đây
                </Text>
            </TouchableOpacity>
    </View>
    )
}
export default Exersise2;
const myStyle= StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
        },
        button:{
            width:100,
            border:2,
            backgroundColor: "red",
        },
        textbutton:{
            color:"black",
            fontWeight: "bold"
        }
    }
)