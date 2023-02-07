import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/registration/loginScreen';
import Mainpage from '../screens/loadScreen/mainPage';
import CreateWallet from '../screens/registration/createWallet';
import OTP_Screen from '../screens/registration/OTPScreen';
import RestoreScreen from '../screens/registration/restoreScreen';
import HomeScreen from './../screens/homeScreen/homeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR, ICON} from './../styles/styles';
import {Image, StyleSheet, View} from 'react-native';
import ReceiveScreen from '../screens/homeScreen/receive';
// import ScanScreen from '../screens/homeScreen/scanScreen';
import SendScreen from '../screens/homeScreen/send';
import {HeaderTitle, Logo, SettingIcon} from './header';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import ModelView from './../screens/setting/model';
import Passcode_Screen from './../screens/registration/passcode';
import UserInfo_Screen from './../screens/homeScreen/userInfo';
// import Support_Screen from '../screens/homeScreen/supportScreen';
// import ScanScreen from './../screens/homeScreen/scanScreen';
import Account_Screen from './../screens/setting/account';
import Currency_Screen from './../screens/setting/currency';
import Transactions_Screen from './../screens/setting/transactions';
import Notifications_Screen from './../screens/setting/notification';
import ScanScreen from '../screens/homeScreen/supportScreen';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const hide_header = {headerShown: false};

const TabNavigator = () => {
  const Icon = [
    {screen: 'Home', icon: require('../asset/img/home.png')},
    {screen: 'Receive', icon: require('../asset/img/receive.png')},
    {screen: 'Send', icon: require('../asset/img/send.png')},
    {screen: 'Support', icon: require('../asset/img/support.png')},
  ];
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({route}) => ({
        tabBarStyle: {height: 60},
        tabBarIcon: ({focused}) => {
          let iconName;
          let rn = route.name;
          const tab = Icon.map(icon => {
            if (rn === icon.screen) {
              iconName = (
                <Image
                  style={focused ? styles.focusedTab : styles.tab}
                  source={icon.icon}
                />
              );
            }
            return iconName;
          });

          if (rn === 'Scan') {
            iconName = (
              <View style={styles.scanIcon}>
                <Image
                  style={[{tintColor: COLOR.COLOR.WHITE}, ICON.MEDIUM]}
                  source={require('../asset/img/scan.png')}
                />
              </View>
            );
          }
          return tab, iconName;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: COLOR.BACKGROUND.BLACK,
        inactiveBackgroundColor: COLOR.BACKGROUND.BLACK,
        activeTintColor: COLOR.COLOR.GOLD,
        inactiveTintColor: COLOR.COLOR.WHITE,
        labelStyle: {paddingBottom: 10, fontSize: 10},
        style: {padding: 10, height: 70, borderTopWidth: 0, elevation: 0},
      }}
      style={{backgroundColor: 'black'}}>
      <Tab.Screen options={hide_header} name={'Home'} component={HomeScreen} />
      <Tab.Screen
        options={hide_header}
        name={'Receive'}
        component={ReceiveScreen}
      />
      <Tab.Screen
        name={'Scan'}
        options={{title: '', headerShown: false}}
        component={ScanScreen}
      />
      <Tab.Screen options={hide_header} name={'Send'} component={SendScreen} />
      <Tab.Screen
        options={hide_header}
        name={'Support'}
        component={ScanScreen}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadScreen">
        <Stack.Screen
          name="LoadScreen"
          component={Mainpage}
          options={hide_header}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={hide_header}
        />
        <Stack.Screen
          name="RestoreScreen"
          component={RestoreScreen}
          options={hide_header}
        />
        <Stack.Screen
          name="Create-Wallet"
          component={CreateWallet}
          options={hide_header}
        />
        <Stack.Screen
          name="Passcode"
          component={Passcode_Screen}
          options={hide_header}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{
            headerLeft: () => <Logo />,
            headerTitle: () => <HeaderTitle />,
            headerRight: () => <SettingIcon />,
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="OTP_Verification"
          component={OTP_Screen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ModelView"
          component={ModelView}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfo_Screen}
          options={{
            title: 'PROFILE',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            titleStyle: {textAlign: 'center', alignItems: 'center'},
          }}
        />
        <Stack.Screen
          name="AccountScreen"
          component={Account_Screen}
          options={{
            title: 'ACCOUNTS',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            titleStyle: {textAlign: 'center', alignItems: 'center'},
          }}
        />
        <Stack.Screen
          name="CurrencyScreen"
          component={Currency_Screen}
          options={{
            title: 'CURRENCY',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            titleStyle: {textAlign: 'center', alignItems: 'center'},
          }}
        />
        <Stack.Screen
          name="TansactionsScreen"
          component={Transactions_Screen}
          options={{
            title: 'TRANSACTIONS',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            titleStyle: {textAlign: 'center', alignItems: 'center'},
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={Notifications_Screen}
          options={{
            title: 'NOTIFICATIONS',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            titleStyle: {textAlign: 'center', alignItems: 'center'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scanIcon: {
    backgroundColor: COLOR.BACKGROUND.GOLD,
    padding: 10,
    borderRadius: 50,
    bottom: 15,
  },
  tab: [{tintColor: COLOR.COLOR.WHITE}, ICON.SMALL],
  focusedTab: [{tintColor: COLOR.COLOR.GOLD}, ICON.X_SMAll],
});
