import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ButtonTemplate from '../components/button_template';
import FruitList from '../components/fruit';
import Apple from './apple';
import Orange from './orange';
import Mango from './mango';


export default function App() {
    return (
        <View>
            <Text>Welcome to Lab 2!</Text>
            <ButtonTemplate link={"/"} text={"Tabs"} color="green" />
            <FruitList/>
            {/* <Apple/>
            <Orange/>
<<<<<<< Updated upstream
            <Mango/> */}
=======
            <Mango/>
>>>>>>> Stashed changes
        </View>
    )
}
