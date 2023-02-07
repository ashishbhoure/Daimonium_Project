import React, {useState} from 'react';
import {Modal, Pressable, Text} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {View, Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import {COLOR, ICON, TEXT} from '../styles/styles';
import ModelView from './../screens/setting/model';
import {useSelector} from 'react-redux';
import {Divider} from '@rneui/themed';
import {Check_Box} from '../elements/elements';

export const HeaderTitle = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text style={styles.headText}>DIAMONIUM GLOBAL WALLET</Text>
      <Text style={styles.titleText}>Release 1.0.1</Text>
    </View>
  );
};

export const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../asset/img/Barteos-logo.png')}
    />
  );
};

export const SettingIcon = props => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [autoLock, setAutoLock] = useState(true);
  const [accType, setAccType] = useState('');
  const info = useSelector(store => store.data.info);

  const list_data = [
    {
      icon: require('../asset/img/icons8-us-dollar-60.png'),
      title: 'Currency',
      right: 'AUD',
      fun: () => alert('hello'),
    },
    {
      icon: require('../asset/img/icons8-wallet-60.png'),
      title: 'AutoLock',
      fun: () => alert('AutoLock'),
    },
    {
      icon: require('../asset/img/icons8-wallet-60.png'),
      title: 'Transactions',
      fun: () => alert('Transaction'),
    },
    {
      icon: require('../asset/img/ic_notification.png'),
      title: 'Notification',
      fun: () => alert('notification'),
    },
    {
      icon: require('../asset/img/icons8-lock-filled-50.png'),
      title: 'Download Private Key ',
      fun: () => alert('private key'),
    },
    {
      icon: require('../asset/img/ic_import.png'),
      title: 'Import CSV',

      fun: () => alert('Import CSV'),
    },
    {
      icon: require('../asset/img/icons8-lock-filled-50.png'),
      title: 'logout',
      fun: () => alert('logout'),
    },
  ];

  return (
    <>
      <TouchableHighlight onPress={() => setModalVisible(true)}>
        <Image
          style={styles.settingIcon}
          source={require('../asset/img/settings.png')}
        />
      </TouchableHighlight>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headBar}>
              <TouchableHighlight
                style={styles.back}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.back_icon}
                  source={require('../asset/icons/back.png')}
                />
              </TouchableHighlight>
              <View style={styles.head}>
                <Text style={styles.modalText}>SETTING</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => alert('account heelo')}>
                <View style={styles.list}>
                  <View>
                    <Image
                      style={styles.icon}
                      source={require('../asset/img/icons8-wallet-60.png')}
                    />
                  </View>
                  <View style={styles.text1}>
                    <Text style={styles.text}>Accounts</Text>
                  </View>
                  <View style={styles.text2}>
                    <Text style={TEXT.SMALL}>{info.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <Divider marginBottom={30} width={2} color={COLOR.COLOR.WHITE} />
            <View>
              {list_data.map((list, i) => {
                return (
                  <TouchableOpacity key={i} onPress={list.fun}>
                    <View style={styles.list}>
                      <View>
                        <Image style={styles.icon} source={list.icon} />
                      </View>
                      <View style={[styles.text1, {width: '80%'}]}>
                        <Text style={styles.text}>{list.title}</Text>
                      </View>
                      <View style={[styles.text2, {width: '10%'}]}>
                        <Text style={[TEXT.SMALL, {textAlign: 'right'}]}>
                          {list.right}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Divider marginBottom={30} width={2} color={COLOR.COLOR.WHITE} />
            <View>
              <TouchableOpacity onPress={() => alert('hii')}>
                <View style={styles.list}>
                  <View>
                    <Image
                      style={styles.icon}
                      source={require('../asset/img/icons8-facebook-f-60.png')}
                    />
                  </View>
                  <View style={styles.text1}>
                    <Text style={styles.text}>Facebook</Text>
                  </View>
                  <View style={styles.text2}>
                    <Text style={styles.text}></Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  headText: [TEXT.MEDIUM, {fontSize: 16, fontWeight: 'bold'}],
  titleText: [{color: COLOR.COLOR.GREY}],
  logo: ICON.LOGO,
  settingIcon: [
    {
      tintColor: COLOR.COLOR.WHITE,
    },
    ICON.LOGO,
  ],
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: [
    {
      color: COLOR.COLOR.WHITE,
      fontWeight: 'bold',
      fontSize: 18,
    },
  ],
  icon: ICON.X_SMAll,
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  text: [TEXT.SMALL, {textAlign: 'left', width: '50%'}],
  text1: {paddingLeft: 10, width: '60%'},
  text2: {width: '30%', textAlign: 'right'},
  back_icon: [ICON.LOGO, {tintColor: 'white'}],
  back: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    width: '5%',
    marginLeft: 5,
  },
  headBar: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  head: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});
