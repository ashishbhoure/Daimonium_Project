import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLOR, CONTAINER, ICON, TEXT} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';

export default function Transactions_Screen(props) {
  const info = useSelector(store => store.data.info);

  return (
    <View style={[CONTAINER]}>
      <Text style={TEXT.MEDIUM}>Transactions come here</Text>
      <View style={styles.iconView}>
        <Image
          style={styles.icon}
          source={require('../../asset/icons/refresh.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    backgroundColor: COLOR.BACKGROUND.GOLD,
    padding: 15,
    borderRadius: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  icon: [
    {
      tintColor: COLOR.COLOR.WHITE,
    },
    ICON.LOGO,
  ],
});
