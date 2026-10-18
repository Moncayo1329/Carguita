import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const tiposCarga = [
  { id: 1, nombre: "Carga general" },
  { id: 2, nombre: "Materiales" },
  { id: 3, nombre: "Muebles" },
  { id: 4, nombre: "Mudanzas" },
  { id: 5, nombre: "Motos" },
  { id: 6, nombre: "Puerta a Puerta" }
];

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
        Encuentra flete veloz en Macas en  menos de 1 minuto. 
      </Text>
    </View>

    {/* Sección de pregunta */}
    <View>
      <ImageBackground  
      source={require('@/assets/images/image.png')}
      resizeMode="cover"
      style={styles.imageBackground}
      >
      <Text style={styles.subtitle}>
        ¿Qué necesitas transportar?
      </Text>
      <Text style={styles.descripcion}>
        Encontrarás camionetas y camiones disponibles al instante.
      </Text>
      </ImageBackground>
    </View>
  </View> 

  {/* Seccion de  Servicios*/}  

    <View style={styles.servicios}>
      {tiposCarga.map((tipo) => (
        <View key={tipo.id} style={styles.box}>
          <Text>{tipo.nombre}</Text>
        </View>
      ))}
    </View>

    <View style={styles.inicio}>
      <Text style={styles.inicioText}>Sin registros previos</Text>
      <Text style={styles.iniciobase}>
        Encuentra flete veloz en Macas en  menos de 1 minuto. 
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

  inicio: {
   backgroundColor:'#ecbc97',
   borderRadius:10,
   fontSize:20,
   width:300,
   height:70,
   padding: 10,
   marginBottom: 50,
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
    fontSize: 30,
    color: "#f2efef",
    fontWeight:'bold',
    marginTop: 25,
    marginLeft:15,
  },


  imageBackground: {
    width:340,
    height:150,
    alignSelf:'center',
    position: 'relative',
     top: -30,
     borderRadius: 20,
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
    
  }, 



descripcion: {
  fontSize: 10,
    color: "#d0cdcd",
    marginLeft:15,
    marginTop:5,
}, 

 servicios: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 15,
    marginBottom: 25,
  },

box:{
 fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 15,
},
  
})