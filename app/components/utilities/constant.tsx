import { Platform, Dimensions } from "react-native";

export const FONT_FAMILY_LIGHT = 'Nunito-Light';
export const FONT_FAMILY_REGULAR = 'Nunito-Regular';
export const FONT_FAMILY_MEDIUM = 'Nunito-Medium';
export const FONT_FAMILY_SEMIBOLD = 'Nunito-SemiBold';
export const FONT_FAMILY_EXTRABOLD = 'Nunito-ExtraBold';

export const PRIMARY_THEME_COLOR = '#162b70';
export const PRIMARY_THEME_COLOR_DARK = '#102054';
export const BLACK_COLOR = '#000000';
export const WHITE_COLOR = '#ffffff';
export const WHITE_COLOR_LIGHT = '#f5f5e9';
export const YELLOW_COLOR = '#d68904';
export const BLUE_COLOR = '#0493d6';
export const GRAY_COLOR = '#bdbbbb';
export const TABBAR_COLOR = '#F5CB44';
export const GRAY_LIGHT_COLOR = '#757070';
export const BG_MAIN_COLOUR = '#eeeef1';
export const PURPLE_COLOR = '#b93cff'; // for Edit button
export const GOLDEN_COLOR = '#E4D00A'; // for subscribe
export const GREEN_COLOR = '#008000'; // For Active button
export const RED_COLOR = '#FF0000'; // unsubscribe inactive and cancel
export const CALL_COLOR = '#52a4ff'; // for call button
export const validateEmail =
  /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const checkSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
export const DimensionWidth = Dimensions.get('window').width;

export const Isios = Platform.OS === 'ios'
