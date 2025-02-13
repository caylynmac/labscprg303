import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ButtonTemplate from '../components/button_template';
import FruitList from '../components/fruit';
import { Link, useRouter } from "expo-router";


export default function App() {
    return (
        <View style={styles.container}>
            <Text>Welcome to Lab 2!</Text>
            {/* <ButtonTemplate link={"/"} text={"Tabs"} color="green" /> */}
            {/* <FruitList/> */}
            <Link href={"/lab3"}>
                <Text style={styles.text}>Go to Lab 3</Text>
            </Link>
            <Link href={"/lab4"}>
                <Text style={styles.text}>Go to Lab 4</Text>
            </Link>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "blue",
      margin: 10,
    },
  });
