import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
        <Text>Carguita</Text>
         <Text>Carguita</Text>
          <Text>Carguita</Text>
          <Text>PRUEBA 123333</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;