import {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

    type CountProps = {
        count: number;
        setCount: (count: number) => void;
    };

    const Decrement: React.FC<CountProps> = ({
        count, 
        setCount
    }) => {    
        const handleDecrement = () => {
            setCount(count - 1);
        };
    
    return (
        <View>
            <TouchableOpacity style={styles.decrement} onPress={handleDecrement}>
                <Text>Decrement -</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Decrement;
