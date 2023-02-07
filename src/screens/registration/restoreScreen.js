import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Buttons, InputText} from '../../elements/elements';
import {COLOR, CONTAINER} from '../../styles/styles';
import {IMG, TEXT, ICON} from '../../styles/styles';
import Country_Picker from './countryPicker';

export default function RestoreScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={[CONTAINER, styles.container]}>
      <Image
        style={[IMG, {marginVertical: '5%'}]}
        source={require('../../asset/icons/diamond.png')}
      />
      <Text style={[TEXT.MEDIUM, {marginBottom: 10}]}>Restore Password</Text>
      <View style={styles.phone}>
        <Country_Picker />
        <InputText
          placeholder="Username"
          keyboardType="numeric"
          onFocus={true}
          containerStyle={{width: '70%'}}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <InputText
        placeholder="Enter your private key here"
        secureTextEntry={!showPass}
        onFocus={true}
        keyboardType="numeric"
        onChangeText={text => setPassword(text)}
      />
      <Buttons
        title="Validate"
        buttonStyle={{backgroundColor: COLOR.COLOR.GOLD}}
        onPress={() => alert('password restore Success')}
      />
      <Buttons
        title="Back"
        buttonStyle={{backgroundColor: COLOR.BACKGROUND.TANSPARENT}}
        onPress={() => props.navigation.navigate('Login')}
        titleStyle={{color: COLOR.COLOR.GREY}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND.BLACK,
    paddingHorizontal: 10,
  },
  phone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
