import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import contacts from "./contacts";

type MyProps = {};

type MyState = {
  showContacts: Boolean;
};

export default class App extends React.Component<MyProps, MyState> {
  state = { showContacts: false };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <ScrollView>
          {contacts.map((contact) => (
            <View>
              <Text> {contact.name}</Text>
              <Text> {contact.tel}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
