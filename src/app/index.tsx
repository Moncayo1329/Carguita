import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen(){
  return (
    <SafeAreaView style={{ flex: 1 }}>
  <View style={styles.container}>
    
    {/* Título */}
    <Text style={styles.title}>Carguita</Text>

    {/* Sección sin registros */}
    <View style={styles.inicio}>
      <Text style={styles.inicioText}>Sin registros previos</Text>
      <Text style={styles.iniciobase}>
        Encuentra flete veloz en Macas  menos de 1 minuto.
      </Text>
    </View>

    {/* Sección de pregunta */}
    <View style={styles.preguntaContainer}>
      <Text style={styles.subtitle}>
        ¿Qué necesitas transportar?
      </Text>
      <Text style={styles.descripcion}>
        Encontrarás camionetas y camiones disponibles al instante.
      </Text>
    </View>

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

  inicio: {
   backgroundColor:'#ecbc97',
   borderRadius:10,
   fontSize:20,
   width:300,
   height:70,
   padding: 10,
   marginBottom: 360,
   textAlign:'center',

  }, 

inicioText:{

fontSize:20,
textAlign:'center',
fontFamily:'bold',


},



  iniciobase:{
    fontSize: 10,
    marginTop:5, 
    marginLeft: 60,
    color: '#8e4107',
  },


  title : {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom:50,
     marginRight: 150,


  },
  subtitle: {
    fontSize: 18,
    color: "#000000",
    marginTop: 10,
  }
})