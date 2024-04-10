import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
    },
    input: {
        marginTop: 10,
        backgroundColor: "rgba(0,0,0, 0.1)",
        padding: 10,
        borderRadius: 5,
    },
});

export default () => {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.label}> What is your name </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                keyboardType={'default'} // Cho phép nhập chữ
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                title="Hello Cac Ban"
                onPress={() => {
                    if (name === "") {
                        alert("Please enter your name.");
                    } else {
                        alert(`Hello ${name}!`);
                        setName("");
                    }
                }}
            />
        </View>
    );
};