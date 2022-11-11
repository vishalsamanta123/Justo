import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Image } from 'react-native';
import images from '../../../../assets/images';
import Header from '../../../../components/Header';
import { PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK, TABBAR_COLOR } from '../../../../components/utilities/constant';
import strings from '../../../../components/utilities/Localization';
import styles from './styles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SmInfoView from './SMInfo';
import StatsView from './StatsViews';
import Button from '../../../../components/Button';

const SMDetailsView = (props: any) => {
    const DATAINFO: any =
    {
        AgentName: 'ABC',
        Mobileno: '12586663',
        Email: 'Abc@gmail.com',
        whatsappno: '8890898779',
        rerano: '12345699',
        aadharno: '12345699',
        pancardno: 'AAAAA2225A',
        gst: 'ABC123',
        workingfrom: '22/10/2021',
        workinglocation: ['indoe', 'Dewash'],
        allocatedCp: [
            {
                id: 1,
                cpName: 'CP 1'
            },
            {
                id: 2,
                cpName: 'CP 2'
            },
            {
                id: 3,
                cpName: 'CP 3'
            },
            {
                id: 4,
                cpName: 'CP 4'
            },
        ]
    };
    const DATASTATS: any =
    {
        closingper: 10,
        visitor: 123,
        siteVisit: 234,
        closeVisit: 600,
        lastlogin: '2 min ago',
        lastvisit: '2 min ago',
        lastsitevisit: '2 min ago',
        lastclosevisit: '2 min ago',
        month: 'March',
        startDate: '01/02/2022',
        endDate: '10/02/2022',
        visitTarget: '10/02',
        siteVisitTarget: '15/02',
        closeTarget: '12/02',
    };

    const insets = useSafeAreaInsets();

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Stats' },
        { key: 'second', title: 'SM Info' },
    ]);

    const renderTabBar = (props: any) => (
        <TabBar
            activeColor={TABBAR_COLOR}
            //inactiveColor={'#F4F4F4'} 
            {...props}
            indicatorStyle={{ borderWidth: 2, borderColor: TABBAR_COLOR }}
            style={{ backgroundColor: PRIMARY_THEME_COLOR_DARK }} />
    );
    const FirstRoute = () => (
        <StatsView items={DATASTATS} handleCpAllocation={props.handleCpAllocationPress} />
    );

    const SecondRoute = () => (
        <SmInfoView items={DATAINFO} handleCpAllocation={props.handleCpAllocationPress} />
    );
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.SMDetails}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.leftImageIconStyle}
                leftImageIconStyle={styles.leftImageIconStyle}
                handleOnLeftIconPress={props.handleBackPress}
                statusBarColor={PRIMARY_THEME_COLOR}
                barStyle={'light-content'}
            />
            <View style={styles.topItemVw}>
                <Image
                    source={images.chat}
                    style={styles.topItemSty}
                />
                <Image
                    source={images.chat}
                    style={styles.topItemSty}
                />
            </View>
            <View style={styles.propertyListView}>
                <TabView
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
            <View style={{ marginVertical: 12, alignItems: 'flex-end', }}>
                <Button
                    width={150}
                    height={40}
                    btnTxtsize={16}
                    textTransform={null}
                    buttonText={strings.cpAllocation}
                    handleBtnPress={() => props.handleCpAllocation()}
                />
            </View>
        </View>
    )
}
export default SMDetailsView