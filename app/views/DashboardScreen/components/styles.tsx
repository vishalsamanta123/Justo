import {StyleSheet} from 'react-native';
import {normalize, normalizeHeight, normalizeSpacing, normalizeWidth} from '../../../components/scaleFontSize';
import {BLACK_COLOR, BLUE_COLOR, FONT_FAMILY_EXTRABOLD, FONT_FAMILY_SEMIBOLD, PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK, PURPLE_COLOR, WHITE_COLOR, WHITE_COLOR_LIGHT, YELLOW_COLOR} from '../../../components/utilities/constant';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: PRIMARY_THEME_COLOR_DARK,
  },
  mainContainerWrap: {
    backgroundColor: PRIMARY_THEME_COLOR,
    flex: 1,
  },
  dashboardScroll: {
    flex: 1,
    // backgroundColor: 'red',
  },
  dashboardWrap: {
    flex: 1,
    padding: normalizeSpacing(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondPortion: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: WHITE_COLOR,
    padding: 10,
    flexDirection: 'row',
  },
  nameView: {},
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: normalize(20),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: WHITE_COLOR,

  },
  switchView: {
    marginLeft: normalizeSpacing(10),
  },
  switchStyle: {
    transform: [{ scaleX: .8 }, { scaleY: .8 }] 
  },
  welcomeView: {
    paddingVertical: normalizeSpacing(10),
  },
  welcomeToText: {
    fontSize: normalize(16),
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: WHITE_COLOR
  },
  welcomeNameText: {
    fontSize: normalize(15),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: WHITE_COLOR
  },
  qrCodeView: {
    padding: normalizeSpacing(10),
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  qrCodeImage: {
    height: normalizeHeight(70),
    width: normalizeWidth(70),
  },
  linkImageView: {
    position: 'absolute',
    top: '100%',
    right: '100%',
    backgroundColor: WHITE_COLOR,
    borderRadius: 40,
  },
  linkImage: {
    height: normalizeHeight(30),
    width: normalizeWidth(30),
  },
  firstCardView: {
    flex: 2,
    backgroundColor: YELLOW_COLOR,
    margin: normalizeSpacing(5),
    alignItems: 'center',
    borderRadius: 10
  },
  secondCardView: {
    flex: 2,
    backgroundColor: BLUE_COLOR,
    margin: normalizeSpacing(5),
    alignItems: 'center',
    borderRadius: 10
  },
  thirdCardView: {
    flex: 2,
    backgroundColor: PURPLE_COLOR,
    margin: normalizeSpacing(5),
    alignItems: 'center',
    borderRadius: 10,
  },
  cardTextView: {
    paddingVertical: normalizeSpacing(5),
    paddingHorizontal: normalizeSpacing(10),
  },
  cardText: {
    fontSize: normalize(16),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: WHITE_COLOR,
    textAlign: 'center',
  },
  numberView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: normalizeSpacing(5),
    paddingHorizontal: normalizeSpacing(10),
  },
  numberText: {
    fontSize: normalize(16),
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: WHITE_COLOR,
  },
  thirdPortion: {
    backgroundColor: WHITE_COLOR,
    padding: normalizeSpacing(20),
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  thirdPortioncardView: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    margin: normalizeSpacing(5),
    borderRadius: 10,
    width: '45%',
    backgroundColor: WHITE_COLOR,
    alignItems: 'center'
  },
  thirdPortionCardText: {
    color: BLACK_COLOR,
    fontSize: normalize(16),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    textAlign: 'center'
  },
  thirdPortionCardTextView: {
    margin: normalizeSpacing(10),
    width: '70%',
  },
  thirdPortionNumberText: {
    color: PRIMARY_THEME_COLOR,
    fontSize: normalize(16),
    fontFamily: FONT_FAMILY_EXTRABOLD,
    padding: normalizeSpacing(10),
  },
  bottomSection: {
    flex: 1,
    backgroundColor: WHITE_COLOR_LIGHT,
    paddingHorizontal: normalizeSpacing(10),
  },
  headingView: {
    flexDirection: 'row',
    marginVertical: normalizeSpacing(2),
    borderBottomColor: WHITE_COLOR,
    borderBottomWidth: 3,
    alignItems: 'center'
  },
  headingText: {
    flex: 1,
    padding: normalizeSpacing(5),
    color: PRIMARY_THEME_COLOR,
    fontSize: normalize(11),
    fontFamily: FONT_FAMILY_EXTRABOLD,
    textAlign: 'center',
  },
  itemText: {
    flex: 1,
    padding: normalizeSpacing(5),
    color: PRIMARY_THEME_COLOR,
    fontSize: normalize(11),
    fontFamily: FONT_FAMILY_EXTRABOLD,
    textAlign: 'center',
  },
  rightArrowImage: {
    height: normalizeHeight(15),
    width: normalizeWidth(15),
  },
  knowMoreText: {
    fontSize: normalize(14),
  }
});

export default styles;
