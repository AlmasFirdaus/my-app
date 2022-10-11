import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default ProfileScreen = ({ route }) => {
  return (
    <View>
      <Text>Some Text</Text>
      <View style={styles.container}>
        <Text>Some more text</Text>
        <Image source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }} style={{ width: 200, height: 200 }} />
        <StatusBar style="auto" />
      </View>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 10, padding: 10 }} placeholder="You can type in me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  MarginTop: {
    marginTop: 15,
  },
  rowButton: {
    display: "flex",
    flexDirection: "row",
  },
});
