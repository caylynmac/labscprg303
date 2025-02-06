import {useState} from "react";
import { StyleSheet } from "react-native";

export default function Increment() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div style={styles.button}>
            <button onClick={() => increment}>Increment</button>
        </div>
    );
}

const styles = StyleSheet.create({
    decrement: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 10,
    },
    text: {
        color: "blue",
        margin: 10,
    },
    button: {
        backgroundColor: "blue",
        color: "white",
        padding: 10,
        margin: 10,
    },
});
