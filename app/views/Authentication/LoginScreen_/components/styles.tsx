import {StyleSheet} from 'react-native';
import {
  normalize,
  normalizeHeight,
  normalizeSpacing,
  normalizeWidth,
} from '../../../../components/scaleFontSize';
import {FONT_FAMILY_SEMIBOLD, PRIMARY_THEME_COLOR, WHITE_COLOR} from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logoView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: normalizeHeight(150),
    width: normalizeWidth(200),
  },
  inputView: {
    flex: 3,
  },
  forgotTouch: {
    alignItems: 'flex-end',
    marginHorizontal: normalizeSpacing(20),
  },
  forgotText: {
    fontSize: normalize(15),
    fontWeight: '600',
    color: PRIMARY_THEME_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  bottomView: {
    flex: 2,
    alignContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: normalizeSpacing(40),
    marginHorizontal: normalizeSpacing(30),
  },
  dontHaveView: {
    flexDirection: 'row',
    marginHorizontal: normalizeSpacing(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalizeSpacing(20),
  },
  dontText: {
    fontSize: normalize(13),
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  registerTouch: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 50,
    paddingHorizontal: normalizeSpacing(30),
    paddingVertical: normalizeSpacing(12),
  },
  registerText: {
    fontSize: normalize(15),
    color: PRIMARY_THEME_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD
  },
  bottomText: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalizeHeight(25),
    fontFamily: FONT_FAMILY_SEMIBOLD
  },
  spanTouch: {
    // backgroundColor: 'red',
  },
  spanText: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalizeHeight(25),
    color: PRIMARY_THEME_COLOR,
    fontFamily: FONT_FAMILY_SEMIBOLD
  },
});

export default styles;
