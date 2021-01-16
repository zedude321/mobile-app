import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import { AppearanceProvider } from 'react-native-appearance'

AppRegistry.registerComponent(appName, () => {
   return (
      <AppearanceProvider>
         <App />
      </AppearanceProvider>
   )
});
