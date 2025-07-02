import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import useTypedSelector from '../../../hooks/useTypedSelector';
import {selectedUser} from '../../../redux/auth/authSlice';
import {useCustomTheme} from '../../../theme/Theme';
import {setTheme} from '../../../redux/theme/themeSlice';
import Colors from '../../../constants/colors';
import {DRAWER_ITEMS, ICONS} from '../../../constants/data';
import useDirection from '../../../hooks/useDirection';

const IconRenderer = ({
  type,
  name,
  isDarkMode,
  color = Colors.pureWhite,
  size = 21,
}) => {
  const IconComponent = ICONS[type];
  return (
    <IconComponent
      name={name}
      color={isDarkMode ? '#6F767E' : color}
      size={size}
    />
  );
};

const CustomLabel = ({icon, label, isRTL}) => (
  <View
    style={[
      styles.labelContainer,
      {flexDirection: isRTL ? 'row-reverse' : 'row'},
    ]}>
    <IconRenderer
      type={icon.type}
      name={icon.name}
      isDarkMode={false}
      size={22}
      color={Colors.pureWhite}
    />
    <Text style={[styles.drawerLabel, isRTL && styles.rtlText]}>{label}</Text>
  </View>
);

const CustomDrawer = props => {
  const theme = useCustomTheme();
  const dispatch = useDispatch();
  const userDetails = useTypedSelector(selectedUser);
  const {t} = useTranslation();
  const {isRTL} = useDirection();

  const isDarkMode = theme === 'dark';
  const {
    name = '',
    email = '',
    picture = '',
  } = userDetails?.user?.user_metadata || {};

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
    AsyncStorage.setItem('theme', JSON.stringify({newTheme}));
    props.navigation.closeDrawer();
  };

  return (
    <View style={[styles.container, {backgroundColor: '#6C63FF'}]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}>
        {/* Profile Section */}
        <View
          style={[
            styles.profileSection,
            {flexDirection: isRTL ? 'row-reverse' : 'row'},
          ]}>
          <Image source={{uri: picture}} style={styles.profileImage} />
          <View
            style={[
              styles.profileInfo,
              {alignItems: isRTL ? 'flex-end' : 'flex-start'},
            ]}>
            <Text style={[styles.profileName, isRTL && styles.rtlText]}>
              {name}
            </Text>
            <Text
              style={[styles.profileEmail, isRTL && styles.rtlText]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {email}
            </Text>
          </View>
        </View>

        {/* Drawer Items */}
        <View style={styles.drawerItems}>
          {DRAWER_ITEMS.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.drawerItemWrapper}
              onPress={() => {
                // console.log(item.label.split('.')[1]);
                if (item.label === 'drawer.policy') {
                  props.navigation.navigate('WebViewScreen', {
                    url: 'https://sites.google.com/view/zynix-apps/home',
                    title: t('drawer.policy'),
                  });
                }
              }}>
              <CustomLabel
                icon={item.icon}
                label={t(item.label)}
                isRTL={isRTL}
              />
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>

      {/* Theme Switcher */}
      <View style={styles.themeContainer}>
        <View
          style={[
            styles.schemeContainer,
            {flexDirection: isRTL ? 'row-reverse' : 'row'},
          ]}>
          <IconRenderer
            type="MaterialIcons"
            name="palette"
            isDarkMode={false}
            size={24}
          />
          <Text style={[styles.themeText, isRTL && styles.rtlText]}>
            {t('drawer.colorScheme')}
          </Text>
        </View>
        <View style={styles.themeSwitcher}>
          <TouchableOpacity
            style={[
              styles.themeOption,
              !isDarkMode && styles.activeThemeOption,
              {flexDirection: isRTL ? 'row-reverse' : 'row'},
            ]}
            onPress={toggleTheme}>
            <IconRenderer
              type="Ionicons"
              name="sunny-outline"
              color={!isDarkMode ? '#6C63FF' : Colors.pureWhite}
              size={20}
            />
            <Text
              style={[
                styles.themeOptionText,
                !isDarkMode && styles.activeThemeOptionText,
                isRTL && styles.rtlText,
                {marginLeft: isRTL ? 0 : 8, marginRight: isRTL ? 8 : 0},
              ]}>
              {t('drawer.light')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.themeOption,
              isDarkMode && styles.activeThemeOption,
              {flexDirection: isRTL ? 'row-reverse' : 'row'},
            ]}
            onPress={toggleTheme}>
            <IconRenderer
              type="Ionicons"
              name="moon-outline"
              color={isDarkMode ? '#6C63FF' : Colors.pureWhite}
              size={20}
            />
            <Text
              style={[
                styles.themeOptionText,
                isDarkMode && styles.activeThemeOptionText,
                isRTL && styles.rtlText,
                {marginLeft: isRTL ? 0 : 8, marginRight: isRTL ? 8 : 0},
              ]}>
              {t('drawer.dark')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  profileSection: {
    padding: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileName: {
    color: Colors.pureWhite,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  profileInfo: {
    flex: 1,
  },
  profileEmail: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
  },
  drawerItems: {
    flex: 1,
    paddingTop: 8,
  },
  drawerItemWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  drawerLabel: {
    color: Colors.pureWhite,
    fontSize: 15,
    fontWeight: '400',
  },
  themeContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  schemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  themeText: {
    color: Colors.pureWhite,
    fontSize: 16,
    fontWeight: '500',
  },
  themeSwitcher: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 30,
    padding: 4,
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
  },
  activeThemeOption: {
    backgroundColor: Colors.pureWhite,
  },
  themeOptionText: {
    color: Colors.pureWhite,
    fontSize: 15,
    fontWeight: '500',
  },
  activeThemeOptionText: {
    color: '#6C63FF',
  },
  rtlText: {
    textAlign: 'right',
  },
});

export default CustomDrawer;
