import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={require("./assets/character/walk.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  image: {},
});
