import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import Colors from '../../../constants/colors';
import {useCustomTheme} from '../../../theme/Theme';
import useTypedSelector from '../../../hooks/useTypedSelector';
import {
  selectedDraftService,
  setDraftService,
} from '../../../redux/draftService/draftServiceSlice';
import useDirection from '../../../hooks/useDirection';

const Draft = () => {
  const theme = useCustomTheme();
  const dispatch = useDispatch();
  const draftService = useTypedSelector(selectedDraftService);
  const isDarkMode = theme === 'dark';
  const {t} = useTranslation();
  const {isRTL} = useDirection();

  const handleRemove = async data => {
    dispatch(setDraftService({service: data}));

    const updatedDrafts = draftService.filter(
      item => item.service.id !== data.id,
    );
    await AsyncStorage.setItem('draftService', JSON.stringify(updatedDrafts));

    Toast.show({
      type: 'success',
      text2: t('draft.toast.removeSuccess'),
    });
  };

  if (!draftService?.length) {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.emptyContainer,
            {
              backgroundColor: isDarkMode ? Colors.navBg : Colors.pureWhite,
            },
          ]}>
          <View style={styles.iconContainer}>
            <Icon
              name="document-text-outline"
              size={50}
              color={Colors.primary}
            />
          </View>
          <Text
            style={[
              styles.noDraftText,
              isDarkMode && styles.darkText,
              isRTL && styles.rtlText,
            ]}>
            {t('draft.empty.title')}
          </Text>
          <Text
            style={[
              styles.subText,
              isDarkMode && styles.darkSubText,
              isRTL && styles.rtlText,
            ]}>
            {t('draft.empty.description1')}
          </Text>
          <Text
            style={[
              styles.subText,
              isDarkMode && styles.darkSubText,
              isRTL && styles.rtlText,
            ]}>
            {t('draft.empty.description2')}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}>
      {draftService.map((item, index) => (
        <View
          key={index}
          style={[
            styles.draftCard,
            isDarkMode ? styles.darkCard : styles.lightCard,
            {flexDirection: isRTL ? 'row-reverse' : 'row'},
          ]}>
          {/* Left side - Image */}
          <Image source={item.service.image} style={styles.serviceImage} />

          {/* Right side - Content */}
          <View style={styles.contentContainer}>
            <View
              style={[
                styles.headerRow,
                {flexDirection: isRTL ? 'row-reverse' : 'row'},
              ]}>
              <Text
                style={[
                  styles.title,
                  isDarkMode && styles.darkText,
                  isRTL && styles.rtlText,
                ]}>
                {t(item.service.title)}
              </Text>
              <TouchableOpacity
                onPress={() => handleRemove(item.service)}
                style={[styles.deleteButton, isRTL ? {left: -4} : {right: -4}]}>
                <Icon name="trash-outline" size={16} color="#FF4B55" />
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.ratingContainer,
                {flexDirection: isRTL ? 'row-reverse' : 'row'},
              ]}>
              <Icon name="star" size={14} color="#FFD700" />
              <Text
                style={[
                  styles.ratingText,
                  isDarkMode && styles.darkText,
                  {marginLeft: isRTL ? 0 : 4, marginRight: isRTL ? 4 : 0},
                ]}>
                {item.service.rating}
              </Text>
              <Text
                style={[
                  styles.reviewCount,
                  isDarkMode && styles.darkSubText,
                  {marginLeft: isRTL ? 0 : 4, marginRight: isRTL ? 4 : 0},
                ]}>
                {t('draft.service.reviews', {count: item.service.reviews})}
              </Text>
            </View>

            <View
              style={[
                styles.priceContainer,
                {flexDirection: isRTL ? 'row-reverse' : 'row'},
              ]}>
              <Text
                style={[
                  styles.price,
                  {
                    color: isDarkMode ? Colors.pureWhite : '#3D7DAB',
                  },
                  isRTL && styles.rtlText,
                ]}>
                {t('draft.service.price', {
                  amount: item.service.price * item.units,
                })}
              </Text>
              <Text
                style={[
                  styles.units,
                  isDarkMode && styles.darkSubText,
                  isRTL && styles.rtlText,
                ]}>
                {t('draft.service.units', {count: item.units})}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    // new
    backgroundColor: Colors.pureWhite,
    marginBottom: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ECE9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  noDraftText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: Colors.lightGray,
    textAlign: 'center',
    lineHeight: 24,
  },

  draftCard: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: Colors.white,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: 'hidden',
    marginTop: 16,
  },
  serviceImage: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    padding: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
    color: Colors.black,
  },
  reviewCount: {
    fontSize: 12,
    color: '#7D8597',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#3D7DAB',
  },
  units: {
    fontSize: 12,
    color: '#7D8597',
  },
  deleteButton: {
    padding: 4,
    borderRadius: 6,
    backgroundColor: '#FFEFF0',
  },
  darkCard: {
    backgroundColor: Colors.navBg,
  },
  darkText: {
    color: Colors.white,
  },
  darkSubText: {
    color: '#A5A5A5',
  },
});

export default Draft;
