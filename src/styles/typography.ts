import { TextStyle } from 'react-native';

const fontStyle = 'normal';
const letterSpacing = 0;

const FontFiles = {
  LatoBlack: 'Lato-Black',
  LatoBold: 'Lato-Bold',
  LatoLight: 'Lato-Light',
  LatoRegular: 'Lato-Regular',
  RobotoBold: 'Roboto-Bold',
  RobotoMedium: 'Roboto-Medium',
  RobotoRegular: 'Roboto-Regular',
};

const base: TextStyle = {
  fontStyle: fontStyle,
  letterSpacing: letterSpacing,
  textTransform: 'none',
};

export const FontFamilies = {
  Lato_light: {
    ...base,
    fontFamily: FontFiles.LatoLight,
  },
  Lato_regular: {
    ...base,
    fontFamily: FontFiles.LatoRegular,
  },
  Lato_bold: {
    ...base,
    fontFamily: FontFiles.LatoBold,
  },
  Lato_black: {
    ...base,
    fontFamily: FontFiles.LatoBlack,
  },
  Roboto_regular: {
    ...base,
    fontFamily: FontFiles.RobotoRegular,
  },
  Roboto_medium: {
    ...base,
    fontFamily: FontFiles.RobotoMedium,
  },
  Roboto_bold: {
    ...base,
    fontFamily: FontFiles.RobotoBold,
  },
};
