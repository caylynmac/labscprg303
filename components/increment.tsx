import {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

    type CountProps = {
        count: number;
        setCount: (count: number) => void;
    };

    const Increment: React.FC<CountProps> = ({
        count, 
        setCount
    }) => {    
        const handleIncrement = () => {
            setCount(count - 1);
        };
    
    return (
        <TouchableOpacity onPress={handleIncrement}>
            <Text>Increment +</Text>
        </TouchableOpacity>
    );
};

export default Increment;