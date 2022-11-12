import React from "react";
import { View, Text, Image, FlatList } from 'react-native';
import images from "../../../../assets/images";
import Header from "../../../../components/Header";
import strings from "../../../../components/utilities/Localization";
import styles from "./styles";
import BookingListItem from './BookingListItem'

const BookingListView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.menu}
                headerText={strings.bookingListHeader}
                handleOnLeftIconPress={props.handleDrawerPress}
                headerStyle={styles.headerStyle}
            />
            <View style={styles.listView}>
                <FlatList
                    data={props.DATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <BookingListItem items={item}
                        onPressView={() => props.handleView()}
                    />}
                />
            </View>
        </View>
    )
}
export default BookingListView