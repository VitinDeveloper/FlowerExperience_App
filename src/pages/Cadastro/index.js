import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar ícones da rede
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Importar ícones da rede
import Feather from "@expo/vector-icons/Feather"; // Importar ícones da rede
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

// Objeto para armazenar dados do formulário de cadastro
let armazenandoCadastro = {
    nome: '',
    email: '',
    senha: '',
    confirmSenha: ''
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

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    // Estilos para o contêiner principal
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte superior (Header)
    Header: {
        height: window.height * 0.10,
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte central (Body)
    Body: {
        height: window.height * 0.85,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
    },

    // Estilos para o cabeçalho dentro da parte central
    HeaderBody: {
        height: window.height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    // Estilos para o texto dentro do cabeçalho
    HeaderBodyText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#8b8a7a',
    },

    // Estilos para o conteúdo dentro da parte central
    conteudo: {
        height: window.height * 0.64,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    // Estilos para o rodapé dentro da parte central
    FooterBody: {
        height: window.height * 0.1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#eaead4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    // Estilos para a parte inferior (Footer)
    Footer: {
        height: window.height * 0.10,
        backgroundColor: '#24c28d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    // Estilos para a parte esquerda do rodapé
    footerEsquerda: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Estilos para a parte central do rodapé
    footerMeio: {
        height: '100%',
        backgroundColor: '#24c28ded',
        width: '20%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'relative',
        marginTop: -40,
        borderTopRightRadius: 450,
        borderTopLeftRadius: 450,
    },

    // Estilos para a parte direita do rodapé
    footerDireita: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Estilos para os inputs da tela
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#24c28d',
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#24c28d',
    },

    // Estilos para os ícones dentro do input
    icon: {
        marginRight: 10,
        color: '#8b8a7a',
    },

    // Estilos para o texto do placeholder
    input: {
        flex: 1,
        color: '#8b8a7a',
        fontSize: 18,
    },

    // Estilos para todos os inputs
    labelContainer: {
        width: '100%',
        margin: 8,
    },

    // Estilos para o texto acima dos inputs
    labelEscritas: {
        fontSize: 22,
        color: '#8b8a7a',
    },

    // Estilos para os botões
    buttonStyle: {
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 50,
        width: '40%',
        height: 40,
        backgroundColor: '#24c28d',
        borderColor: '#24c28d',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    // Estilos para o texto dentro dos botões
    nomesBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    // Estilos para o tamanho do ScrollView
    ScrollTamanho: {
        marginVertical: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});

function Header() {
    return (
        <View style={styles.Header}></View>
    );
}

function Body() {
    // Hook para navegação
    const navigation = useNavigation();
    // Estados para os inputs
    const [entradaNome, setEntradaNome] = useState('')
    const [entradaEmail, setEntradaEmail] = useState('')
    const [entradaSenha, setEntradaSenha] = useState('')
    const [inputSenha, setInputSenha] = useState(true)
    const [entradaConfirmSenha, setEntradaConfirmSenha] = useState('')
    const [inputConfirmSenha, setInputConfirmSenha] = useState(true)

    // Função para realizar o cadastro
    function Cadastrar() {
        if (entradaNome == '' || entradaEmail == '' || entradaSenha == '' || entradaConfirmSenha == '') {
            alert('Preencha todos os campos')
        } else if (entradaSenha !== entradaConfirmSenha) {
            alert('As senhas não conferem')
        } else {
            // Atribui os valores dos inputs ao objeto de armazenamento
            armazenandoCadastro.nome = entradaNome
            armazenandoCadastro.email = entradaEmail
            armazenandoCadastro.senha = entradaSenha
            armazenandoCadastro.confirmSenha = entradaConfirmSenha

            // Salva os dados do cadastro e os exibe no console
            // const infoCadastradas = armazenandoCadastro
            console.log(armazenandoCadastro)

            // Navega para a tela de login, passando os dados do cadastro como parâmetro
            navigation.navigate('Login', { objetoRecebidoCadastro: armazenandoCadastro })
        }
    }

    return (
        <View style={styles.Body}>
            <View style={styles.HeaderBody}>
                <Text style={styles.HeaderBodyText}>Cadastre-se</Text>
            </View>

            <View style={styles.conteudo}>

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

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>E-mail</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="inbox" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#8b8a7a'
                        value={entradaEmail}
                        onChangeText={setEntradaEmail}
                        placeholder='Email'
                    />
                </View>

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

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Confirmar Senha</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor='#8b8a7a'
                        value={entradaConfirmSenha}
                        onChangeText={(texto) => setEntradaConfirmSenha(texto)}
                        secureTextEntry={inputConfirmSenha}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setInputConfirmSenha(!inputConfirmSenha)}>
                        {inputConfirmSenha ?
                            <Ionicons name='eye' color='#8b8a7a' size={25} /> //olho aberto
                            :
                            <Ionicons name='eye-off' color='#8b8a7a' size={25} /> //olho fechado
                        }
                    </TouchableOpacity>
                </View>

                {/* Botão de cadastro */}
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.button} onPress={Cadastrar}>
                        <Text style={styles.nomesBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

function Footer() {
    return (
        <View style={styles.Footer}></View>
    );
}
