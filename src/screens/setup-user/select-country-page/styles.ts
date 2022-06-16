import { StyleSheet } from 'react-native';
import colors from "../../../res/colors";

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.AAO_PRIMARY_WHITE, //Set Header color
  },

  container: {
    flex: 1,
    backgroundColor: colors.AAO_PRIMARY_WHITE,
    justifyContent: 'space-between',
    padding: 24
  },
  input: {
    backgroundColor: colors.AAO_GRAY_BORDER,
    height: 50,
    width: 300,
    marginVertical: 20,
    borderColor: colors.AAO_GRAY_BORDER,
    borderWidth: 1
  },
  continueButton: {
    marginBottom: 10,
    width: '100%'
  },
  dummyText: {
    textAlign: 'center',
    padding: 10
  }
});