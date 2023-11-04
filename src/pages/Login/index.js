import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar ícones da biblioteca FontAwesome
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import {styles} from '../Login/styleLogin.js'

// Objeto para armazenar dados do login
let armazenandoLogin = {
    nome: '',
    email: '',
    senha: ''
}

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
    )
}

// Função para renderizar a parte superior (Header)
function Header() {
    return (
        <View style={styles.Header}></View>
    );
}

// Função para renderizar a parte central (Body)
function Body() {
    const navigation = useNavigation();
    const route = useRoute();
    const objetoRecebidoCadastro = route.params.objetoRecebidoCadastro;
    const [entradaNome, setEntradaNome] = useState('')
    const [entradaSenha, setEntradaSenha] = useState('');
    const [inputSenha, setInputSenha] = useState(true);

    return (
        
        <View style={styles.Body}>
            <View style={styles.HeaderBody}>
                <Text style={styles.titleBody}>Login</Text>
            </View>

            <View style={styles.conteudo}>
                {/* Campo de entrada para o nome */}
                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Nome</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="inbox" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#8b8a7a'
                        value={entradaNome}
                        onChangeText={setEntradaNome}
                        placeholder='Nome'
                    />
                </View>

                {/* Campo de entrada para a senha */}
                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Senha</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor='#8b8a7a'
                        value={entradaSenha}
                        onChangeText={(texto) => setEntradaSenha(texto)}
                        secureTextEntry={inputSenha}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setInputSenha(!inputSenha)}>
                        {inputSenha ?
                            <Ionicons name='eye' color='#8b8a7a' size={25} /> //olho aberto
                            :
                            <Ionicons name='eye-off' color='#8b8a7a' size={25} /> //olho fechado
                        }
                    </TouchableOpacity>
                </View>

                {/* Link para recuperação de senha */}
                <TouchableOpacity>
                    <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
                    <View style={styles.horizontalLinha}></View>
                </TouchableOpacity>
            </View>

            {/* Botão de login na parte inferior */}
            <View style={styles.FooterBody}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <View style={styles.button}>
                        <Text style={styles.nomesBotao} onPress={Login}>Entrar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Função para lidar com o evento de login
    function Login() {

    console.log(objetoRecebidoCadastro)
    if (entradaNome === '' || entradaSenha === '') {
        alert('Preencha todos os campos');
    } else if (objetoRecebidoCadastro && objetoRecebidoCadastro.nome !== entradaNome) {
        alert('O Nome não confere');
    } else if (objetoRecebidoCadastro && objetoRecebidoCadastro.senha !== entradaSenha) {
        alert('A Senha inserida não confere');
        } else {
            // Se as credenciais estiverem corretas, armazene os dados e vá para a próxima tela
            armazenandoLogin.nome = objetoRecebidoCadastro.nome
            armazenandoLogin.email = objetoRecebidoCadastro.email
            armazenandoLogin.senha = objetoRecebidoCadastro.senha
            alert('Login bem-sucedido!')
            navigation.navigate('Feed', { objetoLogin: armazenandoLogin })
        }

    }

}

// Função para renderizar a parte inferior (Footer)
function Footer() {
    return (
        <View style={styles.Footer}></View>
    );
}
