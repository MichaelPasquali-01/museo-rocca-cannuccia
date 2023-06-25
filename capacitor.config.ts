import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'RCApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    'community-barcode-scanner': {
      platforms: {
        android: {
          enabled: false
        }
      }
    }
  }

};

export default config;
