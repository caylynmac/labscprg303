import {useState} from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

    type CountProps = {
        count: number;
        setCount: (count: number) => void;
    };

    const Decrement: React.FC<CountProps> = ({count, setCount}) => {

        const handleDecrement = () => {
            setDecrement(count - 1);
        };
    }

