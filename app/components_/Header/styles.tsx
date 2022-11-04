import {StyleSheet} from 'react-native';
import {
  normalize,
  normalizeHeight,
  normalizeSpacing,
  normalizeWidth,
} from '../scaleFontSize';
import {FONT_FAMILY_SEMIBOLD, PRIMARY_THEME_COLOR_DARK} from '../utilities/constant';

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalizeSpacing(10),
  },
  imageStyle: {
    height: normalizeHeight(30),
    width: normalizeWidth(30),
  },
  headerTextView: {
    justifyContent: 'center',
  },
  headerText: {
    fontSize: normalize(20),
    color: 'white',
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
});

export default styles;
