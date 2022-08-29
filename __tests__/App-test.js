/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import PImage from './../src/component/Image';
 
 // Note: test renderer must be required after react-native.
 import {render, cleanup} from 'react-native-testing-library';
 
 
 afterEach(cleanup);
 
 
 describe('<PImage />', () => {
   it('should match snapshot', () => {
     const rendered = render(<PImage source={require('../../assets/img/logom.png')} />).toJSON();
     
     expect(rendered).toMatchSnapshot();
   });
 });
 