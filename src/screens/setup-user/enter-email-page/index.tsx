import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import { PrimaryButton, PrimaryTextField } from "../../../components/atoms";
import styles from "./styles";
import Strings from "../../../res/i18n";
import { KeyboardAwareView } from "../../../components/atoms/keyboard-aware-view";
import { setUserEmail } from '../../../store/authentication/actions';
import { useDispatch } from "react-redux";
import Utils from '../../../utilities/ValidationUtils'
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Image,
  Platform,
  Animated,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";



const EnterEmailPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [email, setEmail] = React.useState<string>('')
  const dispatch = useDispatch();
  const onChangeEmail = (email: string) => {
    setEmail(email);
  }

  const scrollOffsetY = new Animated.Value(0)
  const H_MAX_HEIGHT = 150;
  const H_MIN_HEIGHT = 60;
  const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  const isValid = (email: string): boolean => {
    return Utils.isEmailValid(email)
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: Strings.enterYourEmailAddress })
  },[navigation]);
  return (
<SafeAreaView style={{flex:1,backgroundColor: 'black'}}>
<KeyboardAwareView  >

<Animated.View
  style={{
    left: 0,
    right: 0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "black",
    height: headerScrollHeight,
  }}
  >
   <Text style={{textAlign:'center', color:"red", fontSize: 18, padding: 20}}> Add Your Info</Text>
   <Text style={{ textAlign:'center', color:"red", fontSize: 18, padding: 20}}> To Complete your Info</Text>
</Animated.View>
    <ScrollView
        style={{padding: 10,backgroundColor:"black"}}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
        ],{useNativeDriver: false})}
        scrollEventThrottle={16}
        >
     <View style={{height: 800}}>
      <PrimaryTextField
        title={Strings.email}
        placeholder={Strings.yourEmailAddress}
        value={email}
        onChangeText={(text: string) => onChangeEmail(text)}
      />
     
         <PrimaryTextField
        title={Strings.email}
        placeholder={Strings.yourEmailAddress}
        value={email}
        onChangeText={(text: string) => onChangeEmail(text)}
      />
       <PrimaryTextField
        title={Strings.email}
        placeholder={Strings.yourEmailAddress}
        value={email}
        onChangeText={(text: string) => onChangeEmail(text)}
      />
       <PrimaryTextField
        title={Strings.email}
        placeholder={Strings.yourEmailAddress}
        value={email}
        onChangeText={(text: string) => onChangeEmail(text)}
      />
       <PrimaryTextField
        title={Strings.email}
        placeholder={Strings.yourEmailAddress}
        value={email}
        onChangeText={(text: string) => onChangeEmail(text)}
      />
      
      <PrimaryButton
     
        disabled={isValid(email) ? false : true}
        title={Strings.continue}
        onPress={() => {
          dispatch(setUserEmail(email));
          navigation.navigate(Routes.SELECT_COUNTRY_SCREEN)
        }}
        style={styles.continueButton}
      />
      </View>

    </ScrollView>
  
    </KeyboardAwareView>
    
</SafeAreaView>


  );
};
export default EnterEmailPage;