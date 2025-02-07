import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles.js";

interface ButtonTemplateProps {
  color?: string;
  width?: number;
  link: string;
  text: string;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  color,
  width,
  link,
  text,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, width: width }]}
      onPress={() => router.push(link)}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};


export default ButtonTemplate;
