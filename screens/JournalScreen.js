import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Card, Button } from "react-native-elements";

class Run extends Component {
  render() {
    const { run, del, index } = this.props;
    console.log("Index:", index)
    return (
      <Card containerStyle={{width: "80%"}}>
        <Text>Speed: {run.speed}</Text>
        <Text>Incline: {run.incline}</Text>
        <Button containerStyle={{width: "20%"}} title="Del"/>
      </Card>
    );
  }
}

export default class JournalScreen extends Component {
  state = {
    runs: [],
  };

  handleDelete = (index) => {
    console.log("Deleting element at index: ", index)
  }

  retrieveRuns = async () => {
    try {
      let count = await AsyncStorage.getItem("count") || "0"
      count = JSON.parse(count)
      let response = await AsyncStorage.getItem("Runs") || [];
      let runs = JSON.parse(response)
      this.setState({ runs });
    } catch (error) {
      console.log("Error retrieving runs: ", error);
    }
  };
  
  componentDidMount(){
    this.retrieveRuns()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Refresh"
          onPress={this.retrieveRuns} 
        />
        {this.state.runs.map((run, index) => (
          <Run index={index} key={index} run={run} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
