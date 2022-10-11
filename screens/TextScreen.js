import { View, Text, StyleSheet } from "react-native";

export default TextScreen = ({ route }) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.title}>Welcome page Text</Text>
      <Text>{route.params.name} Pages</Text>
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
