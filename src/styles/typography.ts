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

// eslint-disable-next-line no-shadow
enum FontWeight {
  normal = 'normal',
  bold = 'bold',
}

export const FontFamilies = {
  Lato_light: {
    ...base,
    fontFamily: FontFiles.LatoLight,
    fontWeight: FontWeight.normal,
  },
  Lato_regular: {
    ...base,
    fontFamily: FontFiles.LatoRegular,
    fontWeight: FontWeight.normal,
  },
  Lato_bold: {
    ...base,
    fontFamily: FontFiles.LatoBold,
    fontWeight: FontWeight.bold,
  },
  Lato_black: {
    ...base,
    fontFamily: FontFiles.LatoBlack,
    fontWeight: FontWeight.bold,
  },
  Roboto_regular: {
    ...base,
    fontFamily: FontFiles.RobotoRegular,
    fontWeight: FontWeight.normal,
  },
  Roboto_medium: {
    ...base,
    fontFamily: FontFiles.RobotoMedium,
    fontWeight: FontWeight.bold,
  },
  Roboto_bold: {
    ...base,
    fontFamily: FontFiles.RobotoBold,
    fontWeight: FontWeight.bold,
  },
};
