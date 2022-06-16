import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import {PrimaryButton, PrimaryTextField } from "../../../components/atoms";
import styles from "./styles";
import Strings from "../../../res/i18n";
import {KeyboardAwareView} from "../../../components/atoms/keyboard-aware-view";
import { setUserEmail } from '../../../store/authentication/actions';
import { useDispatch } from "react-redux";

const EnterEmailPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [email, setEmail] =  React.useState<string>('')
  const dispatch = useDispatch();
  const onChangeEmail = (email: string) => {
    // TODO: Email validation
    setEmail(email);
  }
  return (
  
        <KeyboardAwareView style={styles.container} >
          <PrimaryTextField
            title={Strings.email}
            placeholder={Strings.yourEmailAddress}
            value={email}
            onChangeText={(text:string) => onChangeEmail(text)}
          />
          <PrimaryButton
              disabled={email ? false: true}
              title={Strings.continue}
              onPress={() => {
                dispatch(setUserEmail(email));
                navigation.navigate(Routes.SELECT_COUNTRY_SCREEN)
              }}
              style={styles.continueButton}
            />
        </KeyboardAwareView>
    
  );
};
export default EnterEmailPage;