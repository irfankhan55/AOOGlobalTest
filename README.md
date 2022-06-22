# AAOGlobalTest
Assessment for AAO global (Fast Bitcoin Test App).
NOTE: Please keep an eye on repository I'll keep working on the repository and implement the features WIP

# Prerequisite: 
1) Node Version : v16.15.1
2) NPM Version : 8.11.0
3) react-native-cli : 2.0.1
4) react-native : 0.68.0

# Run Project
Please follow the below procedure to run the project. 
This project is developed and compiled on iOS 15.5

1) clone repository
2) Please delete the yarn.lock and package-lock.json before running
3) cd to AAOGlobalTest
4) npm install
5) cd ios
6) pod install
7) cd ..
8) npm run ios-dev

# Following features are developed.
1) UI by using functional components and hooks.
2) Localization based on the selected language. (en, da) English and Danish for now. more are coming.
3) Redux state management.
4) Redux-persist (language, email, country, and user).
5) Routers Navigation based on user status isUserLoggedIn ? MainApp : Authentication.
6) Country picker component
7) Dashboard and side menu after demo login.


# WIP: 
1) Login / Register through AAO Global API. 
2) Session Monitoring on launch. 
3) Session Monitoring any time in App.
4) Logout if session expired (Clear App data) (Need a login screen for existing users)        
   * if Signup => user registration and option to change language        
   * else existing user login


![Simulator Screen Shot - iPhone 13 - 2022-06-17 at 03 30 21](https://user-images.githubusercontent.com/46451157/174149928-1955bc64-a381-4e69-985c-f226e6cf6a6b.png| width=100)
![Simulator Screen Shot - iPhone 13 - 2022-06-17 at 03 30 49](https://user-images.githubusercontent.com/46451157/174149984-ca3c39b3-36c3-4112-8053-0760fec1640c.png)
![Simulator Screen Shot - iPhone 13 - 2022-06-17 at 03 31 33](https://user-images.githubusercontent.com/46451157/174150090-255abf57-c166-4f5c-a5df-36446c06e780.png)
![Simulator Screen Shot - iPhone 13 - 2022-06-17 at 03 31 42](https://user-images.githubusercontent.com/46451157/174150111-e4aa49e4-978c-4046-abbf-b3239db79379.png)
![Simulator Screen Shot - iPhone 13 - 2022-06-17 at 03 31 49](https://user-images.githubusercontent.com/46451157/174150131-04f59b3a-04fd-4b10-ade6-a15146bc4e4b.png)
