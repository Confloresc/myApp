import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myApp.app',
  appName: 'myApp',
  webDir: 'www.myApp.com',
  server: {
    androidScheme: 'https'
  }
};

export default config;
