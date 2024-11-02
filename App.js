import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailsScreen from "./screens/FoodDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoritesContextProvider from "./store/favoritesContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "green" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{
          title: "Tüm Kategoriler",

          drawerIcon: () => <Ionicons name="list" size={23} color="black" />,
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        options={{
          title: "Favori Listesi",
          drawerIcon: () => (
            <Ionicons name="star-outline" size={23} color="black" />
          ),
        }}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "green" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "white" },
          }}
        >
          {/* <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "Tüm Kategoriler" }}
        /> */}
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
