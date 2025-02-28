# Home Service App

A modern and accessible home service application built with React Native CLI. This app supports both iOS and Android platforms with features like dual theme support and bilingual interface (English & Arabic).

## 🌟 Features

- Dual Theme Support (Light/Dark mode)
- Bilingual Support (English/Arabic)
- Modern UI/UX with smooth transitions
- Cross-platform (iOS & Android)
- Redux state management with persistence
- Form validation and handling
- Google Sign-in integration
- Supabase backend integration
- Toast notifications

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Moazam05/native-cli-home-service.git
cd native-cli-home-service
```

2. Install dependencies:
```bash
npm install
```

3. iOS specific setup:
```bash
cd ios
pod install
cd ..
```

4. Create a `.env` file in the root directory with the following variables:
```env
# Supabase Configuration
SUPABASE_URL="your-supabase-url"
SUPABASE_ANON_KEY="your-supabase-anon-key"

# Google Sign-in Configuration
WEB_CLIENT_ID="your-google-web-client-id"
```

Replace these values with your actual credentials:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `WEB_CLIENT_ID`: Google Sign-in Web Client ID from Google Cloud Console

Note: Never commit your actual .env file to version control. Add .env to your .gitignore file.

## 🏃‍♂️ Running the App

### iOS
```bash
# Normal run
npm run ios

# Clean build
npm run ios-clean
```

### Android
```bash
# Normal run
npm run android

# Clean build
npm run android-clean
```

### Development Server
```bash
npm start
```

## 📱 Supported Platforms

- iOS: Tested on iOS 13 and above
- Android: API level 21 (Android 5.0) and above

## 🛠️ Tech Stack

- React Native 0.76.5
- React Navigation v7
- Redux Toolkit & Redux Persist
- @react-native-google-signin/google-signin
- i18next & react-i18next
- Formik & Yup
- React Native Linear Gradient
- React Native Vector Icons
- Supabase
- TypeScript
- And more...

## 🔧 Third Party Service Setup

1. Create a Supabase account and project
2. Set up Google Cloud Console project for Google Sign-in
3. Configure your environment variables in the .env file

## 🎨 Design

The UI/UX design follows the Figma template available at:
[DoorHub Home Service UI Kit](https://www.figma.com/design/1ka6LQySfHSXe7WSNQJTjY/Home-Service-UI-KIt--DoorHub)

## Author

Salman Muazam


## Screenshots

![Not Found](https://i.postimg.cc/MTszjQdS/1.jpg)
![Not Found](https://i.postimg.cc/fWrwzYV7/2.jpg)
![Not Found](https://i.postimg.cc/dVMwdvmL/2a.jpg)
![Not Found](https://i.postimg.cc/VvrPrHJq/2b.jpg)
![Not Found](https://i.postimg.cc/HWRgDHNB/2c.jpg)
![Not Found](https://i.postimg.cc/7Yzyqd8D/3.jpg)
![Not Found](https://i.postimg.cc/9Qt579Qn/3a.jpg)
![Not Found](https://i.postimg.cc/ydGwHXLk/4.jpg)
![Not Found](https://i.postimg.cc/qgVStBVr/4a.jpg)
![Not Found](https://i.postimg.cc/8zHkV9Mc/5.jpg)
![Not Found](https://i.postimg.cc/s2gjfm4c/7.jpg)
![Not Found](https://i.postimg.cc/bNfqSpRd/7a.jpg)
![Not Found](https://i.postimg.cc/pL2xkC4H/8.jpg)
![Not Found](https://i.postimg.cc/fycnfSvy/8a.jpg)
![Not Found](https://i.postimg.cc/bYkhh4jP/8b.jpg)
![Not Found](https://i.postimg.cc/KvbyvQZM/8c.jpg)
![Not Found](https://i.postimg.cc/NjfqRM2G/9.jpg)
![Not Found](https://i.postimg.cc/VNdxHVF3/10.jpg)
![Not Found](https://i.postimg.cc/W4Fy7JNV/11.jpg)
![Not Found](https://i.postimg.cc/63C1kJ41/12.jpg)
![Not Found](https://i.postimg.cc/BZcVN30j/13.jpg)
![Not Found](https://i.postimg.cc/QCrvCxr3/15.jpg)
