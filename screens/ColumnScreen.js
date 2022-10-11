import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default ColumnScreen = ({ route }) => {
  const [style1, setStyle1] = useState(true);
  const [style2, setStyle2] = useState();
  const [style3, setStyle3] = useState();

  const handleStyle = (text) => {
    if (text === "style1") {
      setStyle1(true);
      setStyle2(false);
      setStyle3(false);
    } else if (text === "style2") {
      setStyle1(false);
      setStyle2(true);
      setStyle3(false);
    } else if (text === "style3") {
      setStyle1(false);
      setStyle2(false);
      setStyle3(true);
    }
  };

  const ViewStyle1 = () =>
    style1 ? (
      <View style={styles.container}>
        <View style={styles.Style1Box1} />
        <View style={styles.Style1Box2} />
        <View style={styles.Style1Box3} />
      </View>
    ) : (
      ""
    );
  const ViewStyle2 = () =>
    style2 ? (
      <View style={styles.container}>
        <View style={styles.Style2Box1} />
        <View style={styles.Style2Box2} />
        <View style={styles.Style2Box3} />
      </View>
    ) : (
      ""
    );

  const ViewStyle3 = () =>
    style3 ? (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.Style3Box1} />
        <View style={styles.Style3Box2} />
        <View style={styles.Style3Box3} />
      </View>
    ) : (
      ""
    );

  return (
    <View style={styles.container}>
      <Text>Welcome page Column</Text>
      <Text>{route.params.name}</Text>
      <View style={styles.MarginTop} />
      <View style={styles.rowButton}>
        <View style={styles.viewButton}>
          <Button title="Style 1" color="#a500ff" onPress={() => handleStyle("style1")} />
        </View>
        <View style={styles.viewButton}>
          <Button title="Style 2" color="#a500ff" onPress={() => handleStyle("style2")} />
        </View>
        <View style={styles.viewButton}>
          <Button title="Style 3" color="#a500ff" onPress={() => handleStyle("style3")} />
        </View>
      </View>
      <View style={styles.MarginTop} />
      <ViewStyle1 />
      <ViewStyle2 />
      <ViewStyle3 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MarginTop: {
    marginTop: 15,
  },
  rowButton: {
    display: "flex",
    flexDirection: "row",
  },
  viewButton: {
    flex: 1,
    marginRight: 5,
  },
  Style1Box1: {
    flex: 1,
    backgroundColor: "#a500ff",
  },
  Style1Box2: {
    flex: 1,
    backgroundColor: "#00f2ff",
  },
  Style1Box3: {
    flex: 1,
    backgroundColor: "#ffe900",
  },

  Style2Box1: {
    flex: 1,
    backgroundColor: "#a500ff",
  },
  Style2Box2: {
    flex: 2,
    backgroundColor: "#00f2ff",
  },

  Style2Box3: {
    flex: 3,
    backgroundColor: "#ffe900",
  },

  Style3Box1: {
    flex: 1,
    backgroundColor: "#a500ff",
  },
  Style3Box2: {
    flex: 2,
    backgroundColor: "#00f2ff",
  },
  Style3Box3: {
    flex: 3,
    backgroundColor: "#ffe900",
  },
});
