import React, { Component } from "react"
import { connect } from "react-redux"
import { Text, View, TouchableOpacity } from "react-native"
import { handledeleteDeck } from '../actions/decks'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitleAlign: 'center',
    title: navigation.getParam("name")
  });

  deletee = () => {
    const { deck, navigation, dispatch } = this.props

    dispatch(handledeleteDeck(deck.id))

    navigation.goBack()
  }

  render() {

    const { navigation, error } = this.props;

    if (error) {
      return (
        navigation.goBack()
      )
    }

    const { deck } = this.props
    const count = deck.cards.length
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={{ width: "100%", alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontSize: 30, fontWeight: "500" }}>{deck.name}</Text>
          <Text style={{ fontSize: 18, color: "#bbbbbb" }}>{count} Cards</Text>
        </View>
        <View style={{ marginTop: "auto", marginBottom: 100, alignItems: "center" }}>
          <TouchableOpacity onPress={() => { navigation.navigate("AddCard", { deckId: deck.id }) }}
            style={{ borderColor: "#000000", borderWidth: 1, borderRadius: 5 }}>
            <View style={{ backgroundColor: "#ffffff", borderRadius: 5 }}>
              <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#000000", marginHorizontal: 40, marginVertical: 10 }}>Add Card</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate("Quiz", { deck }) }}
            style={{ marginTop: 20, borderRadius: 5 }}>
            <View style={{ backgroundColor: "#000000", borderRadius: 5 }}>
              <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#ffffff", marginHorizontal: 40, marginVertical: 10 }}>Start Quiz</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.deletee}
            style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontSize: 18, color: "red" }}>Delete Deck</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state, { navigation }) => {
  const deck = state[navigation.getParam("deckId")]
  if (typeof deck === "undefined") {
    console.log("jfjg")
    return {
      error: true
    }
  }
  return {
    deck,
    error: false
  }
}

export default connect(mapStateToProps)(DeckDetail);
