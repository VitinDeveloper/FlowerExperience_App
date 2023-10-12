import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from "./src/pages/Feed";
import Favoritos from "./src/pages/Favoritos";
import Informativo from "./src/pages/Informativo";
import Perfil from "./src/pages/Perfil";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Feed" component={Feed} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Favoritos" component={Favoritos} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Informativo" component={Informativo} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Perfil" component={Perfil} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Login" component={Login} />             
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Cadastro" component={Cadastro} />             
            </Stack.Navigator>
        </NavigationContainer>
    )
} 