import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //importar icones da rede
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from '../Perfil/stylePerfil.js'

export default function App() {

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.ScrollTamanho}>
                <Body />
            </ScrollView>
            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}

function Header() {

    return (

        <View style={styles.Header}></View>

    );

}

function Body() {

    const [input, setInput] = useState('');
    const [senha, setSenha] = useState(true);

    return (

        <View style={styles.Body}>

            <View style={styles.HeaderBody}>

                <FontAwesome
                    name='user'
                    size={130}
                    color='#8b8a7a'
                />

            </View>

            <View style={styles.conteudo}>

                <View style={styles.labelContainer}>

                    <Text style={styles.labelEscritas}>Nome</Text>

                </View>

                <View style={styles.inputContainer}>

                    <Icon name="user" size={30} color="#8b8a7a" style={styles.icon} />

                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor='#8b8a7a'
                    />

                </View>

                <View style={styles.labelContainer}>

                    <Text style={styles.labelEscritas}>E-mail</Text>

                </View>

                <View style={styles.inputContainer}>

                    <Icon name="inbox" size={30} color="#000" style={styles.icon} />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='#8b8a7a'
                    />

                </View>

                <View style={styles.labelContainer}>

                    <Text style={styles.labelEscritas}>Senha</Text>

                </View>

                <View style={styles.inputContainer}>

                    <Icon name="lock" size={30} color="#000" style={styles.icon} />

                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='#8b8a7a'
                        value={input}
                        onChangeText={(texto) => setInput(texto)}
                        secureTextEntry={senha}
                    />

                    <TouchableOpacity style={styles.icon} onPress={() => setSenha(!senha)}>
                        {senha ?
                            <Ionicons name='eye' color='#8b8a7a' size={25} /> //olho aberto
                            :
                            <Ionicons name='eye-off' color='#8b8a7a' size={25} /> //olho fechado
                        }
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.FooterBody}>

                <View style={styles.buttonStyle}>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.nomesBotao}>Editar Usuário</Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.buttonStyle}>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.nomesBotao}>Excluir Usuário</Text>

                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );

}

function Footer() {

    const navigation = useNavigation();

    return (

        <View style={styles.Footer}>

            <View style={styles.footerEsquerda}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <FontAwesome
                        name='home'
                        size={45}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ marginTop: 10 }}>
                    <FontAwesome
                        name='user'
                        size={55}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
                    <FontAwesome
                        name='star'
                        size={45}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

        </View>

    );

}