import React, { useState, useEffect } from "react";
import { View, Button, Text, FlatList } from "react-native";
import { getTasks } from "../lib/supabase_crud";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import {styles} from "../styles";
import Checkbox from 'expo-checkbox';

type Task = {
  id: number;
  taskName: string;
  isChecked: boolean;
};

const Lab6 = () => {
    const [tasks, setTasks] = useState<any[] | null>(null);



    useEffect(() => {
    const getData = async () => {
      const data = await getTasks();
      setTasks(data);
      console.log(data);
    };
      getData();
    }
    , []);
    
    // const checkTask = (id: string) => {
    //   setTasks((prevTasks) =>
    //     prevTasks?.map((task) =>
    //       task.id.toString() === id ? { ...task, isChecked: !task.isChecked } : task
    //     ) || null
    //   );
    // };
      

  return (
    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", backgroundColor: "lightblue" }}>
      <Text style={styles.title}>Tasks</Text>
      {tasks ?
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Checkbox value={item.isChecked}  onValueChange={(newValue) => {
              const updatedTasks = tasks?.map(task => 
                task.id === item.id ? { ...task, isChecked: newValue } : task
              );
              setTasks(updatedTasks);
            }} />
            <Text style={{paddingLeft: 10}}>{item.taskName}</Text>
          </View>
        )}
        />
        : <Text>No tasks</Text>}
    </View>
  );
};


export default Lab6;