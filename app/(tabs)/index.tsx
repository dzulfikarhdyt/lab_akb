import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TabIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/favicon.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Text style={styles.text}>
        Universitas Muhammadiyah Makassar (Unismuh) adalah salah satu perguruan tinggi swasta ternama di Indonesia Timur yang terletak di Kota Makassar. Unismuh berdiri pada tahun 1963 dan berkomitmen untuk mencetak lulusan unggul, Islami,
        dan berdaya saing global.
      </Text>
      <Text style={styles.text}>
        Fakultas Teknik Unismuh Makassar memiliki berbagai program studi, termasuk Teknik Informatika, yang fokus pada pengembangan teknologi dan inovasi digital.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2c3e50',
    textAlign: 'center',
  },
  image: {
    width: '90%',         // ✅ Tidak penuh lebar layar
    height: 140,          // ✅ Lebih pendek
    borderRadius: 12,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'justify',
    marginBottom: 12,
  },
});
