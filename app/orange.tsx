import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Orange() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/02/20/02/41/360_F_220024121_lvQqND2X6YcINIlgNwTXcwC5Ws6no0RQ.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200, // Set dimensions for the image
    resizeMode: "cover", // Adjusts how the image fits in its container
  },
});
