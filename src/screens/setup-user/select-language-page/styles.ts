import { StyleSheet } from 'react-native';
import { fonts } from '../../../res/styles/font';
import colors from "../../../res/colors";

export default StyleSheet.create({
    titleText: {
        width:'100%',
        textAlign:'center',
        color: colors.AAO_YELLOW,
        marginVertical: 25,
        ...fonts.poppinsXXXL
      },
    continueButton:{
      marginTop:30,
      backgroundColor:colors.AAO_YELLOW,
      width:'100%'
    },
    container: {
      flex: 1,
      backgroundColor: colors.AAO_PRIMARY,
      justifyContent: "center",
      alignItems: "center",
      padding:24
    }
  });