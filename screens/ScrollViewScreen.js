import { View, ScrollView, Text, StyleSheet } from "react-native";

export default ScrollViewScreen = () => {
  let posts = [];

  for (let i = 1; i <= 10; i++) {
    posts.push({
      title: `Title ${i}`,
      description: `Deskripsi untuk title ${i}`,
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {posts.map((post, index) => (
          <View style={styles.box} key={index}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  scroll: {
    backgroundColor: "#C2B8A3",
    padding: 10,
  },
  box: {
    backgroundColor: "#fef7dc",
    marginBottom: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
