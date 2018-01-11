import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const colors = {
  "secondary": '#0686E4',
  "text_light": '#ffffff',
  "border_color": '#5E565A',
  "transparent_white": '#FFFFFF00',
  "separator_background": '#E2E2E2',
};
export const COLOR_PRIMARY  = '#fff';

export const iconSize = {width: 40, height: 40, resizeMode: 'contain'}
export const buttonSize = {width: 60, height: 30, resizeMode: 'contain'}

export const smallPhone = () => {
  if(width<=568)
    return true
  else
    return false
}