import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen(){
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Carguita
        </Text>
        <Text style={styles.subtitle}>
        Que 
        necesitas transportar? 
        </Text> 
        <text> 
          Encontraras camionetas y caminiones disponibles para al instante. 
        </text>
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