import {WEB_CLIENT_ID} from '@env';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import images from '../../constants/images';
import Colors from '../../constants/colors';
import {supabase} from '../../supabase/supabaseClient';
import {setUser} from '../../redux/auth/authSlice';
import {useCustomTheme} from '../../theme/Theme';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';

const SignIn = () => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const welcomeOpacity = useRef(new Animated.Value(0)).current;
  const googleButtonOpacity = useRef(new Animated.Value(0)).current;
  const googleButtonTranslateY = useRef(new Animated.Value(50)).current;
  const guestButtonOpacity = useRef(new Animated.Value(0)).current;
  const guestButtonTranslateY = useRef(new Animated.Value(50)).current;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useCustomTheme();
  const {t} = useTranslation();
  const isDarkMode = theme === 'dark';

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(welcomeOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(googleButtonOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(googleButtonTranslateY, {
          toValue: 0,
          tension: 20,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(guestButtonOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(guestButtonTranslateY, {
          toValue: 0,
          tension: 20,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  useEffect(() => {
    const configureGoogleSignIn = async () => {
      try {
        await GoogleSignin.configure({
          webClientId: WEB_CLIENT_ID,
          offlineAccess: true,
          scopes: ['profile', 'email'],
        });
      } catch (error) {
        console.error('Google Sign In configuration error:', error);
      }
    };

    configureGoogleSignIn();
  }, []);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();

      if (userInfo.data && userInfo.data.idToken) {
        const {data, error} = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: userInfo.data.idToken,
        });

        if (error) {
          throw error;
        }

        await AsyncStorage.setItem('user', JSON.stringify(data));
        dispatch(setUser(data));
        navigation.replace('Main');
      } else {
        throw new Error('Failed to get necessary tokens');
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Toast.show({
          type: 'error',
          text2: 'User cancelled the login flow',
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Toast.show({
          type: 'error',
          text2: 'Operation in progress',
        });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Toast.show({
          type: 'error',
          text2: 'Play services not available or outdated',
        });
      } else {
        Toast.show({
          type: 'error',
          text2: `${error.message}\nCode: ${error.code}`,
        });
        console.error('Detailed error:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const renderGoogleButtonContent = () => {
    if (isLoading) {
      return (
        <View style={styles.googleButtonContent}>
          <ActivityIndicator size="small" color="#333" />
          <Text style={styles.googleButtonText}>{t('signIn.signingIn')}</Text>
        </View>
      );
    }

    return (
      <View style={styles.googleButtonContent}>
        <Image
          source={images.googleLogo}
          style={styles.googleIcon}
          resizeMode="contain"
        />
        <Text style={styles.googleButtonText}>
          {t('signIn.continueWithGoogle')}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Colors.primaryDark : Colors.pureWhite,
        },
      ]}>
      <Animated.View style={[styles.contentContainer, {opacity: logoOpacity}]}>
        <Image
          source={isDarkMode ? images.logo : images.authLogo}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.Text
        style={[
          styles.welcomeText,
          isDarkMode ? {color: Colors.white} : {color: '#333'},
          {opacity: welcomeOpacity},
        ]}>
        {t('signIn.welcomeBack')}
      </Animated.Text>

      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          opacity: googleButtonOpacity,
          transform: [{translateY: googleButtonTranslateY}],
        }}>
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          style={[
            styles.googleButton,
            isLoading && styles.googleButtonDisabled,
          ]}
          activeOpacity={0.8}
          disabled={isLoading}>
          {renderGoogleButtonContent()}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pureWhite,
    paddingHorizontal: 20,
    gap: 30,
  },
  contentContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  googleButton: {
    width: '100%',
    marginTop: 20,
    backgroundColor: Colors.pureWhite,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleButtonDisabled: {
    opacity: 0.7,
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default SignIn;
