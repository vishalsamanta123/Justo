import {StyleSheet} from 'react-native';
import {normalize, normalizeHeight} from '../../../../components/scaleFontSize';
import { FONT_FAMILY_EXTRABOLD, WHITE_COLOR } from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE_COLOR
  },
  justoText: {
    fontSize: normalize(40),
    fontFamily: FONT_FAMILY_EXTRABOLD,
  },
  justoImage: {
    width: '60%',
    height: normalizeHeight(150)
  }
});

export default styles;
