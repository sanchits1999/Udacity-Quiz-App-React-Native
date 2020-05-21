import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Resuts = ({ correct, incorrect, restart, navigation }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "500", textAlign: "center", fontSize: 30 }}>You scored</Text>
      <Text style={{ fontWeight: "500", textAlign: "center", fontSize: 40, marginTop: 40, color: "red" }}>{Math.round((correct * 100) / (correct + incorrect))}%</Text>
    </View>

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => restart()}
        style={{ borderColor: "#000000", borderWidth: 1, borderRadius: 5, width: "70%" }}>
        <View style={{ backgroundColor: "#ffffff", borderRadius: 5 }}>
          <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#000000", marginHorizontal: 40, marginVertical: 10 }}>Restart Quiz</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}
        style={{ marginTop: 20, borderRadius: 5, width: "70%" }}>
        <View style={{ backgroundColor: "#000000", borderRadius: 5 }}>
          <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#ffffff", marginHorizontal: 40, marginVertical: 10 }}>Go back to Deck</Text>
        </View>
      </TouchableOpacity>
    </View>

  </View>
);


export default Resuts;
