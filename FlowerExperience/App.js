import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from "./src/pages/Feed";
import Favoritos from "./src/pages/Favoritos";

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
            </Stack.Navigator>
        </NavigationContainer>
    )
} 