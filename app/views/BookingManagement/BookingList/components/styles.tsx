import { StyleSheet } from 'react-native';
import { normalizeSpacing } from '../../../../components/scaleFontSize';
import { PRIMARY_THEME_COLOR_DARK, RED_COLOR } from '../../../../components/utilities/constant';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: RED_COLOR
    },
    headerStyle: {
        backgroundColor: PRIMARY_THEME_COLOR_DARK,
    },
    listView: {
        flex: 1,
        margin: normalizeSpacing(10),
    },
})
export default styles;