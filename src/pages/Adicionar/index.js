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
        flexDirection: 'row',
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

    view_foto_um: {
        backgroundColor: 'red',
        width: "50%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },

    view_foto_dois: {
        backgroundColor: 'blue',
        width: "50%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },

    view_foto_um: {
      width: 150,
      height: 150,
      backgroundColor:"yellow",
      padding:5


    },

    view_foto_dois: {
      width: 150,
      height: 150,
      backgroundColor:"green",
      padding:50
  
  
      }
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

                <View style={styles.view_foto_um}>

                    <TouchableOpacity style={styles.add_foto_um}>
                    <Icon name="lock" size={30} color="#000" style={styles.icon} />


                    </TouchableOpacity>

                </View>

                <View style={styles.view_foto_dois}>



                </View>



            </View>

            <View style={styles.conteudo}>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Nome</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#8b8a7a'
                        value={entradaNome}
                        onChangeText={setEntradaNome}
                        placeholder='Digite o nome da planta...'
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Luz</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#8b8a7a'
                        value={entradaEmail}
                        onChangeText={setEntradaEmail}
                        placeholder='Digite sobre a iluminação...'
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Regas</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sobre as regas...'
                        placeholderTextColor='#8b8a7a'
                        value={entradaSenha}
                        onChangeText={(texto) => setEntradaSenha(texto)}
                        secureTextEntry={inputSenha}
                    />

                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Adubo</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sobre o adubo...'
                        placeholderTextColor='#8b8a7a'
                        value={entradaConfirmSenha}
                        onChangeText={(texto) => setEntradaConfirmSenha(texto)}
                        secureTextEntry={inputConfirmSenha}
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelEscritas}>Origem</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#8b8a7a'
                        value={entradaEmail}
                        onChangeText={setEntradaEmail}
                        placeholder='Digite sobre a origem...'
                    />
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
