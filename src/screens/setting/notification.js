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

export default function Notifications_Screen(props) {
  const info = useSelector(store => store.data.info);

  return (
    <View style={[CONTAINER]}>
      <Text style={TEXT.MEDIUM}>No feed found</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
