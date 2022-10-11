import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default TextInputScreen = ({ route }) => {
  const [input, setInput] = useState("");

  return (
    <View styles={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder="Masukkan teks disini"
        onChangeText={(text) => {
          setInput(text);
        }}
        defaultValue={input}
      />

      <Text style={styles.text}>{input}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C68b59",
    padding: 25,
  },
  content: {
    alignItems: "center",
  },
  rowButton: {
    flexDirection: "row",
    margin: 10,
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  text: {
    padding: 10,
    fontSize: 25,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#a500ff",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
