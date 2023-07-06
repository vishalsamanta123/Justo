import { StyleSheet } from 'react-native';
import { normalize, normalizeHeight, normalizeSpacing, normalizeWidth } from '../../../../components/scaleFontSize';
import {
  BLACK_COLOR,
  FONT_FAMILY_EXTRABOLD,
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_SEMIBOLD,
  GRAY_COLOR,
  GRAY_LIGHT_COLOR,
  PRIMARY_THEME_COLOR,
  PRIMARY_THEME_COLOR_DARK,
  WHITE_COLOR,
} from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: PRIMARY_THEME_COLOR,
  },
  headerTextStyle: {
    color: WHITE_COLOR,
  },
  leftImageIconStyle: {
    tintColor: WHITE_COLOR,
  },
  wrap: {
    flexGrow: 1,
    marginHorizontal: normalizeSpacing(20),
  },
  headingText: {
    fontSize: normalize(18),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: PRIMARY_THEME_COLOR,
    textAlign: 'center'
  },
  underlineStyle: {
    width: normalizeWidth(60),
    height: normalizeHeight(1),
    backgroundColor: GRAY_COLOR,
    marginTop: normalizeSpacing(5),
  },
  imageCircle: {
    backgroundColor: GRAY_COLOR,
    marginVertical: normalizeSpacing(10),
    borderRadius: normalizeSpacing(100),
    height: normalizeHeight(100),
    width: normalizeWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  pickerImageVw: {
    width: normalizeWidth(100),
    height: normalizeHeight(100),
    borderRadius: 50,
  },
  inputWrap: {
    marginTop: normalizeSpacing(30),
  },
  tickImgVw: {
    backgroundColor: PRIMARY_THEME_COLOR,
    borderRadius: normalize(50),
    marginRight: normalize(15),
    padding: normalize(2)
  },
  tickImg: {
    height: normalizeHeight(18),
    width: normalizeWidth(18),
    tintColor: WHITE_COLOR
  },
  genderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalizeSpacing(10),
    width: '100%'
  },
  TypeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalizeSpacing(10),
    width: '100%'
  },
  genderTxt: {
    fontSize: normalize(18),
    // fontWeight: 'bold',
    color: PRIMARY_THEME_COLOR,
  },
  applicableTxt: {
    fontSize: normalize(18),
    // fontWeight: 'bold',
    color: PRIMARY_THEME_COLOR,
    marginTop: 20,
    textAlign: 'center'
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalizeSpacing(10)
  },
  radioTxt: {
    fontSize: normalize(18),
  },
  workingView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalizeSpacing(10)
  },
  addBtn: {
    backgroundColor: PRIMARY_THEME_COLOR,
    width: normalizeWidth(140),
    height: normalizeHeight(25),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addTxt: {
    color: WHITE_COLOR,
    textTransform: 'uppercase',
    fontSize: normalize(13),
    fontFamily: FONT_FAMILY_EXTRABOLD
  },
  browseVw: {
    backgroundColor: WHITE_COLOR,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: normalize(10),
    borderRadius: normalize(10),
    paddingVertical: normalize(12),
    top: normalize(8),
  },
  workTxt: {
    color: BLACK_COLOR,
    textTransform: 'uppercase',
    fontSize: normalize(13),
    fontFamily: FONT_FAMILY_EXTRABOLD
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalizeSpacing(20),
    alignSelf: 'center',
  },
  loginBanner: {
    width: normalizeSpacing(100),
    height: normalizeSpacing(100),
    borderRadius: normalizeSpacing(50),
  },
  DummyloginBanner: {
    width: normalizeSpacing(100),
    height: normalizeSpacing(100),
    borderRadius: normalizeSpacing(50),
  },
  loginBannerView: {
    height: '100%',
    width: '100%',
    // borderBottomLeftRadius: width,
    // borderBottomRightRadius: width,
    // // borderRadius: width,
    // width: width * 2,
    // height: width * 2,
    // marginLeft: -(width / 2),
    // position: 'absolute',
    // bottom: 0,
    // overflow: 'hidden',
  },
  editView: {
    position: 'absolute',
    top: 5,
    bottom: 0,
    right: 0
  },
  editImage: {
    width: normalizeWidth(20),
    height: normalizeHeight(20),
    backgroundColor: GRAY_COLOR,
    borderRadius: 100
  },
  inputBoxVw: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    padding: normalizeSpacing(5),
    borderColor: GRAY_COLOR,
    width: '100%',
    marginTop: normalize(6)
  },
  inputBoxItmVw: {
    paddingVertical: normalize(5),
    borderBottomWidth: 0.6,
    borderColor: BLACK_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputBoxItmTxt: {
    fontSize: normalize(16),
    paddingRight: normalizeSpacing(30),
    // paddingLeft: normalizeSpacing(Isios ? 5 : 15),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    opacity: 0.6,
    color: BLACK_COLOR,
    width: '90%'
  },
  crossVw: {
    width: normalizeWidth(18),
    height: normalizeHeight(18),
    marginHorizontal: 5,
    tintColor: BLACK_COLOR
  },
  deleteVw: {
    width: normalizeWidth(28),
    height: normalizeHeight(28),
    marginHorizontal: 5,
    tintColor: BLACK_COLOR,
  },
  addedTxt: {
    width: '80%',
    fontSize: 11,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: normalize(12),
    top: normalize(10)
  },
  bottomView: {
    flex: 2,
    // width: '80%',
    alignContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: normalizeSpacing(10),
  },
  spanTouch: {
    flexDirection: 'row'
  },
  spanText: {
    textAlign: 'center',
    fontSize: normalize(14),
    // lineHeight: normalizeHeight(10),
    color: PRIMARY_THEME_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD,

  },
  bottomText: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalizeHeight(25),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: GRAY_LIGHT_COLOR
  },
  bottomContentView: {
    flexDirection: 'row',
    // width: '80%',
  },
  straightVw: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalizeSpacing(10),
    marginTop: normalizeSpacing(20),
  },
  employeeView:{
    flex: 1,
  },
  IteamView: {
    backgroundColor: WHITE_COLOR,
    marginHorizontal: normalizeSpacing(10),
    borderRadius: 10,
    marginVertical: normalizeSpacing(10),
  },
  Txtview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: GRAY_COLOR,
    borderBottomWidth: 1,
    padding: normalizeSpacing(4),
    marginTop: normalizeSpacing(2),
  },
  propertyTxtview: {
    flexDirection: 'row',
    // alignItems: 'center',
    padding: normalizeSpacing(4),
    marginTop: normalizeSpacing(2),
  },
  projectContainer: {
    flex: 3,
    alignItems: 'flex-end',
  },
  projectTxt: {
    fontSize: normalize(15),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: GRAY_LIGHT_COLOR
  },
  nameContainer: {
    flex: 3.5,
    alignItems: 'flex-start',
  },
  nameTxt: {
    fontSize: normalize(15),
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: BLACK_COLOR,
    marginHorizontal: normalizeSpacing(10)
  },
  propertyWrap:{
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: GRAY_COLOR,
    marginTop: 10,
  },
  btnContainer:{
    alignItems: 'flex-end',
    padding: 5

  },
  innerBoxVw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(5),
    marginVertical: normalize(5),
    borderRadius: normalize(8),
    borderColor: PRIMARY_THEME_COLOR_DARK,
},
innerBoxTxt: {
  fontSize: normalize(13),
  color: PRIMARY_THEME_COLOR_DARK,
  fontFamily: FONT_FAMILY_MEDIUM,
  width: '90%'
},
});

export default styles;
