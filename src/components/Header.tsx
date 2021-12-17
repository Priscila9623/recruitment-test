import React from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View } from 'react-native';
import { Svgs } from '../helpers/svgs';
import { colors } from '../styles/colors';
import { FontFamilies } from '../styles/typography';
import { Row } from './Row';
import { Text } from './Text';

interface HeaderProps {
  onPress: () => void;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  isArchived?: boolean;
}

const hitSlop = 10;

export const Header: React.FC<HeaderProps> = props => {
  return (
    <Row style={styles.container}>
      <TouchableOpacity
        onPress={props.onPress}
        hitSlop={{ top: hitSlop, bottom: hitSlop, left: hitSlop, right: hitSlop }}>
        <Svgs.times />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
        {props.children}
      </View>
      <View style={styles.archivedContainer}>
        <Svgs.archive />
        <Text style={styles.archived}>{props.isArchived ? 'Archived' : 'Archive'}</Text>
      </View>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  titleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    ...FontFamilies.Lato_black,
    fontSize: 20,
    color: colors.basic_1,
    transform: [{ translateY: -5 }],
  },
  archivedContainer: {
    alignItems: 'center',
  },
  archived: {
    fontSize: 14,
    ...FontFamilies.Lato_bold,
    color: colors.basic_1,
  },
});
