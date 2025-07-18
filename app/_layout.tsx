import * as Font from 'expo-font';
import { Slot } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Anton: require('../assets/fonts/Anton-Regular.ttf'),
        BebasNeue: require('../assets/fonts/BebasNeue-Regular.ttf'),
        Inconsolata: require('../assets/fonts/Inconsolata-VariableFont_wdth,wght.ttf'),
        LilitaOne: require('../assets/fonts/LilitaOne-Regular.ttf'),
        LobsterTwo: require('../assets/fonts/LobsterTwo-Bold.ttf'),
        Michroma: require('../assets/fonts/Michroma-Regular.ttf'),
        Oswald: require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
        Pacifico: require('../assets/fonts/Pacifico-Regular.ttf'),
        Raleway: require('../assets/fonts/Raleway-Italic-VariableFont_wght.ttf'),
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
