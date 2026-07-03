import { Pressable, StyleSheet, Text, View } from "react-native"

// Esta pantalla es la primera que ve el usuario al abrir la aplicación.
export default function HomeScreen({navigation}){
    return (
         <View style={styles.container}>
        <Text style={styles.title}>App del curso</Text>
        <Text style={styles.subtitle}>Sesión 2: navegación y datos locales</Text>

        {/* Este botón lleva al usuario a la pantalla donde se muestra el listado. */}
        <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Items')}
        >
            <Text style={styles.buttonText}>Ver listado</Text>
        </Pressable>

        {/* Con este botón se abre el formulario para agregar un nuevo elemento. */}
        <Pressable
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('AddItem')}
        >
            <Text style={styles.secondaryButtonText}>Agregar elemento</Text>
        </Pressable>
        </View>
    );  
}

const styles = StyleSheet.create({
  // Aquí defino el diseño principal de la pantalla.
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f7fb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#555',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#2563eb',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});