import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ButtonTemplate from "..//components/button_template";

export default function App() {
    return (
        <View>
            <Text>Welcome to Lab 2!</Text>
            <ButtonTemplate link={"/"} text={"Tabs"} color="green" />
        </View>
    )
}
