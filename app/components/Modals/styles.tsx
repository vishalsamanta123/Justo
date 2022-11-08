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
  FONT_FAMILY_SEMIBOLD,
  GRAY_COLOR,
  WHITE_COLOR,
} from "../utilities/constant";

const styles = StyleSheet.create({
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
});

export default styles;
