import Increment from "./increment";
import Decrement from "./decrement";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Lab3(){

    return (
        <View>
            <Increment/>
            <Decrement/>
        </View>
    );
}
