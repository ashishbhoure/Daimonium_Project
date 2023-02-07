import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Buttons, Check_Box, InputText} from '../../elements/elements';
import {CONTAINER, ICON, IMG, TEXT, COLOR} from './../../styles/styles';
import {AddData, UserInfo} from './../../redux/action';
import {post} from '../../api/api';
import {CONST_API} from '../../api/apiConst';
import {CountryPicker} from 'react-native-country-codes-picker';

export default function UserInfo_Screen(props) {
  const info = useSelector(store => store.data.info);
  const [accType, setAccType] = useState(info.acc_type);
  const [fullName, setFullName] = useState(info.full_name);
  const [email, setEmail] = useState(info.email);
  const [accNo, setAccNo] = useState(info.name);
  const dispatch = useDispatch();

  const handleSave = () => {
    const data = {
      acc_type: info.acc_type,
      email: email,
      full_name: fullName,
      name: info.name,
      private_key: info.private_key,
      profile_image: '',
    };
    dispatch(UserInfo(data));
    console.log(info);
  };

  const editImage = () => {
    alert('edit Image');
  };

  return (
    <View style={[styles.container, CONTAINER]}>
      <View>
        <Pressable style={{width: '100%'}} onPress={() => editImage()}>
          <Image
            style={styles.img}
            source={require('../../asset/img/defaultProfile.png')}
          />
        </Pressable>
        <Image
          style={styles.icon}
          source={require('../../asset/img/edit.png')}
        />
      </View>

      <View style={styles.num}>
        <InputText
          placeholder="Full Name"
          onFocus={true}
          labelStyle={styles.label}
          onChangeText={text => setFullName(text)}
          value={fullName}
          lable="Full Name"
        />
      </View>
      <InputText
        placeholder="Email"
        onFocus={true}
        onChangeText={text => setEmail(text)}
        labelStyle={styles.label}
        value={email}
      />
      <InputText
        placeholder="Account Type"
        onFocus={true}
        labelStyle={styles.label}
        label="Account Type"
        onChangeText={text => setAccType(text)}
        disabled={true}
        value={accType}
      />
      <InputText
        placeholder="Account Number"
        onFocus={true}
        onChangeText={text => setAccNo(text)}
        labelStyle={styles.label}
        disabled={true}
        label="Account Number"
        value={accNo}
      />
      <Text style={styles.text}>
        {' '}
        Note :- Acoount Type and Acount Nummber are not editable
      </Text>
      <Buttons
        title="SAVE"
        buttonStyle={{backgroundColor: COLOR.BACKGROUND.GOLD}}
        onPress={() => handleSave()}
        titleStyle={{color: COLOR.COLOR.WHITE}}
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
  label: {
    color: COLOR.COLOR.GREY,
  },
  text: {
    color: 'red',
    opacity: 0.8,
    marginTop: 0,
    marginBottom: 20,
  },
  img: [ICON.XLARGE, {marginVertical: '5%', borderRadius: 200}],
  icon: [
    ICON.X_SMAll,
    {
      tintColor: COLOR.COLOR.WHITE,
      position: 'absolute',
      bottom: 15,
      right: -15,
    },
  ],
});
