import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import DeckLists from "./src/screens/DeckLists";
import AddDeck from "./src/screens/AddDeck";
import AddCard from "./src/screens/AddCard";
import DeckDetail from "./src/screens/DeckDetail";
import Quiz from "./src/screens/Quiz";
import store from './src/store/store'
import { setNotification } from './src/utils/NotificationApi'

const Tabs = createBottomTabNavigator(
  {
    DeckLists: {
      screen: DeckLists,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => {
          return <MaterialCommunityIcons name="card-text-outline" size={22} color={tintColor} />
        }
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => {
          return <Entypo name="add-to-list" size={22} color={tintColor} />
        }
      }
    }
  },
  {
    navigationOptions: {
      headerShown: false
    }
  }
);

const MainNavigator = createStackNavigator(
  {
    Home: Tabs,
    DeckDetail: DeckDetail,
    AddCard: AddCard,
    Quiz: Quiz
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: "ffffff",
      headerTitleStyle: { fontWeight: "bold" }
    }
  }
);

const Container = createAppContainer(MainNavigator)

class App extends Component {

  componentDidMount() {
    setNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
}

export default App;