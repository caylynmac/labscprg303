import React from 'react';
import { StyleSheet , Text, View, TouchableOpacity, FlatList } from 'react-native';

const FruitList: React.FC = () => {
    const fruits = ['Apple', 'orange', 'mango'];

    return (
        <View style={{padding: 10, backgroundColor: 'lightgreen', justifyContent: 'center', height: '100%', 
        alignItems: 'center', flex: 1, flexDirection: 'column', rowGap: 10, }}>
            <Text>Fruit List</Text>
            <FlatList 
        data={[
          {key: fruits[0]},
            {key: fruits[1]},
            {key: fruits[2]},
        ]}
        renderItem={({item}) => <Text style={{padding: 10,}}>{item.key}</Text>}
      />
        </View>
    );
};

export default FruitList;