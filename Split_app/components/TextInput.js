import { getRadioUtilityClass } from "@mui/material";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 0.5,
    borderColor: '#647C90',
    padding: 10,
    borderRadius: 3,
  },
});

export default UselessTextInput;