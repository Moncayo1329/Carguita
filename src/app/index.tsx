import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen(){
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Carguita
        </Text>
        <Text>
        Que necesitas transportar? 
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1, 
   justifyContent:"center", 
   
    
  },
})