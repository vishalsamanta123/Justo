import { View, Text, StatusBar, ScrollView, Image, FlatList, TouchableOpacity, } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Switch } from 'react-native-switch';
import React, { useState } from "react";
import Header from "../../../components/Header";
import images from "../../../assets/images";
import styles from "./styles";
import strings from "../../../components/utilities/Localization";
import { GREEN_COLOR, PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK, RED_COLOR, WHITE_COLOR } from "../../../components/utilities/constant";

const DashboardView = (props: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const insets = useSafeAreaInsets();
  const DATA: any = [
    {
      cpName: 'Rohit Sharma',
      visitor: 123,
      siteVisit: 234,
      closeLead: 600,
    },
    {
      cpName: 'Sachin Tendulkar',
      visitor: 37,
      siteVisit: 345,
      closeLead: 600,
    },
    {
      cpName: 'Virat kohli',
      visitor: 57,
      siteVisit: 3,
      closeLead: 600,
    },
    {
      cpName: 'Ramesh Suresh',
      visitor: 48,
      siteVisit: 6,
      closeLead: 600,
    },
    {
      cpName: 'Danieal vitoree',
      visitor: 768,
      siteVisit: 867,
      closeLead: 600,
    },
  ];
  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.headingView}>
        <Text style={styles.itemText}>{item.cpName}</Text>
        <Text style={styles.itemText}>{item.visitor}</Text>
        <Text style={styles.itemText}>{item.siteVisit}</Text>
        <Text style={styles.itemText}>{item.closeLead}</Text>
        <Image source={images.rightArrow} style={styles.rightArrowImage} />
      </TouchableOpacity>
    );
  };
  const handleSwitcPress = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <>
      <View style={styles.mainContainerWrap}>
        <View
          style={{
            backgroundColor: PRIMARY_THEME_COLOR_DARK,
            height: insets.top,
          }}
        />
        <StatusBar backgroundColor={PRIMARY_THEME_COLOR} barStyle={'light-content'} />
        <Header
          leftImageSrc={images.menu}
          rightImageScr={images.notification}
          headerText={strings.dashboardHeader}
          handleOnLeftIconPress={props.handleDrawerPress}
          headerStyle={styles.headerStyle}
        />
        <ScrollView style={styles.dashboardScroll} bounces={false}>
          <View style={styles.dashboardWrap}>
            <View style={styles.nameView}>
              <View style={styles.statusView}>
                <Text style={styles.statusText}>Status</Text>
                <View style={styles.switchView}>
                  <Switch
                    value={isEnabled}
                    onValueChange={(val) => handleSwitcPress()}
                    //disabled={false}
                    backgroundActive={GREEN_COLOR}
                    backgroundInactive={RED_COLOR}
                    circleActiveColor={WHITE_COLOR}
                    circleInActiveColor={WHITE_COLOR}
                    circleSize={25}
                    activeText={''}
                    inActiveText={''}
                    // barHeight={1}
                    circleBorderWidth={2}
                  /*  activeText={'On'}
                   inActiveText={'Off'}
                   circleSize={30}
                   barHeight={1}
                   circleBorderWidth={3}
                   backgroundActive={'green'}
                   backgroundInactive={'gray'}
                   circleActiveColor={'#30a566'}
                   circleInActiveColor={'#000000'} */

                  />


                </View>
              </View>
              <View style={styles.welcomeView}>
                <Text style={styles.welcomeToText}>Welcome to</Text>
                <Text style={styles.welcomeNameText}>Yogesh Sarode</Text>
              </View>
            </View>
            <View style={styles.qrCodeView}>
              <Image source={images.qrCode} style={styles.qrCodeImage} />
              <TouchableOpacity style={styles.linkImageView}>
                <Image source={images.link} style={styles.linkImage} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secondPortion}>
            <View style={styles.firstCardView}>
              <View style={styles.cardTextView}>
                <Text style={styles.cardText}>Visit Target</Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.numberText}>250/1000</Text>
              </View>
            </View>
            <View style={styles.secondCardView}>
              <View style={styles.cardTextView}>
                <Text style={styles.cardText}>Site Visit Target</Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.numberText}>250/1000</Text>
              </View>
            </View>
            <View style={styles.thirdCardView}>
              <View style={styles.cardTextView}>
                <Text style={styles.cardText}>Closing Target</Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.numberText}>250/1000</Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdPortion}>
            <View style={styles.thirdPortioncardView}>
              <View style={styles.thirdPortionCardTextView}>
                <Text style={styles.thirdPortionCardText} numberOfLines={2}>
                  Today Site Visit
                </Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.thirdPortionNumberText}>250/1000</Text>
              </View>
            </View>
            <View style={styles.thirdPortioncardView}>
              <View style={styles.thirdPortionCardTextView}>
                <Text style={styles.thirdPortionCardText}>
                  Today Closed Visit
                </Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.thirdPortionNumberText}>250/1000</Text>
              </View>
            </View>
            <View style={styles.thirdPortioncardView}>
              <View style={styles.thirdPortionCardTextView}>
                <Text style={styles.thirdPortionCardText}>Today Visit</Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.thirdPortionNumberText}>250/1000</Text>
              </View>
            </View>
            <View style={styles.thirdPortioncardView}>
              <View style={styles.thirdPortionCardTextView}>
                <Text style={styles.thirdPortionCardText}>Active CP</Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.thirdPortionNumberText}>250/1000</Text>
              </View>
            </View>
            <View style={styles.thirdPortioncardView}>
              <View style={styles.thirdPortionCardTextView}>
                <Text style={styles.thirdPortionCardText}>Closing Target</Text>
              </View>
              <View style={styles.numberView}>
                <Text style={styles.thirdPortionNumberText}>250/1000</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.headingView}>
              <Text style={styles.headingText}>CP NAME</Text>
              <Text style={styles.headingText}>VISITOR</Text>
              <Text style={styles.headingText}>SITE VISIT</Text>
              <Text style={styles.headingText}>CLOSE LEAD</Text>
            </View>
            <FlatList data={DATA} renderItem={renderItem} />
            <TouchableOpacity style={styles.headingView}>
              <Text style={[styles.headingText, styles.knowMoreText]}>
                Know More
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DashboardView;
