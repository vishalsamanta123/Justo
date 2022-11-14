import { StyleSheet } from 'react-native';
import { normalize, normalizeSpacing } from '../../../../components/scaleFontSize';
import { FONT_FAMILY_REGULAR, GRAY_LIGHT_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: WHITE_COLOR
    },
    headerStyle: {
        backgroundColor: PRIMARY_THEME_COLOR,
    },
    leftImageIconStyle: {
        tintColor: WHITE_COLOR,
    },
    containerVw: {
        marginHorizontal: normalize(16),
        marginTop: normalizeSpacing(30),
    },
    inputWrap: {
        marginTop: normalizeSpacing(25),
    },
    straightVw: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: normalize(10)
    },
    titleTxt: {
        fontSize: normalize(17),
        fontFamily: FONT_FAMILY_REGULAR,
        color: GRAY_LIGHT_COLOR
    }
})
export default styles