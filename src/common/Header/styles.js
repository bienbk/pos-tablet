import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  contentInfo: {
    // backgroundColor: 'red',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: 80,
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
  },
  container: {
    width: widthDevice,
    height: heightDevice * 0.09,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    // paddingHorizontal: 5,
    paddingBottom: 5,
  },
  containerHome: {
    width: widthDevice,
    height: heightDevice * 0.08,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthDevice,
    // backgroundColor: 'green',
    paddingHorizontal: 5,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageAccount: {
    height: 25,
    width: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  imageLocation: {
    height: 25,
    width: 25,
    marginRight: 1,
    // backgroundColor: 'green',
    alignSelf: 'center',
  },
  textHello: {
    color: Colors.textGrayColor,
    // backgroundColor: 'red',
    marginTop: 2,
  },
  textName: {
    color: Colors.buttonTextColor,
    // flexWrap: 'wrap',
    // flexShrink: 1,
    // backgroundColor: 'red',
    width: '95%',
    lineHeight: 17,
  },
  cartSection: {
    position: 'absolute',
    top: -8,
    right: -5,
    width: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    borderRadius: 20,
    backgroundColor: Colors.button2Color,
  },
  imageBell: {
    width: 19,
    height: 23,
    marginTop: 5,
  },
  containerModalNotify: {
    // paddingTop: 20,
    backgroundColor: Colors.backgroundColor,
    width: widthDevice - 24,
    borderRadius: 10,
    height: heightDevice * 0.69,
    paddingBottom: 20,
  },
  textModal: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 12,
    color: 'white',
  },
  headerModal: {
    height: 50,
    backgroundColor: '#255D54',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  quantity: {
    backgroundColor: Colors.buttonTextColor,
    height: 18,
    width: 18,
    borderRadius: 27,
    marginLeft: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textQuantity: {
    color: Colors.whiteColor,
    fontSize: 9,
    // marginRight: 1,
    marginBottom: 1,
  },
  buttonClose: {
    position: 'absolute',
    top: 5,
    right: 0,
    paddingRight: 5,
    paddingTop: 5,
  },
  errorContainer: {justifyContent: 'center', width: '100%', height: '100%'},
});

export default styles;