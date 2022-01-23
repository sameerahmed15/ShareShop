/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [emailInput, onChangeEmail] = React.useState(null);
  const [passwordInput, onChangePassword] = React.useState(null);
  return (
    <>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('C:/Users/samee/ShareShop/Split_app/assets/logo.png')}
      />
    </View>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={emailInput}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={passwordInput}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.button}>
          Sign In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 0.8,
    borderColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0e67b4",
    height: 40,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    color: "#ffff",
  }
});

export default Login;
