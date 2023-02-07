import {Text, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import {View} from 'react-native';
import {InputText} from '../../elements/elements';
import {CONTAINER, ICON, TEXT} from '../../styles/styles';
import Country_Picker from './../registration/countryPicker';
import {COLOR} from './../../styles/styles';
import {TouchableHighlight} from 'react-native';
import {useState} from 'react';
import {get, post} from '../../api/api';
// import {useClipboard} from '@react-native-clipboard/clipboard';

export default function SendScreen() {
  const [contact, setContact] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState({
    data: [{id: '', name: '', profile_image: ''}],
  });
  const [showUser, setShowUser] = useState(false);

  const GetUserName = async () => {
    // alert('hello');
    const data = {
      keywords: userInput,
    };
    const user = await post('get-usernames', data);
    setUserData(user);
    setShowUser(true);
    console.log(user);
  };

  const selectUser = () => {
    setShowUser(false);
  };

  return (
    <View style={CONTAINER}>
      <View style={styles.scanImg}>
        <Text style={[TEXT.MEDIUM, {fontWeight: 'bold'}]}>Send</Text>
        <Image
          style={ICON.XLARGE}
          source={require('../../asset/img/transfer.png')}
        />
        <Image
          style={ICON.XLARGE}
          source={require('../../asset/img/scan1.png')}
        />
      </View>
      <View style={styles.input}>
        <Country_Picker />
        {/* <InputText style={styles.textIn} containerStyle={styles.textInput} /> */}
        <View style={styles.textIn}>
          <TextInput
            style={styles.textInput}
            placeholder="hello"
            keyboardType="numeric"
            defaultValue={userInput}
            onChangeText={text => setUserInput(text)}
            onBlur={() => GetUserName()}
          />
          {userData.data.map(user => {
            return (
              <TouchableOpacity
                style={showUser ? styles.show : styles.hide}
                onPress={() => selectUser()}>
                <View style={styles.searchUser}>
                  <Image
                    style={styles.profileImg}
                    source={require('../../asset/img/defaultProfile.png')}
                  />
                  <Text style={styles.textUser}>{user.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
          {/* <GetUserName /> */}
          <Text onPress={() => alert('copy text')} style={styles.text}>
            <Image
              style={styles.icon}
              source={require('../../asset/img/copy.png')}
            />
            {'  '}
            Click here to paste clipboard
          </Text>
        </View>
      </View>
      <View style={styles.contact}>
        <Text style={TEXT.LARGE}>Contacts</Text>
        <TouchableHighlight onPress={() => alert('open contact')}>
          <Image
            style={styles.addIcon}
            source={require('../../asset/img/icons8-plus-math-filled-100.png')}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.contact_list}>
        {contact ? (
          'contact list'
        ) : (
          <Text style={TEXT.MEDIUM}>No Contact Found</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scanImg: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: 'lightgreen',
    color: COLOR.COLOR.WHITE,
    fontSize: 15,
  },
  text: {
    color: COLOR.COLOR.LBLUE,
  },
  textIn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    width: '70%',
  },
  icon: [
    {
      tintColor: COLOR.COLOR.LBLUE,
      marginRight: 10,
    },
    ICON.SMALL,
  ],
  contact: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  addIcon: [{tintColor: COLOR.COLOR.GOLD}, ICON.X_MEDIUM],
  contact_list: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  profileImg: [
    ICON.MEDIUM,
    {
      borderRadius: 50,
    },
  ],
  searchUser: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  show: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 2,
    bottom: -25,
  },
  hide: {
    display: 'none',
  },
  textUser: [
    {
      paddingLeft: 10,
    },
    TEXT.MEDIUM,
  ],
});
