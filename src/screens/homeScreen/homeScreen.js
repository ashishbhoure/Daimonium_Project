import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from 'react-native';
import {COLOR, CONTAINER, ICON, TEXT} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {get} from '../../api/api';
import {Balance} from '../../redux/action';

export default function HomeScreen(props) {
  const info = useSelector(store => store.data.info);
  const value = useSelector(store => store.data.value);
  const [aud_value, setAud_value] = useState(value.be_value);
  const [local_value, setLocal_value] = useState(value.local_value);
  const dispatch = useDispatch();
  useEffect(() => {
    async () => {
      const balance = get('get-balance?currency=AUD');
      console.log(balance);
      dispatch(Balance(balance));
    };
  }, []);

  const user_info = async () => {
    props.navigation.navigate('UserInfo');
    // alert('info');
  };

  return (
    <View style={[CONTAINER, styles.container]}>
      <TouchableHighlight style={{width: '100%'}} onPress={() => user_info()}>
        <View style={styles.userInfor}>
          <View>
            <Image
              style={styles.pic}
              source={require('../../asset/img/defaultProfile.png')}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.u_name}>{info.full_name}</Text>
            <Text style={styles.text}>
              Acct Type :{' '}
              <Text style={{color: COLOR.COLOR.BLACK}}>{info.acc_type}</Text>
            </Text>
            <Text style={styles.text}>
              Acct No :{' '}
              <Text style={{color: COLOR.COLOR.BLACK}}>{info.name}</Text>{' '}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.acct}>
        <Text style={[styles.acct_head, {color: COLOR.COLOR.WHITE}]}>
          AUD Balance
        </Text>
        <Text style={[styles.amount, {color: COLOR.COLOR.WHITE}]}>
          ${aud_value}
          {/* <Text style={styles.d_amount}>00</Text> */}
        </Text>
      </View>
      <View style={styles.acct}>
        <Text style={styles.acct_head}>DIAMONIUM BALANCE</Text>
        <Text style={[styles.amount]}>
          {local_value}
          {/* <Text style={[styles.d_amount]}>00</Text> */}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  settingIcon: [
    {
      tintColor: COLOR.COLOR.WHITE,
    },
    ICON.LOGO,
  ],
  headText: [TEXT.MEDIUM, {fontSize: 16, fontWeight: 'bold'}],
  titleText: [{color: COLOR.COLOR.GREY}],
  logo: ICON.LOGO,
  userInfor: {
    flexDirection: 'row',
    backgroundColor: COLOR.BACKGROUND.GOLD,
    // width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pic: [ICON.LARGE, {borderRadius: 50}],
  info: {
    paddingLeft: 20,
  },
  u_name: {fontWeight: 'bold', fontSize: 17, color: COLOR.COLOR.BLACK},
  acct: {
    alignItems: 'center',
    padding: 15,
  },
  acct_head: {
    color: COLOR.COLOR.GOLD,
    fontSize: 18,
  },
  amount: {
    color: COLOR.COLOR.GOLD,
    fontSize: 35,
    fontWeight: 'bold',
  },
  d_amount: {
    fontSize: 20,
  },
});
