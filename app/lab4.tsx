import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../styles";
import vacationDestinations from "../constants/list_items";

// const handlePress

const Lab4 = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
        <FlatList
            data={vacationDestinations}
            renderItem={({ item }) => (
                <Pressable onPress={() => <Text>{"\u2705"}</Text> }>
                    <Text>Location: {item.location}</Text>
                    <Text>Price: ${item.price}</Text>
                    <Text>Avg. Temp: {item.average_yearly_temperature}</Text>
                </Pressable>
          )}
        />
      </View>
    );
  };

export default Lab4;