import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import Decrement from "../components/decrement";
import Increment from "../components/increment";

export default function Lab3(){
    return (
        <View>
            <Text>Welcome to Lab 3!</Text>
            <Decrement/>
        </View>
    )
};