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

export default function Account_Screen(props) {
  const info = useSelector(store => store.data.info);

  return (
    <View style={[CONTAINER, styles.container]}>
      <TouchableHighlight
        style={{width: '100%'}}
        onPress={() => props.navigation.goBack()}>
        <View style={styles.userInfo}>
          <View>
            <Image
              style={styles.checkicon}
              source={require('../../asset/img/checkCircle.png')}
            />
            <Image
              style={styles.pic}
              source={require('../../asset/img/defaultProfile.png')}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.acctStyle}>{info.name}</Text>
            <Text style={styles.infoStyle}>{info.acc_type}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    backgroundColor: '#545353',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  pic: [ICON.LARGE, {borderRadius: 50}],
  info: {
    paddingLeft: 20,
  },
  acctStyle: [TEXT.MEDIUM],
  infoStyle: [
    {
      color: '#969696',
      fontSize: 15,
    },
  ],
  checkicon: [
    {
      position: 'absolute',
      zIndex: 1,
      right: -5,
      top: -5,
    },
  ],
});
