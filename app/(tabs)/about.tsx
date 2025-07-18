import { Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 24 }}>Tentang Saya</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', paddingHorizontal: 20 }}>Ini adalah halaman tentang saya. Saya seorang pengembang aplikasi yang suka bereksperimen dengan berbagai teknologi.</Text>
    </View>
  );
}
