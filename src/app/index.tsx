import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Carguita</Text>
        <Text>PRUEBA 123333</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;