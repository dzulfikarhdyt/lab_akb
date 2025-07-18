// import { StyleSheet, Text, View } from 'react-native';

// const mahasiswa = [
//   { nama: 'Muh Nur Sandi', stambuk: '105841106721', font: 'Anton' },
//   { nama: 'Afifah Auliyah', stambuk: '105841111022', font: 'BebasNeue' },
//   { nama: 'Muh Fikri Maulana', stambuk: '105841107622', font: 'LilitaOne' },
//   { nama: 'Muhammad Hasraddin Hasnan', stambuk: '105841107722', font: 'LobsterTwo-Bold' },
//   { nama: 'Muhammad Dzulfikar Hidayat', stambuk: '105841107822', font: 'Michroma' }, // kamu
//   { nama: 'Ahmad Yani', stambuk: '105841107922', font: 'Inconsolata' },
//   { nama: 'Rosfika Awalia', stambuk: '105841108122', font: 'Oswald' },
//   { nama: 'Yogi A. Ammah', stambuk: '105841108222', font: 'Raleway' },
//   { nama: 'Ursan', stambuk: '105841108722', font: 'Pacifico' },
//   { nama: 'Rika Armoyani', stambuk: '105841108822', font: 'SpaceMono-Regular' },
// ];

// // Urutkan berdasarkan stambuk ASCENDING
// const sorted = [...mahasiswa].sort((a, b) => a.stambuk.localeCompare(b.stambuk));

// // Ambil 5 pertama dan 5 terakhir
// const ordered = [...sorted.slice(0, 5), ...sorted.slice(-5)];

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {ordered.map((mhs, index) => (
//         <Text key={index} style={[styles.text, { fontFamily: mhs.font }, index < 5 ? styles.bold : styles.regular]}>
//           {index + 1}. {mhs.nama} ({mhs.stambuk})
//         </Text>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     padding: 20,
//     gap: 10,
//   },
//   text: {
//     fontSize: 16,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
//   regular: {
//     fontWeight: 'normal',
//   },
// });
