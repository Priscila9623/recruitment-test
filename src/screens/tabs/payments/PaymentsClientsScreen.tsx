import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useSearch, useFetch } from '@anb98/react-hooks';
import { Text } from '../../../components/Text';
import { Row } from '../../../components/Row';
import { FontFamilies } from '../../../styles/typography';
import { colors } from '../../../styles/colors';
import { Customer } from './PaymentsClientsTypes';
import { formatDollars } from '../../../helpers/formatters';
import { Header } from '../../../components/Header';
import { FloatButton } from '../../../components/FloatButton';
import { Loader } from '../../../components/Loader';
import { TabsNavigationProp } from '../TabsNavigationTypes';
import { Svgs } from '../../../helpers/svgs';

export interface PaymentsClientsScreenProps {
  navigation: TabsNavigationProp<'Payments'>;
}

const PaymentsClientsScreen: React.FC<PaymentsClientsScreenProps> = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState<Customer[]>([]);
  const [{ data, isLoading }] = useFetch<Customer[]>('http://localhost:3000/customers');

  const customers = useMemo(() => (data ? data?.filter(x => x.status === 'active') : []), [data]);

  const memoizedResult = useMemo(() => {
    const unselected = customers
      .filter(({ id }) => !selectedItems.find(item => item.id === id))
      .sort((a, b) => a.revenues - b.revenues);

    return [...selectedItems, ...unselected];
  }, [customers, selectedItems]);

  const { setSourceData, setSearchValue, filtered } = useSearch<Customer>({
    allowFields: ['name'],
  });

  useEffect(() => {
    setSourceData(memoizedResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoizedResult]);

  const renderItemCall: ListRenderItem<Customer> = useCallback(({ item }) => {
    return (
      <Item
        data={item}
        onPress={() => {
          setSelectedItems(prev => [item, ...prev]);
          navigation.navigate('PaymentsClientDetails', { customer: item });
        }}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyExtractor = useCallback((item: Customer) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <Header
          title="Clients"
          titleStyle={{ color: colors.secondary_darker }}
          isArchived
          onPress={() => console.log('BTN CLOSE')}
        />
        <View style={styles.content}>
          <Row style={styles.inputContainer}>
            <View style={styles.inputLeftBox}>
              <Svgs.search />
            </View>
            <TextInput
              style={styles.inputBox}
              returnKeyLabel="Done"
              returnKeyType="done"
              maxFontSizeMultiplier={1.1}
              placeholderTextColor={colors.secondary}
              placeholder="Search client"
              onChangeText={setSearchValue}
            />
          </Row>
          <Text style={styles.listHeader}>Active</Text>
          {isLoading ? (
            <Loader />
          ) : (
            <FlatList
              data={filtered}
              renderItem={renderItemCall}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View style={{ height: 200 }} />}
            />
          )}
        </View>
        <FloatButton onPress={() => console.log('BTN ADD CLIENT')}>
          <Svgs.add_customer />
        </FloatButton>
      </View>
    </SafeAreaView>
  );
};

interface ItemProps {
  data: Customer;
  onPress: () => void;
}

const Item: React.FC<ItemProps> = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Row style={styles.itemContainer}>
      <Row style={styles.itemLeftSide}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{`${data.name[0]}`}</Text>
        </View>
        <View style={styles.personalInfoContainer}>
          <Text style={styles.name}>{data.name}</Text>
          {data.email && <Text style={styles.email}>{data.email}</Text>}
        </View>
      </Row>
      <View style={styles.paidContainer}>
        <Text style={styles.revenues}>{formatDollars(data.revenues ?? 0)}</Text>
        <Text style={styles.revenuesDescription}>Total Paid</Text>
      </View>
    </Row>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.basic_2,
  },
  view: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  content: {
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginTop: 10,
    backgroundColor: colors.basic_2,
    borderWidth: 1,
    borderColor: colors.secondary,
    height: 45,
    borderRadius: 6,
  },
  inputBox: {
    flex: 1,
    height: 45,
    color: colors.secondary_darker,
    fontSize: 16,
    ...FontFamilies.Lato_regular,
  },
  inputLeftBox: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeader: {
    ...FontFamilies.Lato_bold,
    fontSize: 16,
    color: colors.primary,
    marginTop: 30,
    marginBottom: 10,
  },
  itemContainer: {
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  itemLeftSide: {
    flexShrink: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    ...FontFamilies.Lato_regular,
    fontSize: 14,
    textTransform: 'uppercase',
    color: colors.basic_1,
  },
  personalInfoContainer: {
    marginLeft: 10,
  },
  name: {
    ...FontFamilies.Lato_regular,
    fontSize: 16,
    color: colors.basic_1,
  },
  email: {
    ...FontFamilies.Lato_regular,
    fontSize: 14,
    color: colors.secondary_darker,
  },
  paidContainer: {
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  revenues: {
    ...FontFamilies.Lato_bold,
    fontSize: 16,
    color: colors.secondary_darker,
  },
  revenuesDescription: {
    ...FontFamilies.Lato_regular,
    fontSize: 12,
    color: colors.secondary_medium,
  },
});

export { PaymentsClientsScreen };
