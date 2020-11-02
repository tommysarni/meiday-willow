/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HKApp from './HK.ios';

AppRegistry.registerComponent(appName, () => HKApp);
