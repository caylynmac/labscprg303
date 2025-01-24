import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Mango() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/02/09/54/53/360_F_209545315_9iFm7lXcpwkAhYsHTw0gOJGzF0OTPsrO.jpg",
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
