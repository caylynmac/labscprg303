import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
      //    default        {  not default  }
import vacation_location, { vacation_price } from './app/vacations';

export default function App() {

  // object constructor
  type Person = {
    name: string;
    age: number;
    occupation: string;
    isEmployed: boolean;
    hobbies: (string | number)[]; 
    address: {street: string, city: string, prov: string}; 
    vacation_location?: string;
    vacation_location_value?: string;
  };

  const name: string = "Nick";
  let occupation: string = "Software Development";
  let age: number = 30;
  let isEmployed: boolean = true;
  const hobbies: (string | number)[] = ["Reading", "Coding", "Traveling", 4];
  const address: {street: string, city: string, prov: string} = {
  street: "123 Street",
  city: "Calgary", 
  prov: "AB" 
  };
  let vacation_location: string = "Paris";
  let vacation_location_value: number = 500

  // creates Person obj using above variables
  const person1: Person = {
    name,
    age, 
    occupation,
    isEmployed,
    hobbies, 
    address,
    vacation_location,
  };

// creates Person obj using defined variables below
  const person2: Person = {
    name: "John Doe",
    age: 25, 
    occupation: "Student",
    isEmployed: false,
    hobbies: ["Rock Climbing"], 
    address: {street: "321 Road", city: "London", prov: "EN"}
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to my App</Text>
      </View>
      <View >
        <Text style={styles.text}>Hello {person2.name}, you have booked a vacation to {person2.vacation_location}. The price is {person2.vacation_location_value}</Text>
      </View>
      <View >
        <TouchableOpacity onPress = {() => {alert ("Weekend is awesome")}} >
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: "blue",
    fontSize: 16
  },
  button: {
    fontSize: 48,
    fontWeight: 'bold',
    borderColor: "Black",
    borderWidth: 2,
    backgroundColor: "green",
    padding: 5,
  },
});
