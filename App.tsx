/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import  {Provider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk'
import allReducers from './Redux/Configurations'
import PhotoView from "./PhotosView";

const store = createStore(allReducers, applyMiddleware(ReduxThunk));

const App = () => {

  return (
      <Provider store={store}>
        <PhotoView/>
      </Provider>);
};

export default App;
