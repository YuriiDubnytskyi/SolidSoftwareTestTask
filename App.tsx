import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const App = () => {
  const [background, setBackground] = useState("#FFFFFF");

  const generateRandomColor = useCallback(() => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBackground(randomColor);
  }, []);

  const resetColor = useCallback(() => {
    setBackground("#FFFFFF");
  }, []);

  return (
    <TouchableWithoutFeedback onPress={generateRandomColor}>
      <View style={[styles.wrapper, { backgroundColor: background }]}>
        <View style={styles.container}>
          <Text>Hello there</Text>
          <Text>Background is {background}</Text>
          <View style={styles.button}>
            <Button title="Reset" onPress={resetColor} color={"purple"} />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  container: {
    height: 150,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
  },
});
