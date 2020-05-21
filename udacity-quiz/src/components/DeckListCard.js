import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const DeckListCard = ({ id, name, cardCount, navigation }) => (
  
  <TouchableOpacity style={{ width: "100%", height: 150, justifyContent: "center", marginBottom: 10, elevation: 5, backgroundColor: "#ffffff", alignItems: "center" }}
    onPress={() => navigation.navigate("DeckDetail", { deckId: id, name: name })}>
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "500" }}>{name}</Text>
      <Text style={{ fontSize: 15, color: "#bbbbbb" }}>{cardCount} Cards</Text>
    </View>
  </TouchableOpacity>
);

export default DeckListCard;
