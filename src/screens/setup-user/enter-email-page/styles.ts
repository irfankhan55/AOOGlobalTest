import { StyleSheet } from 'react-native';
import colors from "../../../res/colors";

export default StyleSheet.create({
    headerStyle:{
      backgroundColor: colors.AAO_PRIMARY_WHITE,
    },
    continueButton:{
      marginBottom:10,
      width:'100%'
    },
    container: {
      flex: 1,
      backgroundColor: colors.AAO_PRIMARY_WHITE,
      justifyContent: 'space-between',
      padding:24
    },

  });