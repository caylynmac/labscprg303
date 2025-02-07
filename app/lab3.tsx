import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import Increment from "../components/increment";
import Decrement from "../components/decrement";

const Lab3 = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            <Text>Welcome to Lab 3!</Text>
            <Text>Count: {count}</Text>
            <Increment count={count} setCount={setCount}/>
            <Decrement count={count} setCount={setCount}/> 
        </View>
    )
};

export default Lab3;