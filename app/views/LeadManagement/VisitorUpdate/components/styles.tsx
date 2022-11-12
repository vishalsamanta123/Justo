import { StyleSheet } from 'react-native';
import { normalize, normalizeHeight, normalizeSpacing, normalizeWidth } from '../../../../components/scaleFontSize';
import { BG_MAIN_COLOUR, BLACK_COLOR, FONT_FAMILY_EXTRABOLD, FONT_FAMILY_MEDIUM, FONT_FAMILY_SEMIBOLD, GRAY_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant';

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
    topScreensVw: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: normalize(6)
    },
    topItemsVw: {
        backgroundColor: PRIMARY_THEME_COLOR,
        borderRadius: 100,
        width: normalizeWidth(20),
        height: normalizeHeight(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    borders: {
        height: normalizeHeight(2),
        width: normalizeWidth(90),
    },
    topTxts: {
        fontSize: normalize(12),
        fontFamily: FONT_FAMILY_MEDIUM,
        color: WHITE_COLOR
    },
    noMoveVw: {
        backgroundColor: WHITE_COLOR,
        paddingVertical: normalize(10)
    },
    wrap: {
        flexGrow: 1,
        paddingHorizontal: normalize(20),
        bottom: normalize(10)
    },
    typeVw: {
        marginVertical: normalize(10),
        marginTop: normalize(20),
    },
    typeTxt: {
        fontSize: normalize(18),
        color: PRIMARY_THEME_COLOR,
        fontFamily: FONT_FAMILY_SEMIBOLD,
    },
    typeBorders: {
        height: normalizeHeight(2),
        width: normalizeWidth(50),
        backgroundColor: BG_MAIN_COLOUR,
        marginTop: 3,
        marginLeft: 3
    },
    inputWrap: {
        marginTop: normalizeSpacing(30),
    },
    selectsView: {
        marginTop: normalize(10)
    },
    selectsTxt: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        color: BLACK_COLOR,
    },
    straightVw: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: normalize(8),
    },
    radioView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: normalizeSpacing(10)
    },
    radioTxt: {
        fontSize: normalize(18),
    },
    workingView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: normalizeSpacing(10)
    },
    addBtn: {
        backgroundColor: PRIMARY_THEME_COLOR,
        width: normalizeWidth(140),
        height: normalizeHeight(25),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addTxt: {
        color: WHITE_COLOR,
        textTransform: 'uppercase',
        fontSize: normalize(13),
        fontFamily: FONT_FAMILY_EXTRABOLD
    },
    workTxt: {
        color: BLACK_COLOR,
        textTransform: 'uppercase',
        fontSize: normalize(13),
        fontFamily: FONT_FAMILY_EXTRABOLD
    },
    btnView: {
        marginBottom: normalizeSpacing(20),
    },
    checkBoxVw: {
        backgroundColor: WHITE_COLOR,
        paddingVertical: 2,
        borderWidth: 0.5
    },
    checkTxt: {
        fontSize: normalize(13),
        color: BLACK_COLOR,
        fontFamily: FONT_FAMILY_MEDIUM,
        marginLeft: normalize(10)
    },
    checksVw: {
        width: normalizeWidth(5),
        height: normalizeHeight(10),
        marginHorizontal: 5,
    },
})
export default styles