import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Buttons, InputText} from '../../elements/elements';
import {COLOR, CONTAINER} from '../../styles/styles';
import {IMG, TEXT, ICON} from './../../styles/styles';
import {useSelector} from 'react-redux';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default OTP_Screen = props => {
  const data = useSelector(store => store.data.data);
  const code = useSelector(store => store.data.code);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 6;

  return (
    <View style={[CONTAINER, styles.container]}>
      <Image
        style={[IMG, {marginVertical: '5%'}]}
        source={require('../../asset/icons/diamond.png')}
      />
      <Text style={[TEXT.SMALL, styles.text]}>
        An OTP will be sent to the entered mobilenumber. registered with
        Diamonium.
      </Text>
      <Text style={[TEXT.SMALL, {marginBottom: 10}]}>
        {code.countryCode} {data.phone}
        {'  '}
        <Text
          onPress={() => props.navigation.navigate('Create-Wallet')}
          style={[TEXT.SMALL, {textDecorationLine: 'underline'}]}>
          Change phone Number
        </Text>
      </Text>
      <View>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <Text style={[TEXT.SMALL, {marginVertical: 20}]}>
        Didn't receive you OTP? <Text>00:05</Text>
      </Text>
      <Buttons
        title="VERIFY OTP"
        buttonStyle={{backgroundColor: COLOR.COLOR.GOLD}}
        onPress={() => alert('OTP verified')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND.BLACK,
    paddingHorizontal: 10,
  },
  text: {marginBottom: 10, textAlign: 'center'},
  input: {
    width: '10%',
  },
  inputText: {
    fontSize: 40,
    textAlign: 'center',
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 25,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLOR.COLOR.GREY,
    borderBottomWidth: 1,
  },
  cellText: {
    color: COLOR.COLOR.WHITE,
    fontSize: 25,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: COLOR.COLOR.GOLD,
    borderBottomWidth: 2,
  },
});
