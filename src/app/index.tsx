import { Ionicons } from '@expo/vector-icons';
import { Stack } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



import {
  ScrollView
} from "react-native-gesture-handler";



const tiposCarga = [
  { id: 1, icon: "cube-outline", nombre: "Carga general", description:"Cajas,bultos y paquetes" },
  { id: 2, icon: "hammer", nombre: "Materiales" , description:"Cementos,arena,bloques, varillas de obras"},
  { id: 3, icon: "bed-outline", nombre: "Muebles" , description:"Electrodomésticos, muebles y accesorios" },
  { id: 4, icon: "home-outline", nombre: "Mudanzas", description:"Vivienda completa, oficina o local comercial" }, 
   { id: 5, icon: "navigate-outline", nombre: "Viajes", description:"Viajes de ciudad a ciudad" },
  { id: 6, icon: "leaf-outline", nombre: "Agricultura", description:"Plantas, frutas y verduras" },
];

export default function HomeScreen() {
  return (
    <> 

    <Stack.Screen
    options={{
      headerTitle: () => (

        <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Logo */}
              <Image
                source={require("@/assets/images/logo.png")}
                style={{
                  width: 36,
                  height: 36,
                  marginRight: 10,
                  borderRadius: 8, // opcional
                }}
                resizeMode="contain"
              />


        <View>
      <Text 
      style={{
        fontSize:15,
        fontWeight:"bold",
        color: "#303030",
      }}>
  Carguita 
      </Text>
      <Text style={{
        fontSize:10,
        color:"#666",
        marginTop:1,
      }}>

Transporte local en Macas 
      </Text>
        </View>
        </View>
      ), 
    
      headerShown:true,
      headerStyle:{
       elevation:0,
        shadowOpacity: 0,           // iOS
      borderBottomWidth: 0,       // por si acaso
      },
    }} 

    />
     
      
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={true}
      >

        {/* Información inicial */}
        <View> 
          <View style={styles.inicio}>
            <View style={styles.inicioFila}>
               
       
          <View style={styles.inicioText}>
            <View style={{
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor:'#ad5614',
    alignItems: 'center',
    marginTop:-10,
  }}> 
         <Ionicons 
          name="rocket-outline"
          size={20}
          color="white"
          /> </View>
         
          <Text 
          style={{
            marginLeft:55,
            marginTop:-50,
            marginBottom:10,
            fontSize:15,
            fontWeight:"bold",
            color:"#303030",
          }}> Sin registros previos</Text>
          </View>
       </View>



          <Text style={styles.iniciobase}>
             Encuentra flete veloz en Macas en menos de 1 minuto.
          </Text>
          
        </View>
         </View>

        {/* Imagen y pregunta */}
        <ImageBackground
          source={require("@/assets/images/image.png")}
          resizeMode="cover"
          imageStyle={styles.image}
          style={styles.imageBackground}
        >
          <View style={styles.imageOverlay}>
            <Text style={styles.subtitle}>
              ¿Qué necesitas transportar?
            </Text>

            <Text style={styles.descripcion}>
              Encontrarás camionetas y camiones disponibles al instante.
            </Text>
          </View>
        </ImageBackground>

        {/* Servicios: 2 columnas y 2 filas */}
        <View style={styles.servicios}>
          {tiposCarga.map((tipo) => (
            <View key={tipo.id} style={styles.box}>
              <View 
              style={{
                width: 35,
    height: 35,
    borderRadius: 7,
    justifyContent: 'center',
    backgroundColor:'#dee6fa',
    alignItems: 'center',
    marginTop:-10,
    marginLeft:-110,
              }}> 

             
              <Ionicons
  name={tipo.icon as any}
  size={20}
  color="#c1773a"
/> 



</View>
           <View 
           style={{
           marginRight:30,
           marginTop:10,
           }}>
              <Text style={styles.boxText}> 
                {tipo.nombre} 
                </Text>
                </View>
                 

                <View
                style={{
                
                }}>
                  <Text style={styles.cuadroDescription}>{tipo.description}</Text>
                </View>
             
           
            </View>
          ))}
        </View>

        {/* Sección inferior */}


        <View style={{backgroundColor: "#ecbc97",
    borderRadius: 10,
    width: "100%",
    padding: 15,
    paddingVertical: 1,
    marginBottom: 20,
    justifyContent: "center",

        }}>
          <Text style={{
            marginLeft:55,
            marginTop:20,
            marginBottom:10,
            fontSize:15,
            fontWeight:"bold",
            color:"#303030",
          }}>
            5 choferes activos
          </Text>

          <Text 
          style ={{marginLeft:55,
            marginTop:-50,
            marginBottom:10,
            fontSize:15,
            fontWeight:"bold",
            color:"#303030"}}  style={styles.iniciobase}>
 </Text>

    <View style={{
                 width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor:'#ad5614',
    alignItems: 'center',
    marginTop:-28,
   
              }}>

           <Ionicons 
          name="search"
          size={15}
          color="orange"/> 
          </View>
           <Text>Disponibles en el perimetro de Macas</Text>
         
        </View>


<View>
<Text>
  Trato directo con el chofer via WhatsApp o llamada telefononica. Sin 
  intermediarios ni comisiones ocultas. Pagos directos al chofer.
</Text>



</View>




      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollView: {
    flex: 1,
  },

  contenido: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: "center",
  },

  title: {
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 25,
  },

  inicio: {
    backgroundColor: "#ecbc97",
    borderRadius: 10,
    width: "100%",
    padding: 15,
    paddingVertical: 1,
    marginBottom: 20,
    justifyContent: "center",
  },

  inicioText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop:30,
    marginBottom:5,
    
   
  },

  iniciobase: {
    fontSize: 12,
    marginTop: -10,
    color: "#8e4107",
    marginLeft:60,
    lineHeight:16,
    paddingBottom:15,
 
   
   
  },

  imageBackground: {
    width: "100%",
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 25,
  },

  image: {
    borderRadius: 20,
  },

  imageOverlay: {
    flex: 1,
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
  },

  subtitle: {
    fontSize: 26,
    color: "#f2efef",
    fontWeight: "bold",
  },

  descripcion: {
    fontSize: 12,
    color: "#ffffff",
    marginTop: 8,
  },

  servicios: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 15,
    marginBottom: 25,
  },

  box: {
    width: "48%",
    minHeight: 85,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f4f2f2",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  cuadroDescription: {
    fontSize: 10,
    color: "#aea6a6",
    marginLeft: -10,
    marginTop:5,
    textAlign: "center",
  },

  boxText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  finalText:{
 fontSize: 15,
    fontWeight: "bold",
    marginTop:20,
    marginBottom:20,
    textAlign:"center",
    },

});
