import { Dimensions, PixelRatio } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export { wp, hp };

interface StyleSet {
  [key: string]: number;
}

interface ShadowStyleSet {
  shadowColor: string;
  shadowOffset: {
    height: number;
    width: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export const WINDOW_HEIGHT: number = Dimensions.get('window').height;
export const WINDOW_WIDTH: number = Dimensions.get('window').width;
const guidelineBaseWidth: number = 414;

export const scaleSize = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale();

function dimensions(
  top: number,
  right = top,
  bottom = top,
  left = right,
  property: string,
): StyleSet {
  let styles: StyleSet = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(
  top: number,
  right: number,
  bottom: number,
  left: number,
): StyleSet {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
  top: number,
  right: number,
  bottom: number,
  left: number,
): StyleSet {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color: string,
  offset: { height: number; width: number } = { height: 2, width: 2 },
  radius: number = 8,
  opacity: number = 0.2,
): ShadowStyleSet {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
