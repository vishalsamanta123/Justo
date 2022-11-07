import { StyleSheet } from "react-native";
import { normalize, normalizeSpacing } from "../scaleFontSize";
import { FONT_FAMILY_SEMIBOLD, GRAY_COLOR, GRAY_LIGHT_COLOR, Isios, PRIMARY_THEME_COLOR, WHITE_COLOR } from "../utilities/constant";

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    // height: 50,
    // backgroundColor: "white",
    // borderRadius: 5,
    // padding: 12,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    // elevation: 2,
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
    color: GRAY_LIGHT_COLOR
  },
  placeholderStyle: {
    fontSize: normalize(18),
    color: GRAY_LIGHT_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  selectedTextStyle: {
    fontSize: normalize(18),
    color: GRAY_LIGHT_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputWrap: {
    marginTop: normalizeSpacing(30),
  },
  mainContainer: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
    backgroundColor: WHITE_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: normalizeSpacing(Isios ? 15 : 5),
    borderColor: GRAY_COLOR,
  },
  inputHeadinView: {
    position: 'absolute',
    top: normalizeSpacing(-10),
    left: normalizeSpacing(20),
    zIndex: 1,
    // backgroundColor: 'transparent',
  },
  inputHeadingText: {
    fontSize: normalize(Isios ? 14 : 16),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: PRIMARY_THEME_COLOR,
  },
})

export default styles