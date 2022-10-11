import { StyleSheet, Text, View, Button } from "react-native";

export default HomeScreen = ({ navigation }) => {
  const handleProfile = () => {
    navigation.navigate("ProfileScreen", { name: "Hello Almas" });
  };

  const handleColumn = () => {
    navigation.navigate("ColumnScreen", { name: "Hello Column" });
  };

  const handleText = () => {
    navigation.navigate("TextScreen", { name: "Hello Text" });
  };

  const handleTextInput = () => {
    navigation.navigate("TextInputScreen", { name: "Hello Text Input" });
  };
  const handleScrollView = () => {
    navigation.navigate("ScrollViewScreen");
  };
  const handleListView = () => {
    navigation.navigate("ListViewScreen");
  };

  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  return (
    <View style={styles.container}>
      <Text>Home </Text>
      <Text>Hello World </Text>
      <View style={styles.MarginTop} />
      <View style={styles.rowButton}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Button title="Profile" onPress={() => handleProfile()} />
        </View>
        <View style={styles.MarginTop} />
        <View style={{ flex: 1 }}>
          <Button title="Column" onPress={() => handleColumn()} />
        </View>
        <View style={styles.MarginTop} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Button title="Text" onPress={() => handleText()} />
        </View>
      </View>
      <MarginTop />
      <View style={styles.rowButton}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Button title="Text Input" onPress={() => handleTextInput()} />
        </View>
        <View style={styles.MarginTop} />
        <View style={{ flex: 1 }}>
          <Button title="Scroll View" onPress={() => handleScrollView()} />
        </View>
        <View style={styles.MarginTop} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Button title="List View" onPress={() => handleListView()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 10,
  },
});
