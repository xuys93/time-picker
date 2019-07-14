/* eslint no-console:0 */

import 'rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import TimePickerDemo from '../src/TimePickerDemo';

ReactDom.render(
  <TimePickerDemo/>,
  document.getElementById('__react-content')
);
