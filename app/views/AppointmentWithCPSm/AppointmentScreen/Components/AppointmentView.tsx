import { View, Text, StatusBar, useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK, TABBAR_COLOR } from '../../../../components/utilities/constant';
import Header from '../../../../components/Header';
import images from '../../../../assets/images';
import strings from '../../../../components/utilities/Localization';
import styles from './Styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import SmAppointment from './SmAppointment';
import { AppointMentSmData, MyAppointMentData } from '../../../../components/utilities/DemoData';
import { useNavigation } from '@react-navigation/native';
import FilterModal from './AppointmentModal';
import Button from '../../../../components/Button';
import MyAppointment from './MyAppointment';

const AppointmentView = (props: any) => {
    const insets = useSafeAreaInsets();
    const layout = useWindowDimensions();
    const navigation: any = useNavigation()
    const [index, setIndex] = useState(0);
    const [FilterisVisible, setFilterisVisible] = useState(false)
    const [routes] = useState([
        { key: 'first', title: 'My Appointment' },
        { key: 'second', title: 'SM Appointment With CP' },
    ]);
    const renderTabBar = (props: any) => (

        <TabBar
            activeColor={TABBAR_COLOR}
            //inactiveColor={'#F4F4F4'} 
            {...props}
            indicatorStyle={{ borderWidth: 2, borderColor: TABBAR_COLOR }}
            style={{ backgroundColor: PRIMARY_THEME_COLOR_DARK }} />

    );
    const onPressView = () => {
        navigation.navigate('AppointmentDetails')
    }
    const onPressAddNew = () => {
        navigation.navigate('AddAppointmentScreen')
    }
    const FirstRoute = () => (
        <FlatList
            data={MyAppointMentData}
            renderItem={({ item }) => <MyAppointment items={item} onPressView={onPressView} />}
        />
    );

    const SecondRoute = () => (
        <FlatList
            data={AppointMentSmData}
            renderItem={({ item }) => <SmAppointment items={item} onPressView={onPressView} />}
        />
    );
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });


    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.menu}
                rightFirstImageScr={images.filter}
                rightSecondImageScr={images.notification}
                headerText={strings.appointmentWithCPHeader}
                handleOnLeftIconPress={props.handleDrawerPress}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.RightFirstIconStyle}
                handleOnRightFirstIconPress={() => setFilterisVisible(true)}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={{ marginVertical: 10, alignItems: 'flex-end' }}>
                <Button
                    width={200}
                    height={30}
                    buttonText={strings.addNewappointment}
                    btnTxtsize={14}
                    handleBtnPress={() => onPressAddNew()}
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
            <FilterModal Visible={FilterisVisible} setIsVisible={setFilterisVisible} />
        </View>
    )
}

export default AppointmentView