import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

const QuizButtons = ({ answer }) => (
  <View style={{ width: "100%", alignItems: "center", flex: 1, justifyContent: "center" }}>
    <TouchableOpacity onPress={() => answer(true)}
      style={{ borderRadius: 5 }}>
      <View style={{ height: 50, width: 180, backgroundColor: "green", borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#ffffff" }}>Correct</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => answer(false)}
      style={{ marginTop: 20, borderRadius: 5 }}>
      <View style={{ height: 50, width: 180, backgroundColor: "red", borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "700", color: "#ffffff" }}>Incorrect</Text>
      </View>
    </TouchableOpacity>
  </View>
)


export default QuizButtons
