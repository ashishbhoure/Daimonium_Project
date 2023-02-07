import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/route/router';
import {store} from './src/redux/store';
import {StatusBar} from 'react-native';
import {COLOR} from './src/styles/styles';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar animated={true} backgroundColor={COLOR.BACKGROUND.BLACK} />
      <Router />
    </Provider>
  );
};

export default App;
