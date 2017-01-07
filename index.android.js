import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View>
        <Text style={{color: 'blue', fontSize: 40, marginTop: 50, textAlign: 'center'}}>BIMUN 2017</Text>
        <Text style={{color: 'green', fontSize: 20, marginTop: 60, marginLeft: 10}}>Fontosabb információk:</Text>
        <Text style={{fontSize: 15, marginTop: 10, marginLeft: 15}}>Helyszín: Eötvös József Gimnázium</Text>
        <Text style={{fontSize: 15, marginTop: 7, marginLeft: 15}}>Időpont: 2017. tavasz</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('BimunApp', () => Hello);
