import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Buttons, InputText} from '../../elements/elements';
import {COLOR, CONTAINER} from '../../styles/styles';
import {IMG, TEXT, ICON} from '../../styles/styles';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default Passcode_Screen = props => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;

  const inputValue = async code => {
    try {
      await AsyncStorage.setItem('code', value);
    } catch (e) {
      console.log(e);
    }
    setValue(code);
    if (value.length === 5) {
      console.log(value);
      try {
        await AsyncStorage.getItem('code');
      } catch (e) {
        console.log(e);
      }
      // console.log(a);
      props.navigation.navigate('HomeScreen');
    }
  };

  return (
    <View style={[CONTAINER, styles.container]}>
      <Text
        onPress={() => props.navigation.navigate('Create-Wallet')}
        style={[TEXT.MEDIUM, {fontWeight: 'bold'}]}>
        Set Your Passcode
      </Text>
      <View>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          secureTextEntry={true}
          onChangeText={text => inputValue(text)}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND.BLACK,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   text: {marginBottom: 10, textAlign: 'center'},
  //   input: {
  //     width: '10%',
  //   },
  //   inputText: {
  //     fontSize: 40,
  //     textAlign: 'center',
  //     borderColor: 'red',
  //     borderWidth: 1,
  //   },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR.COLOR.GOLD,
    borderWidth: 2,
  },
  cellText: {
    color: COLOR.COLOR.GOLD,
    fontSize: 35,
    textAlign: 'center',
  },
  //   focusCell: {
  //     borderBottomColor: COLOR.COLOR.GOLD,
  //     borderBottomWidth: 2,
  //   },
});
