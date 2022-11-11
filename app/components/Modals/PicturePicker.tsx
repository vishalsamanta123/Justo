import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import images from "../../assets/images";
import strings from "../../components/utilities/Localization";
import ImagePicker from 'react-native-image-crop-picker';

const PicturePickerModal = (props: any) => {
    const handleCameraPress = () => {
        ImagePicker.openCamera({
            width: 100,
            height: 100,
            cropping: true,
            multiple: props.multiple ? props.multiple : false
        }).then((image: any) => {
            props.setVisible(false);
            props.imageData(image)
        });
    }
    const handleGalleryPress = () => {
        ImagePicker.openPicker({
            width: 100,
            height: 100,
            cropping: true,
            multiple: props.multiple ? props.multiple : false
        }).then((image: any) => {
            props.setVisible(false);
            props.imageData(image)
        });
    }
    return (
        <Modal style={styles.fullContainer} coverScreen={true}
            isVisible={props.Visible}
            backdropOpacity={0.30}>
            <View style={styles.pickerModal}>
                <View style={styles.pickerModalCon}>
                    <View style={styles.cancelModalVw}>
                        <TouchableOpacity onPress={() => props.setVisible(false)}>
                            <Image
                                source={images.close}
                                style={styles.componentsImg}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.straightVw}>
                        <TouchableOpacity
                            onPress={() => handleGalleryPress()}
                            style={styles.componentsVw}>
                            <Image
                                style={styles.componentsImg}
                                resizeMode={'contain'}
                                source={images.editIcon}
                            />
                            <Text style={styles.componentsTxt}>{strings.galleryHeader}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleCameraPress()}
                            style={styles.componentsVw}>
                            <Image
                                style={styles.componentsImg}
                                resizeMode={'contain'}
                                source={images.editIcon}
                            />
                            <Text style={styles.componentsTxt}>{strings.cameraHeader}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default PicturePickerModal;
