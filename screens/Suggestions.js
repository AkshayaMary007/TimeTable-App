import React, { Component } from 'react';
import {
  Text,
  View,
  Flatlist,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class Suggestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="Suggestions" />
        <ScrollView>
          <Image style={styles.image} source={require('../assets/logo.jpg')} />
          <Text style={styles.text}>1. Start your day with a clear focus.</Text>
          <Text style={styles.text}>2. Work Smart not Hard</Text>
          <Text style={styles.text}>3. Focus on high-value activities.</Text>
          <Text style={styles.text}>4. Learn to prioratise your work</Text>
          <Text style={styles.text}>5. Put a time limit on tasks.</Text>
          <Text style={styles.text}>6. Minimize interruptions.</Text>
          <Text style={styles.text}>7. Review your day.</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff66',
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 23,
    fontColor: '#000',
  },
});
