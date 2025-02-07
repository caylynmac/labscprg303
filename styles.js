import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
      },
    increment: {
      backgroundColor: "green",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      margin: 10,
    },
    decrement: {
      backgroundColor: "red",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      margin: 10,
    },
});

