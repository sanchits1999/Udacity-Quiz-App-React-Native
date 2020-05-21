import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import DeckListCard from "../components/DeckListCard";
import { handleGetDecks } from '../actions/decks'
import { SafeAreaView } from "react-navigation"

class DeckLists extends Component {
  state = {
    load: false
  };

  componentDidMount() {
    this.props.dispatch(handleGetDecks(() => { this.setState({ load: true }) }))
  }

  render() {
    const { decks, navigation } = this.props;
    if (!this.state.load) {
      return (
        <View style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return Object.values(decks).length > 0 ? (
        <SafeAreaView forceInset={{ top: "always", flex: 1 }}>
          <View style={{}}>
            <FlatList
              data={Object.values(decks)}
              renderItem={({ item }) => (
                <DeckListCard
                  id={item.id}
                  name={item.name}
                  cardCount={item.cards.length}
                  navigation={this.props.navigation}
                />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </SafeAreaView>
      ) : (
          <SafeAreaView forceInset={{ top: "always" }}>
            <View style={{ alignItems: "center", height: "100%", justifyContent: "center" }}>

              <Text style={{ fontSize: 26, fontWeight: "500", marginHorizontal: 20, textAlign: "center", marginBottom: 20 }}>Your Decks will appear here. Add deck to continue!</Text>
              <TouchableOpacity onPress={() => { navigation.navigate("AddDeck") }}
                style={{ borderColor: "#000000", borderWidth: 1, borderRadius: 5, width: "70%", marginBottom: 60, marginTop: 20 }}>
                <View style={{ backgroundColor: "#ffffff", borderRadius: 5 }}>
                  <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#000000", marginHorizontal: 40, marginVertical: 10 }}>Add Deck</Text>
                </View>
              </TouchableOpacity>

            </View>
          </SafeAreaView>
        );
    }
  }
}

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(DeckLists);
