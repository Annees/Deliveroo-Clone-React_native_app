import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
const LoginScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Log In" onPress={() => console.log("Log In Pressed")} />
      <Text style={styles.footer}>
        Don't have an account?{" "}
        <Text
          style={styles.signUp}
          onPress={() => console.log("Sign Up Pressed")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff"
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    color: "#fff"
  },
  footer: {
    marginTop: 20,
  },
  signUp: {
    color: "blue",
  },
});

export default LoginScreen;
