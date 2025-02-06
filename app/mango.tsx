import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Mango() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjbnH_F43IzHhH--zuJQoR3i1TNfrRJ-jEQ&s",
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
