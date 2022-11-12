import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import strings from '../../../../components/utilities/Localization';
import { BLACK_COLOR, GREEN_COLOR, PURPLE_COLOR, WHITE_COLOR, YELLOW_COLOR } from '../../../../components/utilities/constant';
import images from '../../../../assets/images';
import Button from '../../../../components/Button';

const BookingListItem = (props: any) => {
    return (
        <View style={styles.IteamView}>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Booking Date :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.createddate}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Customer Name :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.customerName}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Booking Status :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.booking_status}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Configuration :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.configure}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Budget :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.budget}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Booking Amount :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.booking_amt}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, { borderBottomWidth: 0 }]} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Status :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.status}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    width={90}
                    height={30}
                    bgcolor={WHITE_COLOR}
                    bordercolor={PURPLE_COLOR}
                    borderWidth={1}
                    btnTxtcolor={PURPLE_COLOR}
                    buttonText={strings.call}
                    btnTxtsize={14}
                    border={10}
                />
                <TouchableOpacity style={styles.Viewbutton}
                    onPress={() => props.onPressView(props.items)}
                >
                    <Image
                        source={images.forwardArrow}
                        style={styles.arrow}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BookingListItem;
