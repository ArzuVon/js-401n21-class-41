import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import RockPaperSc from './components/RockPaperSc.JS';

export default function App() {
  return (
    <View style={styles.container}>
      <RockPaperSc/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
