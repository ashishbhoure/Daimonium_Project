import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from 'react-native';
import {Buttons, InputText} from '../../elements/elements';
import {COLOR, CONTAINER} from '../../styles/styles';
import {IMG, TEXT, ICON} from '../../styles/styles';
import {CountryPicker} from 'react-native-country-codes-picker';
import {post} from '../../api/api';
import {useDispatch} from 'react-redux';
import {UserInfo} from '../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [flag, setFlag] = useState('🇮🇳');
  const [C_code, setC_Code] = useState('IN');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const data = {
      username: `${C_code}${countryCode}${username}`
        .toLowerCase()
        .replace('+', '-'),
      password: password,
    };
    console.log(data);
    const info = await post('login', data);
    if (info.message === 'Loggedin successfully') {
      try {
        await AsyncStorage.setItem('token', info.token);
      } catch (e) {
        console.log(e);
      }
      dispatch(UserInfo(info.data[0]));
      props.navigation.navigate('Passcode');
      console.log(await AsyncStorage.getItem('token'));
    } else {
      console.log(info.message);
    }
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

  return (
    <View style={[CONTAINER, styles.container]}>
      <Image
        style={[IMG, {marginVertical: '5%'}]}
        source={require('../../asset/icons/diamond.png')}
      />
      <Text style={[TEXT.MEDIUM, {marginBottom: 10}]}>
        Sign in to your account
      </Text>
      <View style={styles.phone}>
        <Country_Picker />
        <InputText
          onPressCLick={data => thise}
          placeholder="Username"
          keyboardType="numeric"
          onFocus={true}
          containerStyle={{width: '70%'}}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <InputText
        placeholder="Password"
        rightIcon={
          <TouchableHighlight
            onPress={() => {
              showPass ? setShowPass(false) : setShowPass(true);
            }}>
            <Image
              style={{tintColor: 'white'}}
              source={require('../../asset/img/show-password.png')}></Image>
          </TouchableHighlight>
        }
        secureTextEntry={!showPass}
        onFocus={true}
        // keyboardType="numeric"
        onChangeText={text => setPassword(text)}
      />
      <Buttons
        title="Login"
        buttonStyle={{backgroundColor: COLOR.COLOR.GOLD}}
        onPress={() => handleLogin()}
      />
      <Buttons
        title="Back"
        buttonStyle={{backgroundColor: COLOR.BACKGROUND.TANSPARENT}}
        onPress={() => props.navigation.navigate('LoadScreen')}
        titleStyle={{color: COLOR.COLOR.GREY}}
      />
      <Buttons
        title="Restore Password"
        buttonStyle={{backgroundColor: COLOR.BACKGROUND.TANSPARENT}}
        onPress={() => props.navigation.navigate('RestoreScreen')}
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
