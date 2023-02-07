import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Modal, View, Pressable} from 'react-native';

export default ModelView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const info = useSelector(store => store.data.info);
  const list_data = [
    {
      icon: require('../../asset/img/icons8-us-dollar-60.png'),
      title: 'Currency',
      right: 'AUD',
      fun: () => alert('Currency'),
    },
    {
      icon: require('../../asset/img/icons8-wallet-60.png'),
      title: 'AutoLock',
      fun: () => alert('Autolock'),
    },
    {
      icon: require('../../asset/img/icons8-wallet-60.png'),
      title: 'Transactions',
      fun: () => alert('Transaction'),
    },
    {
      icon: require('../../asset/img/ic_notification.png'),
      title: 'Notification',
      fun: () => alert('notification'),
    },
    {
      icon: require('../../asset/img/icons8-lock-filled-50.png'),
      title: 'Download Private Key ',
      fun: () => alert('private key'),
    },
    {
      icon: require('../../asset/img/ic_import.png'),
      title: 'Import CSV',
      fun: () => alert('private key'),
    },
    {
      icon: require('../../asset/img/icons8-lock-filled-50.png'),
      title: 'logout',
      fun: () => alert('private key'),
    },
  ];
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'red',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <Image
              style={{}}
              source={require('../../asset/img/left-arrow.png')}
            />
            <Text style={styles.modalText}>Hello World!</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => alert('hii')}>
              <View style={styles.list}>
                <View>
                  <Image
                    style={styles.icon}
                    source={require('../../asset/img/icons8-wallet-60.png')}
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
                    <View style={styles.text1}>
                      <Text style={styles.text}>{list.title}</Text>
                    </View>
                    <View style={styles.text2}>
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
                    source={require('../../asset/img/icons8-facebook-f-60.png')}
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
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
