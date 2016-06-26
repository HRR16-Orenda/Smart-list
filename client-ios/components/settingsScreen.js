import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

import styles from '../styles/styles.js';

import t from 'tcomb-form-native';
var Form = t.form.Form;

var User = t.struct({
  username: t.String,
  password: t.String
});

const options = {};

export default class settingsScreen extends Component {

  render() {
    return (
      <View style={ styles.container } >
        <View style={ styles.row }>
          <Text style={ styles.signUpTitle } onPress={() => console.log(this.refs.form)} >Signup/Login</Text>
        </View>
        <View style={ styles.row }>
          <Form
            ref="form"
            type={ User }
            options={ options }
          />
        </View>
        <View style={ styles.row }>
          <TouchableHighlight style={ styles.signUpButton } underlayColor='#99d9f4'>
            <Text style={styles.signUpButtonText}>Signup</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.signUpButton } underlayColor='#99d9f4'>
            <Text style={ styles.signUpButtonText }>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.signUpButton } underlayColor='#99d9f4'>
            <Text style={ styles.signUpButtonText }>Logout</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};