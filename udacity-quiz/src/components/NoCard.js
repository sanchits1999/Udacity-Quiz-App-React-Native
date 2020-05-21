import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

const NoCard = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ fontSize: 22, fontWeight: "500", marginHorizontal: 20, textAlign: "center" }}>
      You cannot take this quiz because there are no cards in this deck.
        </Text>
    <TouchableOpacity onPress={() => { navigation.goBack() }}
      style={{ borderColor: "#000000", borderWidth: 1, borderRadius: 5, width: "70%", marginTop: 50 }}>
      <View style={{ backgroundColor: "#ffffff", borderRadius: 5 }}>
        <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#000000", marginHorizontal: 40, marginVertical: 10 }}>Go back to Deck</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default NoCard