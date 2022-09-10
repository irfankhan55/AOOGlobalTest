// import * as React from "react";
// import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import Routes from '../../../navigators/routes';
// import { PrimaryButton, PrimaryTextField } from "../../../components/atoms";;
// import styles from "./styles";
// import { CountryCode, Country } from '../../../components/molecules/country-picker/types'
// import { useDispatch, useSelector } from "react-redux";
// import Strings from "../../../res/i18n";
// import { WorldCountryPicker } from "../../../components/molecules";
// import { setUserCountry } from '../../../store/authentication/actions';
// import { StoreState } from "~/store/storeState";

// const SelectCountryPage = () => {
//   const defaultCountryFromStore = useSelector((state: StoreState) => state.loginReducer.user?.country)
//   const navigation = useNavigation<NativeStackNavigationProp<any>>();
//   const dispatch = useDispatch();
//   const [countryCode, setCountryCode] = React.useState<CountryCode>(defaultCountryFromStore?.cca2)
//   const [country, setCountry] = React.useState<Country>(defaultCountryFromStore)
  
//   const onSelect = (country: Country) => {
//     setCountryCode(country.cca2)
//     setCountry(country)
//   }

//   return (

//     <View style={styles.container}>
//       <View>
//         <Text style={styles.dummyText}>{Strings.dummyText}</Text>
//         <WorldCountryPicker
//           {...{
//             countryCode,
//             onSelect,
//           }}
//         />
//         {country?.cca2 == 'US' && (
//           //TODO: Make state picker sheet and Create Enum for SelectedCountry US
//           <PrimaryTextField
//             title={Strings.whichStateDoYouLiveIn}
//             placeholder={Strings.yourEmailAddress}
//             value={""}
//             onChangeText={(text: string) => { console.log("TEXT = ,", text) }}
//           />
//         )}
//       </View>

//       <PrimaryButton
//         disabled={country ? false : true}
//         title={Strings.continue}
//         onPress={() => {
//           dispatch(setUserCountry(country));
//           navigation.navigate(Routes.EMAIL_VERFICATION_PAGE, {})
//         }
//         }
//         style={styles.continueButton}
//       />

//     </View>

//   );
// };
// export default SelectCountryPage;


import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert} from 'react-native';
import { PrimaryButton, PrimaryTextField, Input } from "../../../components/atoms";;

import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../res/colors';
import { ScrollView } from 'react-native-gesture-handler';


const LoginScreen = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      // let userData = await AsyncStorage.getItem('userData');
      // if (userData) {
      //   userData = JSON.parse(userData);
      //   if (
      //     inputs.email == userData.email &&
      //     inputs.password == userData.password
      //   ) {
      //     navigation.navigate('HomeScreen');
      //     AsyncStorage.setItem(
      //       'userData',
      //       JSON.stringify({...userData, loggedIn: true}),
      //     );
      //   } else {
      //     Alert.alert('Error', 'Invalid Details');
      //   }
      // } else {
      //   Alert.alert('Error', 'User does not exist');
      // }
    }, 3000);
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error: string, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: colors.WHITE, flex: 1}}>
  
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: colors.BLACK, fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <Text style={{color: colors.GREY_234, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            title="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <PrimaryButton title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: colors.BLACK,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;