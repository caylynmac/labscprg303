import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import Increment from "../components/increment";
import Decrement from "../components/decrement";
import { styles } from "../styles";

const Lab3 = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <View style={styles.container}>
            <Text>Welcome to Lab 3!</Text>
            <Text>Count: {count}</Text>
            <Increment count={count} setCount={setCount}/>
            <Decrement count={count} setCount={setCount}/> 
        </View>
    )
};

export default Lab3;