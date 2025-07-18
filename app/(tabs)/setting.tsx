import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
      }}
    >
      <MaterialCommunityIcons name="cog" size={64} color="#6200ee" />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>Settings</Text>
      <Text style={{ fontSize: 16, color: '#636e72', marginTop: 8 }}>Pengaturan aplikasi Anda di sini.</Text>
    </View>
  );
}
