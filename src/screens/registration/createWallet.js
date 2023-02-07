import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Buttons, Check_Box, InputText} from '../../elements/elements';
import {CONTAINER, ICON, IMG, TEXT, COLOR} from '../../styles/styles';
import {AddData} from '../../redux/action';
import {post} from '../../api/api';
import {CONST_API} from '../../api/apiConst';
import {CountryPicker} from 'react-native-country-codes-picker';

export default function CreateWallet(props) {
  const [accType, setAccType] = useState('Business');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [flag, setFlag] = useState('🇮🇳');
  const [C_code, setC_Code] = useState('IN');

  const handleCreate = async () => {
    if (password === rePassword) {
      const data = {
        username: `${C_code}${countryCode}${phone}`
          .toLowerCase()
          .replace('+', '-'),
        password: password,
        full_name: name,
        profile_image: '',
        acc_type: accType,
        firebase_token: 'token',
        device_type: 2,
      };
      console.log(data);
      await post(CONST_API.U_REGISTER, data);
      alert('account created');
      dispatch(AddData(data));
    } else {
      alert('password not match');
    }

    // props.navigation.navigate('OTP_Verification');
  };

  const Country_Picker = () => {
    return (
      <View style={{marginBottom: 10}}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => setShow(true)}>
          <Text style={TEXT.MEDIUM}>{flag}</Text>
          <Text style={TEXT.MEDIUM}> {C_code}</Text>
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
            setC_Code(item.code + '-');
            setFlag(item.flag);
            setShow(false);
          }}
        />
      </View>
    );
  };

  const CheckBoxs = () => {
    return (
      <View style={styles.CheckBox}>
        <Check_Box
          title="Individual"
          checked={accType === 'Individual'}
          onPress={() => setAccType('Individual')}
        />
        <Check_Box
          title="Business"
          checked={accType === 'Business'}
          onPress={() => setAccType('Business')}
        />
        <Check_Box
          title="Non-Profit"
          checked={accType === 'Non-Profit'}
          onPress={() => setAccType('Non-Profit')}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, CONTAINER]}>
      <Image
        style={[IMG, {marginVertical: '5%'}]}
        source={require('../../asset/icons/diamond.png')}
      />
      <CheckBoxs />
      <View style={styles.userText}>
        <Text style={TEXT.SMALL}>Your UserName:-</Text>
        <Text style={TEXT.SMALL}> {C_code + '-'}</Text>
        <Text style={TEXT.SMALL}>{phone}</Text>
      </View>
      <View style={styles.num}>
        <Country_Picker />

        <InputText
          placeholder="Mobile Number-"
          containerStyle={{width: '70%'}}
          keyboardType="numeric"
          onFocus={true}
          onChangeText={text => setPhone(text)}
        />
      </View>
      <InputText
        placeholder="Full Name"
        onChangeText={text => setName(text)}
        onFocus={true}
      />
      <InputText
        placeholder="6 Digit Password"
        secureTextEntry={true}
        onFocus={true}
        maxLenth={6}
        onChangeText={text => setPassword(text)}
      />
      <InputText
        placeholder="Confirm Password"
        secureTextEntry={true}
        onFocus={true}
        maxLenth={6}
        onChangeText={text => setRePassword(text)}
      />
      <Buttons
        title="CREATE"
        buttonStyle={{backgroundColor: COLOR.BACKGROUND.GOLD}}
        onPress={() => handleCreate()}
        titleStyle={{color: COLOR.COLOR.WHITE}}
      />
      <Buttons
        title="Back"
        buttonStyle={{backgroundColor: COLOR.BACKGROUND.TANSPARENT}}
        onPress={() => props.navigation.navigate('LoadScreen')}
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
  num: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userText: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  CheckBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: '8%',
  },
});
