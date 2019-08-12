/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppNavigation from './src/AppNavigation'
import {createStore, combineReducers} from 'redux'
import {VenueDetailReducer} from './src/reducers/VenueDetailReducer'
import {Provider} from 'react-redux'

const reducer = combineReducers({VenueDetailReducer})

const store = createStore(reducer)
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
          <AppNavigation/>
      </Provider>
    );
  }
}

