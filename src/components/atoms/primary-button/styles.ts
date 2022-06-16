import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles';

import colors from '../../../res/colors';

export default StyleSheet.create({
  text: {
    color: colors.TEXT_WHITE,
    textAlign: 'center',
    ...fonts.boldXXL
  },
  icon: {
    marginRight: 16
  },
  button: {
    height: 58,
    paddingHorizontal: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonBackgroundNormal: {
    backgroundColor: colors.AAO_YELLOW
  },
  buttonBackgroundDisabled: {
    backgroundColor: colors.AAO_DISABLED_BUTTON
  },
  titleDisabled: {
    color: colors.TEXT_PRIMARY_BLACK_20,
    ...fonts.boldXXL
  },
  titleNormal: {
    color: colors.TEXT_PRIMARY,
    ...fonts.boldXXL
  }
});
