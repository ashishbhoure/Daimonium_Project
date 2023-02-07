// Elements

import {Button, Input} from '@rneui/base';
import {CheckBox, Icon} from '@rneui/themed';
import {useState} from 'react';
import {BUTTON, COLOR} from '../styles/styles';
import {Image} from 'react-native';

// Button
export const Buttons = props => {
  return (
    <Button
      title={props.title}
      buttonStyle={[props.buttonStyle, {height: 45}]}
      containerStyle={BUTTON.BIG}
      titleStyle={props.titleStyle}
      onPress={props.onPress}
    />
  );
};

export const InputText = props => {
  const [focus, setFocus] = useState(false);
  const [phone, setPhone] = useState('heelo');

  return (
    <Input
      style={props.style}
      value={props.value}
      placeholder={focus || '' ? '' : props.placeholder}
      label={focus || '' ? props.placeholder : '' || props.label}
      labelStyle={[{color: COLOR.COLOR.GOLD}, props.labelStyle]}
      onFocus={() => setFocus(props.onFocus)}
      onChangeText={props.onChangeText}
      labelProps={false}
      rightIcon={props.rightIcon}
      secureTextEntry={props.secureTextEntry}
      containerStyle={[
        props.containerStyle,
        {paddingBottom: 0, marginBottom: 0},
      ]}
      keyboardType={props.keyboardType}
      inputStyle={[{color: COLOR.COLOR.WHITE}, props.inputStyle]}
      maxLength={props.maxLength}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
    />
  );
};

export const Check_Box = props => {
  return (
    <CheckBox
      containerStyle={{backgroundColor: COLOR.BACKGROUND.TANSPARENT}}
      textStyle={{color: COLOR.COLOR.WHITE}}
      title={props.title}
      checkedIcon={
        <Image
          style={{width: 20, height: 20}}
          source={require('../asset/icons/circle.png')}
        />
      }
      uncheckedIcon={
        <Image
          style={{width: 20, height: 20, tintColor: COLOR.COLOR.GOLD}}
          source={require('../asset/icons/checkbox.png')}
        />
      }
      checked={props.checked}
      onPress={props.onPress}
    />
  );
};
