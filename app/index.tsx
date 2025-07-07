import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: 'red',
          borderRadius: 0,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          M.Dzulfikar Hidayat
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'red',
          borderRadius: 50,
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>105841107822</Text>
      </View>

      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'red',
        }}
      />
    </View>
  );
}
