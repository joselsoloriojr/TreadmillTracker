import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Input, Button } from "react-native-elements";
export default class EntryScreen extends Component {
  state = {
    //using state as Run
    time: "",
    distance: "",
    incline: "",
    calories: "",
    speed: "",
  };

  handleSubmit = async () => {
    try {
      let count = await AsyncStorage.getItem("count") || "0"
      let runs = await AsyncStorage.getItem("Runs") || "[]";
      runs = JSON.parse(runs);
      await AsyncStorage.setItem("count", JSON.stringify(0));
      await AsyncStorage.setItem("Runs", JSON.stringify([...runs, this.state]));
    } catch (error) {
      console.log("Error saving run: ", error);
    }
  };

  onChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Input // Speed Input
            label="Speed"
            onChangeText={(val) => this.onChange("speed", val)}
          />
          <Input // Incline Input
            label="Incline"
            onChangeText={(val) => this.onChange("incline", val)}
          />
          <Input // Time Input
            label="Time"
          />
          <Input // Distance Input
            label="Distance"
          />
          <Input // Calories Input
            label="Calories"
          />
          <Button
            title="Submit"
            containerStyle={{ width: "80%" }}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
});
