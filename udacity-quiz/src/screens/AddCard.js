import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View , TextInput , TouchableOpacity } from "react-native";
import { handlecreateCard } from "../actions/card";

class AddCard extends Component {
  static navigationOptions = () => ({
    headerTitleAlign: 'center',
    title: "Add Card"
  });

  state = {
    question: "",
    answer: ""
  };

  handleinput1Change = (val) => {
    this.setState({ question: val })
  }
  handleinput2Change = (val) => {
    this.setState({ answer: val })
  }

  handleSubmit = () => {

    const { question, answer } = this.state;
    if (question.trim().length === 0 || answer.trim().length === 0) {
      return alert("Please Enter Complete Details.")
    }

    const deckId = this.props.navigation.getParam("deckId");

    this.props.dispatch(handlecreateCard(deckId, question + "?", answer));

    this.props.navigation.goBack();
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ width: "90%", height: 50, backgroundColor: "#ffffff", marginTop: 50, borderWidth: 0.5, borderColor: "#000000", paddingHorizontal: 10 }}>
          <TextInput placeholder="Question" placeholderTextColor="#828282" value={question} onChangeText={this.handleinput1Change}
            style={{ height: "100%", width: "100%", fontSize: 18 }} maxLength={25} />
        </View>
        <View style={{ width: "90%", height: 50, backgroundColor: "#ffffff", marginTop: 20, borderWidth: 0.5, borderColor: "#000000", paddingHorizontal: 10 }}>
          <TextInput placeholder="Answer" placeholderTextColor="#828282" value={answer} onChangeText={this.handleinput2Change}
            style={{ height: "100%", width: "100%", fontSize: 18 }} maxLength={25} />
        </View>
        {false ? <Text style={{ fontSize: 12, width: "90%", color: "red", paddingLeft: 10, marginTop: 5 }}>Error</Text> : null}
        <TouchableOpacity onPress={this.handleSubmit}
          style={{ marginTop: "auto", marginBottom: 100, borderRadius: 5 }}>
          <View style={{ backgroundColor: "#000000", borderRadius: 5 }}>
            <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#ffffff", marginHorizontal: 40, marginVertical: 10 }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddCard);
