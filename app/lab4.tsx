import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../styles";
import vacationDestinations from "../constants/list_items";

const Lab4 = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handlePress = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList      
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.locationCard} onPress={() => handlePress(item.id)}>
            <Text>Location: {item.location} {selectedItems.includes(item.id) ? "\u2705" : ""}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Avg. Temp: {item.average_yearly_temperature}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Lab4;
