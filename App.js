import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ItemsScreen from './screens/ItemsScreen';
import AddItemScreen from './screens/AddItemScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

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

  function addItem(item) {
    const newItem = {
      id: Date.now().toString(),
      title: item.title,
      description: item.description,
    };

    setItems([...items, newItem]);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />

        <Stack.Screen name="Items">
          {(props) => <ItemsScreen {...props} items={items} />}
        </Stack.Screen>

        <Stack.Screen name="AddItem">
          {(props) => (
            <AddItemScreen
              {...props}
              onAddItem={addItem}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detalle' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}