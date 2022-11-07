import { FlatList, Text, View } from 'react-native';
import images from '../../../../assets/images';
import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import { PRIMARY_THEME_COLOR } from '../../../../components/utilities/constant';
import strings from '../../../../Localization';
import styles from './styles';
import SourceManager from './SourceManager'

const SourcingDetailsView = (props: any) => {
    const DATA: any = [
        {
            Projectname: 'ABC',
            Location: 'Indore',
            rerano: '123566648',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'Active'
        },
        {
            Projectname: 'ABC',
            Location: 'Indore',
            rerano: '123566648',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'Deactive'
        },
        {
            Projectname: 'ABC',
            Location: 'Indore',
            rerano: '123566648',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'Active'
        },
        {
            Projectname: 'ABC',
            Location: 'Indore',
            rerano: '123566648',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'Deactive'
        },
    ];
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.menu}
                // rightFirstImageScr={images.filter}
                rightSecondImageScr={images.notification}
                headerText={strings.SourcingManagersHeader}
                handleOnLeftIconPress={props.handleDrawerPress}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.RightFirstIconStyle}
                // handleOnRightFirstIconPress={() => setFilterisVisible(true)}
                statusBarColor={PRIMARY_THEME_COLOR}
                barStyle={'light-content'}
            />
            <View style={{ alignItems: 'flex-end', paddingVertical: 10 }}>
                <Button
                    height={30}
                    width={150}
                    buttonText={strings.addNewSM}
                    btnTxtsize={15}
                    handleBtnPress={() => props.handleAddNewSM()}
                />
            </View>
            <View style={styles.listViewsec}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => <SourceManager items={item}
                        // setIsVisible={setIsVisible} onPressView={onPressView}
                        onPressEditSM={() => props.handleAddNewSM('edit')}
                        onPressAllocate={() => props.onPressAllocateCp()}
                    />}
                />
            </View>
        </View>
    )
}
export default SourcingDetailsView;