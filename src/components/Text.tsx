import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

const defaultProps: TextProps = {
  maxFontSizeMultiplier: 1.1,
};

export const Text: React.FC<TextProps> = props => {
  return <RNText {...{ ...defaultProps, ...props }}>{props.children}</RNText>;
};
