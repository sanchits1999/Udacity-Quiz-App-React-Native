import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

class QuizCard extends Component {
  state = {
    showAns: false
  };

  toggle = () => {
    this.setState({ showAns: !this.state.showAns })
  };

  render() {
    const { showAns } = this.state;
    const { card } = this.props;

    return (
      <View style={{ width: "95%", backgroundColor: "#ffffff", elevation: 5, marginTop: 20, justifyContent: "center", height: "40%" }}>
        <View>
          {!this.state.showAns ? (
            <Text style={{ fontSize: 26, fontWeight: "500", marginHorizontal: 20, textAlign: "center", color: "#000000" }}>{card.question}</Text>
          ) : (
              <Text style={{ fontSize: 26, fontWeight: "500", marginHorizontal: 20, textAlign: "center", color: "#000000" }}>{card.answer}</Text>
            )}
        </View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={this.toggle}>
            {!showAns ? <Text style={{ color: "red" }}>Show Answer</Text> : <Text style={{ color: "red" }}>Show Question</Text>}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default QuizCard;
