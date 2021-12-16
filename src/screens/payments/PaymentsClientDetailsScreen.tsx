import React, { useCallback, useMemo, useState } from 'react';
import { ListRenderItem, SectionList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useFetch } from '@anb98/react-hooks';
import { Text } from '../../components/Text';
import { Row } from '../../components/Row';
import { colors } from '../../styles/colors';
import { FontFamilies } from '../../styles/typography';
import { Header } from '../../components/Header';
import { formatDate, formatWholeDollars } from '../../helpers/formatters';
import { HorizontalDivider } from '../../components/HorizontalDivider';
import { DetailsTabType, Payment } from './PaymentsClientDetailsTypes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FloatButton } from '../../components/FloatButton';
import { Loader } from '../../components/Loader';
import { RootStackParamList } from '../../RootNavigation';
import { Customer } from '../tabs/payments/PaymentsClientsTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface PaymentsClientDetailsScreenParams {
  customer: Customer;
}

export interface PaymentsClientDetailsScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'PaymentsClientDetails'> {}

const PaymentsClientDetailsScreen: React.FC<PaymentsClientDetailsScreenProps> = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { customer } = route.params;
  const [activeTab, setActiveTab] = useState<DetailsTabType>('Payments');
  const [{ isLoading, data }] = useFetch<Payment[]>(`http://localhost:3000/payments?userId=${customer.id}`);

  const payments = useMemo(() => {
    const paid = (data ? data?.filter(x => x.status === 'paid') : []) as Payment[];
    const open = (data ? data?.filter(x => x.status === 'open') : []) as Payment[];
    return [
      { title: 'OPEN', data: open },
      { title: 'PAID', data: paid },
    ];
  }, [data]);

  const modifiedInsets = {
    top: (insets.top === 0 ? 15 : insets.top) + 15,
    bottom: insets.bottom === 0 ? insets.bottom + 15 : insets.bottom,
  };

  const renderItemCall: ListRenderItem<Payment> = useCallback(({ item }) => {
    return <Item data={item} />;
  }, []);

  const keyExtractor = useCallback((item: Payment) => item.id.toString(), []);

  return (
    <View style={styles.screen}>
      <View style={[styles.view, styles.header, { paddingTop: modifiedInsets.top }]}>
        <Header title={customer.name} onPress={() => navigation.navigate('Tabs', { screen: 'Payments' })}>
          <>
            {customer.phone && <Text style={styles.phone}>{customer.phone}</Text>}
            {customer.email && <Text style={styles.email}>{customer.email}</Text>}
          </>
        </Header>
        <View style={styles.earnedContainer}>
          <Text style={styles.earned}>{formatWholeDollars(1400)}</Text>
          <Text style={styles.earnedDescription}>Total Earned</Text>
        </View>
      </View>
      <Row style={styles.tabContainer}>
        <DetailsTab title="PAYMENTS" isActive={activeTab === 'Payments'} onPress={() => setActiveTab('Payments')} />
        <DetailsTab title="SESSIONS" isActive={activeTab === 'Sessions'} onPress={() => setActiveTab('Sessions')} />
      </Row>
      {activeTab === 'Payments' && (
        <View style={styles.view}>
          {isLoading ? (
            <Loader />
          ) : (
            <SectionList
              sections={payments}
              stickySectionHeadersEnabled
              showsVerticalScrollIndicator={false}
              keyExtractor={keyExtractor}
              renderItem={renderItemCall}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionTitleContainer}>
                  <Text style={styles.sectionTitle}>{title}</Text>
                </View>
              )}
            />
          )}
        </View>
      )}
      <FloatButton onPress={() => console.log('BTN ADD PAYMENT')} style={styles.floatButton}>
        <Text style={{ color: colors.basic_2 }}>+</Text>
      </FloatButton>
    </View>
  );
};

interface DetailsTabProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export const DetailsTab: React.FC<DetailsTabProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.tab}>
      <Text style={[styles.tabText, !props.isActive ? styles.tabTextInactive : {}]}>{props.title}</Text>
      <HorizontalDivider style={[styles.tabIndicator, !props.isActive ? styles.tabIndicatorInactive : {}]} />
    </TouchableOpacity>
  );
};

interface ItemProps {
  data: Payment;
}

const Item: React.FC<ItemProps> = ({ data }) => (
  <View>
    <HorizontalDivider />
    <Row style={styles.itemContainer}>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.paidContainer}>
        <Text style={styles.amount}>{`$${data.amount}`}</Text>
        <Text style={styles.date}>{formatDate(data.created)}</Text>
      </View>
    </Row>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: colors.basic_2,
  },
  header: {
    backgroundColor: colors.basic_2,
    shadowColor: colors.basic_1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  view: {
    paddingHorizontal: 20,
  },
  phone: {
    ...FontFamilies.Lato_regular,
    fontSize: 14,
    color: colors.basic_1,
  },
  email: {
    ...FontFamilies.Lato_regular,
    fontSize: 12,
    color: colors.secondary_darker,
  },
  earnedContainer: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earned: {
    ...FontFamilies.Lato_bold,
    fontSize: 28,
    color: colors.basic_1,
  },
  earnedDescription: {
    ...FontFamilies.Lato_regular,
    fontSize: 14,
    color: colors.basic_1,
  },
  tabContainer: {
    marginTop: 25,
    justifyContent: 'center',
  },
  tab: {
    paddingHorizontal: 15,
  },
  tabText: {
    ...FontFamilies.Lato_regular,
    fontSize: 16,
    paddingHorizontal: 10,
    color: colors.basic_1,
  },
  tabTextInactive: {
    color: colors.secondary_medium,
  },
  tabIndicator: {
    height: 2,
    marginTop: 10,
    backgroundColor: colors.primary,
  },
  tabIndicatorInactive: {
    backgroundColor: colors.basic_2,
  },
  sectionTitleContainer: {
    backgroundColor: colors.basic_2,
    paddingVertical: 20,
  },
  sectionTitle: {
    ...FontFamilies.Lato_bold,
    fontSize: 16,
    color: colors.secondary_medium,
    paddingVertical: 10,
  },
  itemContainer: {
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  description: {
    flex: 1,
    ...FontFamilies.Lato_regular,
    fontSize: 16,
    color: colors.basic_1,
  },
  amount: {
    ...FontFamilies.Lato_regular,
    fontSize: 20,
    color: colors.basic_1,
  },
  date: {
    ...FontFamilies.Lato_regular,
    fontSize: 12,
    color: colors.secondary,
  },
  paidContainer: {
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  floatButton: {
    bottom: 80,
  },
});

export { PaymentsClientDetailsScreen };
