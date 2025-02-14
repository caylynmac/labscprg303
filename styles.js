import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      backgroundColor: "#a9baed",
      alignItems: "center",
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
    title: {
      fontSize: 26,
      margin: 10,
      foneWeight: "bold",
    },
    listView: {
      viewDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      marginalVertival: 8,
    },
    locationCard: {
      backgroundColor: "#fff",
      borderRadius: 10,
      borderWidth: 1,
      padding: 10,
      margin: 10,
      width: "100%",
    },
});

