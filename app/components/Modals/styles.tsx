import { StyleSheet } from "react-native";
import {
  normalize,
  normalizeHeight,
  normalizeSpacing,
  normalizeWidth,
} from "../scaleFontSize";
import {
  BLACK_COLOR,
  FONT_FAMILY_EXTRABOLD,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  GRAY_COLOR,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "../utilities/constant";

const styles = StyleSheet.create({
  fullContainer: {
    marginLeft: 0,
    width: '100%',
    marginBottom: 0,
  },
  mainContainer: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 5,
  },
  borderView: {
    borderBottomColor: GRAY_COLOR,
    borderBottomWidth: 1,
  },
  topContainer: {
    flexDirection: "row",
    marginVertical: normalizeSpacing(10),
    justifyContent: "space-between",
    marginHorizontal: normalizeSpacing(10),
  },
  topTxt: {
    color: BLACK_COLOR,
    fontSize: normalize(18),
    fontFamily: FONT_FAMILY_EXTRABOLD,
  },
  bottomTxt: {
    color: BLACK_COLOR,
    fontSize: normalize(18),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    textAlign: "center",
  },
  MiddleContainer: {
    marginVertical: normalizeSpacing(10),
  },
  closeIcon: {
    tintColor: "red",
    width: normalizeWidth(30),
    height: normalizeHeight(30),
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputWrap: {
    marginTop: normalizeSpacing(20),
  },

  btnview: {
    width: '50%',
    height: normalizeHeight(50),
  },
  conteconfirm: {
    flexDirection: "column",
  },
  cancelModalVw: {
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
    backgroundColor: PRIMARY_THEME_COLOR,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(5)
  },
  pickerModal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  pickerModalCon: {
    backgroundColor: PRIMARY_THEME_COLOR,
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: normalize(20)
  },
  straightVw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  componentsVw: {
    paddingVertical: normalize(5),
    borderWidth: 1,
    borderColor: WHITE_COLOR,
    alignItems: 'center',
    marginHorizontal: normalize(10),
    borderRadius: 10,
    width: normalizeWidth(70)
  },
  componentsImg: {
    width: normalizeWidth(24),
    height: normalizeHeight(24),
    tintColor: WHITE_COLOR,
  },
  componentsTxt: {
    fontSize: normalize(14),
    color: WHITE_COLOR,
    fontFamily: FONT_FAMILY_REGULAR
  }
});

export default styles;
