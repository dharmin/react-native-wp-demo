# React Native WP API Demo

This is demo that uses exposed data by [wpgraphql](https://wpgraphql.com), build with React Native, [React Navigation](https://reactnavigation.org/), [Expo](https://expo.io/), Apollo Graphql.

![wp-react-native](https://user-images.githubusercontent.com/29889620/66892512-877d0480-f009-11e9-9fd7-8fb368933474.gif)

## How to get started with project?

### Expo

First of all make sure that [expo-cli](https://docs.expo.io/versions/latest/workflow/expo-cli/) is installed globally in your machine.
This can be installed by running `npm install -g expo-cli`.

### Emulator

For getting live feedback from our application, we need to setup emulator.
There are two ways to setup your emulator in your local machine:

- Xcode(Only for mac) <br/>
  For setting up emulator in Xcode checkout here. <br/>
  https://docs.expo.io/versions/v35.0.0/workflow/ios-simulator/

* Android Studio <br/>
  For setting up emulator in Android Studio. Checkout this guide. <br/>
  https://docs.expo.io/versions/v35.0.0/workflow/android-studio-emulator/

### Debugging

Debugging React Native sometimes becomes a painful task so for that we need to use some tools.
There are two ways to do that:

- Web <br />
  For that you specifically need [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) if you are using it. <br />
  But, there are problem with this approach and most of the time your application with connect with developer tools but you are unable to show the react dom structure and all.

- React Native Developer Tools(Recommended) <br />
  This is a combination of React Dev Tools, Redux Dev Tools and all chrome dev tools that you need to debug your app.
  Download it from here: https://github.com/jhen0409/react-native-debugger

### Start developing application

NOTE: To Open Developer menu. Press `Cmd + d` on IOS and `Ctrl/Cmd + M` on Android emulator.

There are different ways you can start your development. Here are the following commands:

- `start` : Starts a normal dev server. <br />
  To start debugging via this command you need to open developer menu and select `Debug Remote JS` option.

* `android`: To start android emulator.

* `ios`: To start IOS emulator

* `debug`: By this command you don't need to run your app in debug mode manually. But make sure you should have React Native Developer Tools installed.

There's an alternative to check your application on you phone. For that you need to download Expo android/ios app. Check this: <br />
https://docs.expo.io/versions/latest/guides/testing-on-devices/
