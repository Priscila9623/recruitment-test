import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { colors } from '../styles/colors';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  return <ActivityIndicator animating={true} size={Platform.OS === 'ios' ? 'large' : 50} color={colors.primary} />;
};
