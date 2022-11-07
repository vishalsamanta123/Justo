import { View, Text } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';
import { dropdownData } from '../utilities/DemoData';
import { normalizeHeight } from '../scaleFontSize';

const DropdownInput = (props: any) => {
    const {
        inputWidth = '90%',
        inputheight = 50
      } = props
    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };
    return (
        <View>
            <View style={styles.inputHeadinView}>
                <Text style={styles.inputHeadingText}>{props.headingText}</Text>
            </View>
            <View style={styles.mainContainer}>
                <Dropdown
                    style={[styles.dropdown, {
                        width: inputWidth,
                        height: normalizeHeight(inputheight),
                    }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={dropdownData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(item) => {
                        props.setValue(item.value);
                    }}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default DropdownInput