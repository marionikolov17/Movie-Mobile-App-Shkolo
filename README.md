# Movie App

> [!WARNING]
> I haven't built the app for ios, because I don't have macOS or Apple Developer paid membership. This app is using
native libraries and they are not working with Expo Go, so it should be tested with Android device or Android Emulator.

### Facebook Test Credentials
Email: markata56@abv.bg <br />
Password: 123456Mario

## How to Set-up the server

> [!IMPORTANT]  
> You must have installed Xampp, PHP, Composer and Laravel

1. Open Xampp and start 'Apache' and 'MySQL' services.
2. Go to localhost/phpmyadmin and create Database called 'server'
3. In your editor open new terminal and type the following commands:
```
cd server
php artisan serve
```
4. After that leave the server to work, otherwise the mobile app can't get its data.

## How to Set-up the mobile app
1. Clone the repository on your machine
2. Open new terminal and type:
```
cd client
npm install
```
3. After completing the installation, You must configure these things:
    1. [Install and configure Android Studio and Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
    2. [Install EAS](https://docs.expo.dev/build/setup/)
    3. Make an anroid build with the following command and make sure that the emulator is started
    ```
    eas build -p android --profile development
    ```
4. After successful build, type in the terminal:
```
npm start
```
5. Then when the Metro Bundler has started, type 'a' in the terminal and it will open the app on the emulator.