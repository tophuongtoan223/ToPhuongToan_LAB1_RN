import React, {UseState, useState} from "react";
import { Text,Button, View, StyleSheet } from "react-native";

export default () =>{
    const [pressCount, setPressCount] = useState(0);

    return(
        <View style={{ alignItems:"center", marginTop:20 }}>
            <Text>You're pressCount the Button: {pressCount} time(s) </Text>
            <Button
                title={`Presssed ${pressCount} time(s)`}
                onPress={()=>setPressCount(pressCount+1)}
            />
            </View>
    );
};
const styles = StyleSheet.create({
    button: {
      color: "white",
      backgroundColor: "organe",
      fontWeight: "bold",
    },
  });