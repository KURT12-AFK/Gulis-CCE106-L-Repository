import { StyleSheet, Text, View, Image } from 'react-native';
import StatCard from './Components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom Dashboard</Text>
      <StatCard
        title="Total Users "
        image={require('./assets/user.png')}
        value="1,240"
        bgColor="#0a0a09"
      />
      <StatCard
        title="Revenue "
        image={require('./assets/money.png')}
        value="$12,450"
        bgColor="#2c9f0c"
      />
      <StatCard
        title="Pending Issues "
        image={require('./assets/problem-solving.png')}
        value="3"
        bgColor="#f6c70a"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f2937',
    textAlign: 'center',
  }
});