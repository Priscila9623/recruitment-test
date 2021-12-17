import React from 'react';
import { ActivityIndicator, Platform, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../styles/colors';

interface LoaderProps {
  style?: StyleProp<ViewStyle>;
}

export const Loader: React.FC<LoaderProps> = props => {
  return (
    <ActivityIndicator
      animating={true}
      size={Platform.OS === 'ios' ? 'large' : 50}
      color={colors.primary}
      style={props.style}
    />
  );
};
