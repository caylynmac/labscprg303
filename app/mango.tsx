import React from "react";
import { View, Image, StyleSheet } from "react-native";

<<<<<<< Updated upstream
export default function Mango() {
=======
export default function Apple() {
>>>>>>> Stashed changes
  return (
    <View style={styles.container}>
      <Image
        source={{
<<<<<<< Updated upstream
          uri: "https://t4.ftcdn.net/jpg/02/09/54/53/360_F_209545315_9iFm7lXcpwkAhYsHTw0gOJGzF0OTPsrO.jpg",
=======
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjbnH_F43IzHhH--zuJQoR3i1TNfrRJ-jEQ&s",
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
});
=======
});
>>>>>>> Stashed changes
