import { StyleSheet } from 'react-native';
import { normalize, normalizeHeight, normalizeSpacing, normalizeWidth } from '../../../../components/scaleFontSize';
import { BLACK_COLOR, FONT_FAMILY_EXTRABOLD, FONT_FAMILY_SEMIBOLD, GRAY_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant';

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
    topItemsVw: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: normalize(10),
        paddingVertical: normalize(10)
    },
    topItemsImg: {
        width: normalizeWidth(35),
        height: normalizeHeight(35),
        marginHorizontal: normalize(5),
        marginTop: normalize(5)
    },
    Txtview: {
        flexDirection: 'row',
        borderBottomColor: GRAY_COLOR,
        borderBottomWidth: 1,
        paddingVertical: normalizeSpacing(10),
    },
    projectContainer: {
        flex: 2.5,
        alignItems: 'flex-start',
        height: '100%',
        marginLeft: normalizeSpacing(15),
    },
    projectTxt: {
        fontSize: normalize(15),
        fontFamily: FONT_FAMILY_SEMIBOLD,
    },
    nameContainer: {
        flex: 3.5,
        alignItems: 'flex-start',
    },
    nameTxt: {
        fontSize: normalize(15),
        fontFamily: FONT_FAMILY_EXTRABOLD,
        color: BLACK_COLOR,
        marginHorizontal: normalizeSpacing(10)
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: normalizeSpacing(8),
        marginHorizontal: normalizeSpacing(10),
        alignItems: 'center'
    },
    button: {
        backgroundColor: WHITE_COLOR,
        width: normalizeWidth(90),
        height: normalizeHeight(25),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5
    },
    buttonTxt: {
        textAlign: 'center'
    },
    ImageSliderContainer: {
        flexDirection: 'row',
        marginVertical: normalizeSpacing(5),
    },
    imageSlider: {
        width: normalizeWidth(60),
        height: normalizeHeight(60),
        borderRadius: 10,
        marginRight: 10
    },
    shadowView: {
        width: normalizeWidth(40),
        height: normalizeHeight(60),
        position: 'absolute',
        right: normalizeSpacing(-15),
        backgroundColor: WHITE_COLOR,
        borderRadius: 10,
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'flex-end',
        shadowColor: WHITE_COLOR,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 15,
    },
    arrow: {
        width: normalizeWidth(30),
        height: normalizeHeight(30),
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: normalizeSpacing(10),
        marginVertical: normalizeSpacing(5),
    },
    bookingModelVw: {
        backgroundColor: WHITE_COLOR,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    topContainer: {
        flexDirection: "row",
        marginVertical: normalizeSpacing(10),
        justifyContent: "space-between",
        marginHorizontal: normalizeSpacing(10),
    },
    topTxt: {
        color: BLACK_COLOR,
        fontSize: normalize(18),
        fontFamily: FONT_FAMILY_EXTRABOLD,
    },
    bottomTxt: {
        color: BLACK_COLOR,
        fontSize: normalize(18),
        fontFamily: FONT_FAMILY_SEMIBOLD,
        textAlign: "center",
    },
    closeIcon: {
        tintColor: "red",
        width: normalizeWidth(30),
        height: normalizeHeight(30),
    },
    inputWrap: {
        marginTop: normalizeSpacing(20),
        width: '100%'
    },
})
export default styles