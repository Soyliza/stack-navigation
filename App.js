import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ItemsScreen from './screens/ItemsScreen';
import AddItemScreen from './screens/AddItemScreen';
import DetailScreen from './screens/DetailScreen';

// Creo el Stack para controlar la navegación entre las pantallas.
const Stack = createNativeStackNavigator();

export default function App() {

  // Aquí guardo los elementos que se mostrarán en el listado.
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'React Native',
      description: 'Aprender navegación'
    },
    {
      id: '2',
      title: 'Expo',
      description: 'Crear aplicaciones móviles'
    }
  ]);

  // Esta función agrega un nuevo elemento a la lista.
  function addItem(item) {
    const newItem = {
      id: Date.now().toString(),
      title: item.title,
      description: item.description,
    };

    setItems([...items, newItem]);
  }

  // Aquí configuro todas las pantallas de la aplicación.
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Pantalla principal */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />

        {/* Pantalla donde se muestra el listado */}
        <Stack.Screen name="Items">
          {(props) => <ItemsScreen {...props} items={items} />}
        </Stack.Screen>

        {/* Pantalla para registrar un nuevo elemento */}
        <Stack.Screen name="AddItem">
          {(props) => (
            <AddItemScreen
              {...props}
              onAddItem={addItem}
            />
          )}
        </Stack.Screen>

        {/* Pantalla que muestra la información completa del elemento */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detalle' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}