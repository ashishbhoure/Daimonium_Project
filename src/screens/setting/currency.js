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
import {Divider} from '@rneui/themed';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Afghanistan',
    pin: 'AF',
    code: 'AFN',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Albania',
    pin: 'Al',
    code: 'ALL',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Algeria',
    pin: 'DZ',
    code: 'DZD',
  },
];

const Item = ({data}) => (
  <TouchableHighlight style={styles.listItem} onPress={() => alert('hello')}>
    <View>
      <Text style={[TEXT.MEDIUM]}>
        {data.title} - {data.pin}
      </Text>
      <Text style={TEXT.SMALL}>{data.code}</Text>
      <Divider />
    </View>
  </TouchableHighlight>
);

export default function Currency_Screen(props) {
  const info = useSelector(store => store.data.info);

  return (
    <View style={[CONTAINER]}>
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  listItem: {
    paddingBottom: 10,
  },
});
