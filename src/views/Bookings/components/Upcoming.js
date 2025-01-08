import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import IconOne from 'react-native-vector-icons/Ionicons';

import Colors from '../../../constants/colors';
import images from '../../../constants/images';
import {useCustomTheme} from '../../../theme/Theme';
import useTypedSelector from '../../../hooks/useTypedSelector';
import {selectedBookedService} from '../../../redux/bookedService/bookedServiceSlice';
import {formatDateEnd, formatTimeWithEnd} from '../../../utils';

const Upcoming = () => {
  const navigation = useNavigation();
  const theme = useCustomTheme();

  const isDarkMode = theme === 'dark';
  const futureBookings = useTypedSelector(selectedBookedService);

  if (!futureBookings?.length) {
    return (
      <View
        style={[
          styles.emptyContainer,
          {
            backgroundColor: isDarkMode ? Colors.navBg : Colors.pureWhite,
          },
        ]}>
        <Image source={images.Upcoming} style={styles.emptyImage} />
        <Text style={[styles.noOrderText, isDarkMode && styles.darkText]}>
          No Upcoming Order
        </Text>
        <Text style={[styles.subText, isDarkMode && styles.darkSubText]}>
          Currently you don't have any upcoming order.
        </Text>
        <Text style={[styles.subText, isDarkMode && styles.darkSubText]}>
          Place and track your orders from here.
        </Text>
        <TouchableOpacity
          style={styles.viewServicesButton}
          onPress={() => navigation.navigate('CategoryDetails')}>
          <Text style={styles.buttonText}>View all services</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.wrap, isDarkMode && styles.darkWrap]}>
      {futureBookings.map((booking, index) => {
        const referenceCode = `${new Date().getTime()}`;
        return (
          <View
            key={index}
            style={[styles.card, isDarkMode && styles.darkCard]}>
            {/* Header Section */}
            <View style={styles.headerSection}>
              <View style={styles.serviceIcon}>
                <Image source={images.categoryOne} style={styles.categoryOne} />
              </View>
              <View style={styles.titleContainer}>
                <Text style={[styles.title, isDarkMode && styles.darkText]}>
                  {booking.service.title}
                </Text>
                <Text style={styles.reference}>
                  Reference Code: D-{referenceCode.substring(1, 7)}
                </Text>
              </View>
            </View>

            <View style={styles.rowStatus}>
              <Text style={styles.label}>Status</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Confirmed</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.iconWrapper}>
                <IconOne
                  name="calendar-outline"
                  size={24}
                  color={Colors.lightGray}
                />
              </View>
              <View>
                <Text
                  style={[styles.scheduleText, isDarkMode && styles.darkText]}>
                  {formatTimeWithEnd(booking.selectedTime)},{' '}
                  {formatDateEnd(booking.selectedDate)}
                </Text>
                <Text style={styles.schedule}>Schedule</Text>
              </View>
            </View>

            <View style={styles.rowLast}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.serviceIcon}>
                  <Text style={styles.serviceIconText}>W</Text>
                </View>

                <View>
                  <Text
                    style={[
                      styles.providerName,
                      isDarkMode && styles.darkText,
                    ]}>
                    Westinghouse
                  </Text>
                  <Text style={styles.schedule}>Service provider</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.callButton}>
                <IconOne name="call" size={19} color={Colors.pureWhite} />
                <Text style={styles.callButtonText}>Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
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
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  noOrderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  categoryOne: {
    width: 51,
    height: 51,
    resizeMode: 'contain',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  darkSubText: {
    color: Colors.darkLightGray,
  },
  darkText: {
    color: Colors.pureWhite,
  },
  viewServicesButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: Colors.pureWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  schedule: {
    color: Colors.lightGray,
    fontSize: 12,
    marginTop: 2,
  },
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    backgroundColor: Colors.pureWhite,
    borderRadius: 8,
    elevation: 2,
  },
  darkCard: {
    backgroundColor: Colors.navBg,
  },
  headerSection: {
    flexDirection: 'row',
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  serviceIcon: {
    width: 43,
    height: 43,
    borderRadius: 24,
    backgroundColor: '#FFE5D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceIconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9457',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: Colors.black,
  },
  reference: {
    color: Colors.lightGray,
    fontSize: 12,
  },
  rowStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rowLast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: '#4CAF50',
    fontWeight: '500',
    fontSize: 12,
  },
  label: {
    fontSize: 14,
    color: Colors.lightGray,
    marginRight: 12,
  },
  iconWrapper: {
    marginRight: 12,
    padding: 8,
    borderRadius: 50,
    borderColor: '#EFEFEF',
    borderWidth: 1,
  },
  scheduleText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '500',
  },

  providerName: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },

  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    padding: 9,
    borderRadius: 12,
  },
  callButtonText: {
    color: Colors.pureWhite,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Upcoming;
