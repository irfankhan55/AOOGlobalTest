import { StyleSheet } from 'react-native';
import colors from "../../../res/colors";


export default StyleSheet.create({
    headerStyle:{
      backgroundColor: colors.AAO_PRIMARY_WHITE,
    },
    continueButton:{
      flexDirection:'column',
      marginVertical:20,
      width:'100%'
    },
    container: {
      flex:1,
      backgroundColor: colors.AAO_PRIMARY_WHITE,
      padding:24
    },

  });