import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Pager_View} from './pagination';
import {Buttons} from './../../elements/elements';
import {CONTAINER} from './../../styles/styles';

class Mainpage extends Component {
  render() {
    return (
      <View style={[CONTAINER]}>
        <Pager_View style={styles.pageView} />

        <Buttons
          title="Create Wallet"
          buttonStyle={{backgroundColor: 'gold'}}
          onPress={() => this.props.navigation.navigate('Create-Wallet')}
        />
        <Buttons
          title="Login"
          buttonStyle={{backgroundColor: 'transparent'}}
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

export default Mainpage;

const styles = StyleSheet.create({});
