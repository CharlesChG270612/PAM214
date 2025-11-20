import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Detalle from './screens/detalle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') iconName = 'home';
            else if (route.name === 'ProfileStack') iconName = 'person';
            else if (route.name === 'SettingsStack') iconName = 'settings';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="HomeStack" options={{ title: 'Inicio' }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Inicio' }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="ProfileStack" options={{ title: 'Perfil' }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'Perfil de Usuario' }}
              />
              <Stack.Screen
                name="Detalle"
                component={Detalle}
                options={{ title: 'Detalles del Usuario' }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="SettingsStack" options={{ title: 'Configuración' }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ title: 'Configuración' }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
