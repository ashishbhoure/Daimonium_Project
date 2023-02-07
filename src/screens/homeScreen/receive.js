import {Text, TextInput} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {CONTAINER, ICON, TEXT} from '../../styles/styles';
import {COLOR, IMG} from './../../styles/styles';
import {useSelector} from 'react-redux';
import {InputText} from '../../elements/elements';
import {TouchableHighlight} from 'react-native';
import {Icon} from '@rneui/themed';
import {useState} from 'react';
import {post} from '../../api/api';
import QRCode from 'react-native-qrcode-svg';

export default function ReceiveScreen() {
  const info = useSelector(store => store.data.info);
  const [inputValue, setInputValue] = useState('0');
  const [calValue, setCalValue] = useState('0');

  const [input_C, setInput_c] = useState('AUD');
  const [cal_C, setCal_C] = useState('DIA');
  const [switchBtn, setSwitchBtn] = useState(true);

  const switch_btn = () => {
    if (switchBtn === true) {
      setCalValue('0');
      setCal_C('AUD');
      setInputValue('0');
      setInput_c('DIA');
      setSwitchBtn(false);
    } else {
      setCalValue('0');
      setCal_C('DIA');
      setInputValue('0');
      setInput_c('AUD');
      setSwitchBtn(true);
    }
  };

  const input_text = async text => {
    setInputValue(text);
    const data = {
      amount: inputValue,
      currency_from: input_C,
      currency_to: cal_C,
    };
    const value = await post('currency_convert', data);
    setCalValue(value.be_value.toFixed(2));
    // console.log(value.be_value.toFixed(2));
  };

  return (
    <View style={[CONTAINER, {paddingVertical: 15}]}>
      <Text style={TEXT.MEDIUM}>Scan to receive</Text>
      <View style={styles.qrBox}>
        <QRCode
          // style={styles.qrStyle}
          size={200}
          value={inputValue === '' ? '0' : inputValue}
        />
      </View>

      <View style={styles.copyBox}>
        <View style={styles.box}>
          <Text style={styles.textCopy}>{info.name}</Text>
        </View>
        <View style={{}}>
          <Image
            style={styles.copyIcon}
            source={require('../../asset/img/copy.png')}
          />
        </View>
      </View>
      <View style={styles.input_box}>
        <View style={styles.input}>
          <TextInput
            style={[
              {
                fontWeight: 'bold',
              },
              TEXT.MEDIUM,
            ]}
            keyboardType="numeric"
            onChangeText={text => input_text(text)}
            defaultValue={inputValue}
          />
          <Text style={[TEXT.MEDIUM, {fontWeight: 'bold'}]}>{input_C}</Text>
        </View>
        <TouchableHighlight
          onPress={() => {
            alert('text past');
          }}>
          <View>
            <Image
              style={ICON.LOGO}
              source={require('../../asset/img/ic_paste.png')}
            />
            <Text style={styles.p_text}>Paste</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.switch}>
        <Text style={TEXT.MEDIUM}>
          {' '}
          {calValue} {cal_C}
        </Text>
        <TouchableHighlight onPress={() => switch_btn()}>
          <View>
            <Image
              style={[ICON.LOGO, {alignSelf: 'flex-end'}]}
              source={require('../../asset/img/switch.png')}
            />
            <Text style={styles.p_text}>Switch</Text>
            <Text style={styles.p_text}>Currency</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scanImg: {
    backgroundColor: COLOR.COLOR.WHITE,
    width: 200,
    height: 200,
    margin: 15,
  },
  copyBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
    padding: 10,
    borderColor: COLOR.COLOR.GOLD,
    borderWidth: 1,
  },
  box: {
    borderRightColor: COLOR.COLOR.GOLD,
    borderRightWidth: 1,
    width: '85%',
  },
  textCopy: [
    TEXT.SMALL,
    {
      alignSelf: 'center',
      textAlign: 'center',
    },
  ],
  input_box: {
    borderWidth: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    alignItems: 'center',
    marginBottom: 15,
  },
  copyIcon: {
    tintColor: COLOR.COLOR.GREY,
    borderLeftWidth: 1,
  },
  p_text: {
    color: COLOR.COLOR.LBLUE,
    textAlign: 'right',
  },
  input: {
    borderWidth: 1,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  qrBox: {
    width: '50%',
    padding: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 10,
  },
});
