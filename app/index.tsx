import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Colors } from '../constants/Colors';

export default function SplashScreen() {
  const router = useRouter();
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0.8);

  useEffect(() => {
    logoOpacity.value = withTiming(1, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1)
    });
    logoScale.value = withTiming(1, {
      duration: 1500,
      easing: Easing.out(Easing.back(1.5))
    });

    const timeout = setTimeout(() => {
      router.replace('/onboarding');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image
          source={require('../assets/logo/azzan-logo-with-name.png')}
          style={styles.logo}
          contentFit="contain"
          transition={1000}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '80%',
    height: 200,
  },
  logo: {
    flex: 1,
  },
});
