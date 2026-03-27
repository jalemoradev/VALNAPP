import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Aquí se cargan fuentes custom cuando se agreguen:
        // await Font.loadAsync({
        //   'app-regular': require('./assets/fonts/AppFont-Regular.ttf'),
        //   'app-bold': require('./assets/fonts/AppFont-Bold.ttf'),
        // });
      } catch (e) {
        console.warn('Error loading resources:', e);
      } finally {
        setAppReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar style="dark" translucent backgroundColor="transparent" />
          <View style={styles.content}>
            <Text style={styles.title}>ValnApp</Text>
            <Text style={styles.subtitle}>Bienvenido</Text>
          </View>
        </SafeAreaView>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D101B',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
  },
});
