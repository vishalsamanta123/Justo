import {StyleSheet} from 'react-native';
import {normalize} from '../../../../components/scaleFontSize';
import { FONT_FAMILY_EXTRABOLD } from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  justoText: {
    fontSize: normalize(40),
    fontFamily: FONT_FAMILY_EXTRABOLD,
  },
});

export default styles;
