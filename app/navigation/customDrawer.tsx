import { View, Text, Image, TouchableOpacity, StatusBar, Platform } from 'react-native'
import React from 'react'
import styles from './styles';
import images from '../assets/images';
import strings from '../components/utilities/Localization';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DrawerContentScrollView, useDrawerStatus } from '@react-navigation/drawer';
import { PRIMARY_THEME_COLOR } from '../components/utilities/constant';

const customDrawer = ({ navigation }: any) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const insets = useSafeAreaInsets()
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  }
  const ProfileSection = () => {
    return (
      <TouchableOpacity style={styles.MainContainer}>
        <View style={styles.ContainerView}>
          <View style={styles.NameContainer}>
            <Image
              style={styles.UserImge}
              source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }}
            />
            <View style={styles.UserNameView}>
              <Text
                numberOfLines={1}
                style={[styles.UserNameText, { width: 120 }]}
              >
                Warren Hussen
              </Text>
              <Text style={[styles.UserAddress, { width: 140 }]}>
                Florida, US
              </Text>
            </View>
            <TouchableOpacity style={styles.closeDrawerView} onPress={toggleDrawer}>
              {isDrawerOpen && <Image style={styles.closeDrawerImage} source={images.leftArrow} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  const DrawerTabSection = (props: any) => {
    return (
      <TouchableOpacity style={styles.drawerTouch} onPress={props.handleDrawerNavigation}>
        <Image source={props.iconSource} style={styles.drawerIconStyle} />
        <Text style={styles.drawerText}>{props.tabTitle}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.drawerMain}>
        <View style={{backgroundColor: PRIMARY_THEME_COLOR, height: insets.top}} />
        <StatusBar barStyle={'light-content'} />
        <ProfileSection />
        <DrawerContentScrollView
          contentContainerStyle={{
            paddingTop: 0,
          }}
        >
        <DrawerTabSection iconSource={images.dashboard} tabTitle={strings.dashboardHeader} handleDrawerNavigation={()=> {navigation.navigate('DashboardScreen')}}/>
        <DrawerTabSection iconSource={images.property} tabTitle={strings.propertyManagementHeader} handleDrawerNavigation={()=> {navigation.navigate('PropertyScreenView')}}/>
        <DrawerTabSection iconSource={images.property} tabTitle={strings.SourcingManagersHeader} handleDrawerNavigation={()=> {navigation.navigate('SourcingManager')}}/>

        <DrawerTabSection iconSource={images.agency} tabTitle={strings.agencyHeader} handleDrawerNavigation={() => { navigation.navigate('AgencyListing') }} />

        <DrawerTabSection iconSource={images.lead} tabTitle={strings.leadManagementHeader} handleDrawerNavigation={() => { navigation.navigate('LeadManagementScreen') }} />
        <DrawerTabSection
          iconSource={images.event}
          tabTitle={strings.followupHeader}
          handleDrawerNavigation={() => {
            navigation.navigate('FollowUpScreen');
          }}
        />
        <DrawerTabSection
          iconSource={images.event}
          tabTitle={strings.appointmentWithCPHeader}
          handleDrawerNavigation={() => {
            navigation.navigate('AppointmentScreenCPSM');
          }}
        />
        <DrawerTabSection iconSource={images.event} tabTitle={strings.appointmentForVisitHeader} />
        <DrawerTabSection iconSource={images.report} tabTitle={strings.reportHeader} />
        <DrawerTabSection iconSource={images.chat} tabTitle={strings.chatHeader} />
        <DrawerTabSection iconSource={images.support} tabTitle={strings.supportHeader} />
        <DrawerTabSection iconSource={images.setting} tabTitle={strings.settingHeader} handleDrawerNavigation={() => {
            navigation.navigate('SettingScreen');
          }}/>
        <DrawerTabSection iconSource={images.logout} tabTitle={strings.logout} />
      </DrawerContentScrollView>
      <View style={styles.versionView}>
        <View style={styles.drawerTouch}>
          <Text style={styles.drawerText}>{strings.versionText}{' 1.00.00'}</Text>
        </View>
      </View>
    </View>
  )
}

export default customDrawer;
