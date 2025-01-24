import React from 'react';
import { StyleSheet , Text, View, TouchableOpacity, FlatList } from 'react-native';

const FruitList: React.FC = () => {
    const fruits = ['Apple', 'orange', 'mango'];

    return (
        <View>
            <Text>Fruit List</Text>
            <FlatList
        data={[
          {key: fruits[0]},
            {key: fruits[1]},
            {key: fruits[2]},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
        </View>
    );
};

export default FruitList;