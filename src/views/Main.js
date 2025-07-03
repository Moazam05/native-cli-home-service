import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconTwo from 'react-native-vector-icons/Feather';

import Home from './tabs/Home';
import Profile from './tabs/Profile';
import Bookings from './tabs/Bookings';
import WebViewScreen from '../components/WebViewScreen'; // Import your WebViewScreen
import Colors from '../constants/colors';
import {useCustomTheme} from '../theme/Theme';
import CustomDrawer from './Home/components/CustomDrawer';
import useTypedSelector from '../hooks/useTypedSelector';
import {selectLanguage} from '../redux/language/languageSlice';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); // Add Stack Navigator

const ICON_SIZES = {
  home: 22,
  'my-library-books': 24,
  'person-outline': 27,
};

const TabIcon = ({focused, iconName, isDarkMode}) => {
  const IconComponent = iconName === 'home' ? IconTwo : Icon;

  const getIconColor = () => {
    if (focused) {
      return isDarkMode ? Colors.pureWhite : Colors.primary;
    }
    return '#6F767E';
  };

  return (
    <View style={styles.tabIconContainer}>
      <IconComponent
        name={iconName}
        size={ICON_SIZES[iconName] || 24}
        color={getIconColor()}
      />
    </View>
  );
};

const TabBarButton = props => (
  <View style={styles.tabBarButtonContainer}>
    <TouchableOpacity {...props} activeOpacity={1} />
  </View>
);

const renderTabIcon =
  (iconName, isDarkMode) =>
  ({focused}) =>
    <TabIcon focused={focused} iconName={iconName} isDarkMode={isDarkMode} />;

const TabNavigator = () => {
  const theme = useCustomTheme();
  const isDarkMode = theme === 'dark';

  const background = isDarkMode ? Colors.navBg : Colors.pureWhite;
  const borderTopWidth = isDarkMode ? 0 : 0;

  const tabBarStyle = {
    ...styles.tabBar,
    backgroundColor: background,
    borderTopWidth,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: tabBarStyle,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarInactiveBackgroundColor: 'transparent',
        android_ripple: {enabled: false},
        pressColor: 'transparent',
        pressOpacity: 1,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: renderTabIcon('home', isDarkMode ? true : false),
          tabBarButton: TabBarButton,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: renderTabIcon(
            'my-library-books',
            isDarkMode ? true : false,
          ),
          tabBarButton: TabBarButton,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: renderTabIcon(
            'person-outline',
            isDarkMode ? true : false,
          ),
          tabBarButton: TabBarButton,
        }}
      />
    </Tab.Navigator>
  );
};

// Create a Stack Navigator that includes both Drawer and WebView
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          headerShown: true,
          headerTitle: 'Privacy Policy',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  const currentLanguage = useTypedSelector(selectLanguage);
  const isRTLLanguage = currentLanguage === 'ar';
  const [isReady, setIsReady] = useState(true);

  // Handle language changes
  useEffect(() => {
    setIsReady(false);
    // Small delay to ensure drawer state is reset
    setTimeout(() => {
      setIsReady(true);
    }, 100);
  }, [currentLanguage]);

  if (!isReady) {
    return null;
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '82%',
          backgroundColor: 'transparent',
        },
        overlayColor: 'rgba(0,0,0,0.5)',
        drawerType: 'front',
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
        drawerPosition: isRTLLanguage ? 'right' : 'left',
        // Disable all gesture handling
        gestureEnabled: false,
        swipeEnabled: false,
      }}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
};

// Export MainStack instead of Main
const Main = () => {
  return <MainStack />;
};

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    height: 57,
    paddingVertical: 8,
  },
  tabBarItem: {
    marginHorizontal: 8,
  },
  tabBarButtonContainer: {
    flex: 1,
  },
});

export default Main;
