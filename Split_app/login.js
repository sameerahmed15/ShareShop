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
} from 'react-native';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('C:/Users/samee/ShareShop/Split_app/assets/logo.png')}
      />
    </View>
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
});

export default Login;
