import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Image} from 'react-native';
import {COLOR} from '../styles/styles';

export const BarIcon = props => {
  const focused = props.focused;
  let iconName;
  let rn = props.route.name;

  if (rn === 'Home') {
    iconName = focused ? (
      <Image
        style={[{tintColor: 'gold'}, ICON.SMALL]}
        source={require('../asset/img/home.png')}
      />
    ) : (
      <Image
        style={[{tintColor: 'white'}, ICON.SMALL]}
        source={require('../asset/img/home.png')}
      />
    );
  } else if (rn === 'Receive') {
    iconName = focused ? (
      <Image
        style={[{tintColor: 'gold'}, ICON.SMALL]}
        source={require('../asset/img/receive.png')}
      />
    ) : (
      <Image
        style={[{tintColor: 'white'}, ICON.SMALL]}
        source={require('../asset/img/receive.png')}
      />
    );
  } else if (rn === 'Scan') {
    iconName = (
      <View style={styles.scanIcon}>
        <Image
          style={[{tintColor: COLOR.COLOR.WHITE}, ICON.MEDIUM]}
          source={require('../asset/img/scan.png')}
        />
      </View>
    );
  } else if (rn === 'Send') {
    iconName = focused ? (
      <Image
        style={[{tintColor: 'gold'}, ICON.SMALL]}
        source={require('../asset/img/send.png')}
      />
    ) : (
      <Image
        style={[{tintColor: 'white'}, ICON.SMALL]}
        source={require('../asset/img/send.png')}
      />
    );
  } else if (rn === 'Support') {
    iconName = focused ? (
      <Image
        style={[{tintColor: 'gold'}, ICON.SMALL]}
        source={require('../asset/img/support.png')}
      />
    ) : (
      <Image
        style={[{tintColor: 'white'}, ICON.SMALL]}
        source={require('../asset/img/support.png')}
      />
    );
  }
  return iconName;
};

const styles = StyleSheet.create({
  scanIcon: {
    backgroundColor: COLOR.BACKGROUND.GOLD,
    padding: 10,
    borderRadius: 50,
    bottom: 15,
  },
});
