// @flow

import React, { Component } from "react";
import {
  TextInput
} from 'react-native';
import styles from '../styles/styles.js';
import InputBox from './inputBox.js';

export default class addLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <TextInput
        style = {{height: 40, borderColor: 'gray', borderWidth: 1}}
        //onChangeText={(text) => this.setState({text})}
      />
    );
  }
}
