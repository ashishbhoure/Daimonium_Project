import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {TEXT} from '../../styles/styles';
import {useDispatch} from 'react-redux';
import {CountryCode} from '../../redux/action';

export default function Country_Picker() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [code, setCode] = useState('IN');
  const [flag, setFlag] = useState('🇮🇳');
  const dispatch = useDispatch();
  return (
    <View style={{marginBottom: 10}}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => setShow(true)}>
        <Text style={TEXT.MEDIUM}>{flag}</Text>
        <Text style={TEXT.MEDIUM}> {code}</Text>
        <Text style={TEXT.MEDIUM}> {countryCode}</Text>
        <Image
          style={{
            alignSelf: 'center',
            marginLeft: 5,
            tintColor: 'grey',
            width: 15,
            height: 15,
          }}
          source={require('../../asset/img/downArrow.png')}
        />
      </TouchableOpacity>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setCode(item.code);
          setFlag(item.flag);
          setShow(false);
          dispatch(CountryCode({countryCode, code}));
        }}
      />
    </View>
  );
}
