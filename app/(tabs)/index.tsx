import { Text, View } from 'react-native';

export default function TabIndex() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 24 }}>halaman utama</Text>
    </View>
  );
}
