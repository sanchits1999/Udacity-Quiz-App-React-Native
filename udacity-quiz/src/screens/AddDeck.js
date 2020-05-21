import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation"
import { handleAddDeck } from "../actions/decks";
import { getId } from "../utils/IdGenerator";

class AddDeck extends Component {
  state = {
    input: ""
  };

  handleInputChange = input => {
    this.setState(() => ({
      input
    }));
  };

  handleSubmit = () => {

    if (this.state.input.trim().length === 0) {
      return alert("Please Enter a Name of your deck.")
    }

    const deck = {
      id: getId(),
      name: this.state.input,
      cards: []
    }

    this.props.dispatch(handleAddDeck(deck)).then(() => {
      this.setState({ input: "" })
      this.props.navigation.navigate("DeckDetail", {
        deckId: deck.id,
        name: deck.name
      });
    })
  }

  render() {
    const { input } = this.state;
    return (
      <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontWeight: "700", fontSize: 24, letterSpacing: 1.2, marginHorizontal: 20, textAlign: "center", marginTop: 40 }}>What is the title of your new deck?</Text>
        <View style={{ width: "90%", height: 50, backgroundColor: "#ffffff", marginTop: 40, borderWidth: 0.5, borderColor: "#000000", paddingHorizontal: 10 }}>
          <TextInput placeholder="Deck Name" placeholderTextColor="#828282" value={input} onChangeText={this.handleInputChange}
            style={{ height: "100%", width: "100%", fontSize: 20 }} maxLength={25} />
        </View>
        <TouchableOpacity onPress={this.handleSubmit}
          style={{ borderColor: "#000000", borderWidth: 1, marginTop: "auto", marginBottom: 50, borderRadius: 5 }}>
          <View style={{ backgroundColor: "#000000" }}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#ffffff", marginHorizontal: 20, marginVertical: 10 }}>Create Deck</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}


export default connect()(AddDeck)
