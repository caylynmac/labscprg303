import {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

    type CountProps = {
        count: number;
        setCount: (count: number) => void;
    };

    const Increment: React.FC<CountProps> = ({
        count, 
        setCount
    }) => {    
        const handleIncrement = () => {
            setCount(count + 1);
        };
    
    return (
        <View >
            <TouchableOpacity style={styles.increment} onPress={handleIncrement}>
                <Text>Increment +</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Increment;