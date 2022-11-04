import {StyleSheet} from 'react-native';
import {
  normalize,
  normalizeHeight,
  normalizeSpacing,
  normalizeWidth,
} from '../scaleFontSize';
import {FONT_FAMILY_SEMIBOLD} from '../utilities/constant';

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: normalizeSpacing(10),
    marginHorizontal: normalizeSpacing(20),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: normalizeSpacing(15),
  },
  input: {
    fontSize: normalize(15),
    color: 'black',
    paddingRight: normalizeSpacing(30),
    width: '90%',
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  rightImage: {
    height: normalizeHeight(25),
    width: normalizeWidth(25),
    opacity: 0.5,
  },
});

export default styles;
