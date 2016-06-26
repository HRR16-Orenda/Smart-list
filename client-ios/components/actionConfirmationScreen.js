// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
// import styles from '../styles/styles.js';
// import Header from './header.js';
import { Actions } from 'react-native-router-flux';

export default class ActionConfirmationScreen extends Component {
  constructor(props) {
    super(props);
  }

  pressHandler(data) {
    const { fields, userCategorySelected, destroyForm } = this.props;

    // manually set category form field with given argument
    fields.item.category.onChange(data);
    userCategorySelected(data);

    // manually destroy value of form field
    destroyForm('general');
  }

  render() {
    const { fields } = this.props;
    console.log('title', this.props);
    return (

      <View style={styles.container}>
        {this.props.toggleShow ?
          <View style = {{height: 50, borderColor: 'gray', borderWidth: 1, marginLeft: 35, marginRight: 35, marginTop: 100, alignItems: "center"}}>
            <Text>Add to...</Text>
            <View style={{flex: 3, flexDirection: "row"}}>
              <TouchableHighlight style={{margin: 10}} onPress={this.pressHandler.bind(this, 'Books')}>
                <Text>Book</Text>
              </TouchableHighlight>
              <TouchableHighlight style={{margin: 10}} onPress={this.pressHandler.bind(this, 'Movies')}>
                <Text>Movies</Text>
              </TouchableHighlight>
              <TouchableHighlight style={{margin: 10}} onPress={this.pressHandler.bind(this, 'Music')}>
                <Text>Music</Text>
              </TouchableHighlight>
            </View>
          </View>
          :
            <View style={styles.container}>
              <Image source={{uri:'http://cliparts.co/cliparts/pio/dBR/piodBRjiE.png'}} style={styles.checkmark} />
              <Text style={{marginTop: 30, alignSelf: "center"}}>
                Your item '{this.props.userInput}' has been added to {this.props.category}
              </Text>
            </View>
        }
      </View>
    );
  }
}


var styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF'
   },
   inputBox: {
     flex: 1,
     height: 30
   },
   checkmark: {
     marginTop: 100,
     width: 160,
     height: 160,
     alignSelf: "center",
     backgroundColor: 'transparent'
   }
});
