import { StyleSheet } from "react-native";
import { normalize, normalizeHeight, normalizeSpacing, normalizeWidth } from "../../../../components/scaleFontSize";
import { FONT_FAMILY_EXTRABOLD, FONT_FAMILY_SEMIBOLD, GRAY_LIGHT_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from "../../../../components/utilities/constant";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerStyle: {
        backgroundColor: PRIMARY_THEME_COLOR,
    },
    leftImageIconStyle: {
        tintColor: WHITE_COLOR,
    },
    ProfileView:{
        flex: 1,
    },
    roleView: {
        flex: 0.5,
        justifyContent: 'center',
        marginLeft: normalizeSpacing(10),
    },
    userCardView: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: normalizeSpacing(10),
    },
    InformationView: {
        flex: 5,
    },
    CPtext: {
        color: PRIMARY_THEME_COLOR,
        fontFamily: FONT_FAMILY_EXTRABOLD,
        fontSize: normalize(13),
    },
    usernameWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        height: normalizeHeight(80),
        width: normalizeWidth(80),
        borderRadius: normalizeSpacing(80)
    },
    userNameText: {
        color: PRIMARY_THEME_COLOR,
        fontFamily: FONT_FAMILY_EXTRABOLD,
        fontSize: normalize(15),
        marginLeft: normalizeSpacing(10),
    },
    editImageWrap: {},
    editIconImage: {
        height: normalizeHeight(30),
        width: normalizeWidth(30),
    },
    fieldView: {
        flexDirection: 'row',
        // padding: normalizeSpacing(20),
        paddingHorizontal: normalizeSpacing(30),
        paddingVertical: normalizeSpacing(20)
    },
    keyView: {
        flex: 3
    },
    keyText: {
        fontSize: normalize(15),
        fontFamily: FONT_FAMILY_EXTRABOLD,
    },
    valueView: {
        flex: 3,
        alignItems: 'flex-end',
    },
    valueText: {
        fontSize: normalize(15),
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: GRAY_LIGHT_COLOR
    },
    colon:{
        fontSize: normalize(15),
        fontFamily: FONT_FAMILY_EXTRABOLD,
    }
});

export default styles;