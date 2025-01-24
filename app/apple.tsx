import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Apple() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg",
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
    height: 200,
    resizeMode: "cover", 
  },
});
