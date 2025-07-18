import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Foto profil lokal */}
      <Image source={require('../../assets/images/profile.jpg')} style={styles.photo} />

      <Text style={styles.item}>Nama lengkap: M. Dzulfikar Hidayat</Text>
      <Text style={styles.item}>NIM: 105841107822</Text>
      <Text style={styles.item}>Kelas: 6C</Text>
      <Text style={styles.item}>Jurusan: Informatika</Text>
      <Text style={styles.item}>Fakultas: Teknik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  photo: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  item: { fontSize: 16, marginBottom: 6, textAlign: 'center' },
});
