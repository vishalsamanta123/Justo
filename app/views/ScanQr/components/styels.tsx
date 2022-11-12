import { StyleSheet } from 'react-native';
import { PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../components/utilities/constant';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: WHITE_COLOR,
    },
    headerStyle: {
        backgroundColor: PRIMARY_THEME_COLOR,
    },
    RightFirstIconStyle: {
        tintColor: WHITE_COLOR,
    },
})

export default styles