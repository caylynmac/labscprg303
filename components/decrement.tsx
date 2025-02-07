import {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

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
        <TouchableOpacity onPress={handleDecrement}>
            <Text>Decrement -</Text>
        </TouchableOpacity>
    );
};

export default Decrement;
