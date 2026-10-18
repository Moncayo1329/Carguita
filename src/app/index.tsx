import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



import {
  ScrollView
} from "react-native-gesture-handler";

const tiposCarga = [
  { id: 1, nombre: "Carga general" },
  { id: 2, nombre: "Materiales" },
  { id: 3, nombre: "Muebles" },
  { id: 4, nombre: "Mudanzas" },
   { id: 5, nombre: "Mudanzas" },
  { id: 6, nombre: "Mudanzas" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={true}
      >
        {/* Título */}
        <Text style={styles.title}>Carguita</Text>

        {/* Información inicial */}
        <View style={styles.inicio}>
          <Text style={styles.inicioText}>
            Sin registros previos
          </Text>

          <Text style={styles.iniciobase}>
            Encuentra flete veloz en Macas en menos de 1 minuto.
          </Text>
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
              <Text style={styles.boxText}>
                {tipo.nombre}
              </Text>
            </View>
          ))}
        </View>

        {/* Sección inferior */}
        <View style={styles.inicio}>
          <Text style={styles.inicioText}>
            Sin registros previos
          </Text>

          <Text style={styles.iniciobase}>
            Encuentra flete veloz en Macas en menos de 1 minuto.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 25,
  },

  inicio: {
    backgroundColor: "#ecbc97",
    borderRadius: 10,
    width: "100%",
    minHeight: 70,
    padding: 10,
    marginBottom: 25,
    justifyContent: "center",
  },

  inicioText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  iniciobase: {
    fontSize: 10,
    marginTop: 5,
    color: "#8e4107",
    textAlign: "center",
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

  boxText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
