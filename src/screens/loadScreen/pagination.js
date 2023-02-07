import {Image, StyleSheet, Text, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {CONTAINER, IMG, TEXT} from './../../styles/styles';

export const Pager_View = () => {
  return (
    <PagerView showPageIndicator={true} style={styles.pageView} initialPage={0}>
      <Page title={'Privacy for Everyone'} />
      <Page title={'Super Fast and Scalable'} />
      <Page title={'Government compliant'} />
      <Page title={'Bitcoin and Ethereum United'} />
    </PagerView>
  );
};

const Page = ({title}) => {
  return (
    <View style={CONTAINER}>
      <Text style={TEXT.HEAD}>DIAMONIUM</Text>
      <Text style={TEXT.SMALL}>GLOBAL TRADING MONEY</Text>
      <Image
        style={[IMG, {marginVertical: '35%'}]}
        source={require('../../asset/icons/diamond.png')}
      />
      <Text style={TEXT.MEDIUM}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    width: '100%',
    top: '5%',
  },
});
