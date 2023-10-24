import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from "./src/pages/Feed";
import Favoritos from "./src/pages/Favoritos";
import Informativo from "./src/pages/Informativo";
import Perfil from "./src/pages/Perfil";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import Zamioculca from "./src/pages_plantas/Zamioculca";
import Anturio from "./src/pages_plantas/Anturio";
import Begonia from "./src/pages_plantas/Begonia";
import Bougainville from "./src/pages_plantas/Bougainville";
import Dipladenia from "./src/pages_plantas/Dipladenia";
import Espada from "./src/pages_plantas/Espada";
import Orquidea from "./src/pages_plantas/Orquidea";
import Peperomia from "./src/pages_plantas/Peperomia";
import Samambaia from "./src/pages_plantas/Samambaia";
import Costela from "./src/pages_plantas/Costela";
import Administrador from "./src/pages/Administrador";

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
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Zamioculca" component={Zamioculca} />   
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Peperomia" component={Peperomia} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Samambaia" component={Samambaia} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Dipladenia" component={Dipladenia} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Begonia" component={Begonia} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Costela" component={Costela} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Espada" component={Espada} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Orquidea" component={Orquidea} />
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Anturio" component={Anturio} />  
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Bougainville" component={Bougainville} />      
                <Stack.Screen
                options={{
                    title: '',
                    headerShown: false,
                  }}
                name="Administrador" component={Administrador} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
} 