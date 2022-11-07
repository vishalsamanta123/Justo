import { StyleSheet } from 'react-native';
import { normalize, normalizeHeight, normalizeWidth } from '../../../../components/scaleFontSize';
import { BLACK_COLOR, FONT_FAMILY_MEDIUM, FONT_FAMILY_REGULAR, GRAY_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: WHITE_COLOR
    },
    headerStyle: {
        backgroundColor: PRIMARY_THEME_COLOR,
    },
    headerTextStyle: {
        color: WHITE_COLOR,
    },
    containerVw: {
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    headerTxt: {
        fontSize: normalize(16),
        color: BLACK_COLOR,
        fontFamily: FONT_FAMILY_MEDIUM
    },
    selectedBox: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: PRIMARY_THEME_COLOR,
        marginVertical: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    noSelectedTxt: {
        fontSize: normalize(14),
        color: GRAY_COLOR,
        fontFamily: FONT_FAMILY_REGULAR,
        paddingHorizontal: 8
    },
    innerBoxVw: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginVertical: 5,
    },
    searchInputVw: {
        borderWidth: 0.8,
        height: 45,
        fontFamily: FONT_FAMILY_MEDIUM,
        fontSize: normalize(16),
        color: BLACK_COLOR
    },
    crossVw: {
        width: normalizeWidth(22),
        height: normalizeHeight(22),
        marginHorizontal: 5
    }
})
export default styles