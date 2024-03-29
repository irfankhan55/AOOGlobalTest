import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.AAO_PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: colors.AAO_GRAY_BORDER,
    borderRadius: 4,
    borderWidth: 1
  },
  buttonText: {
    backgroundColor: colors.AAO_PRIMARY,
    color:colors.AAO_GRAY_TEXT,
    flex: 1,
    textAlign: 'left',
    padding:10
  },
  itemlabel:{
    color: colors.WHITE
  },
  icon: {
    color:colors.AAO_GRAY_BORDER,
    marginRight: 10,
  },
  dropdown: {
    flex:1,
    paddingHorizontal:25,    
    backgroundColor: colors.AAO_PRIMARY,
    maxHeight: '35%',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    justifyContent: 'center',
    backgroundColor: colors.AAO_PRIMARY,
    height:60,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
