import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar ícones da biblioteca FontAwesome
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';

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

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    // Estilos para o contêiner principal
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte superior (Header)
    Header: {
        height: '10%',
        backgroundColor: '#24c28d',
    },

    // Estilos para a parte central (Body)
    Body: {
        height: window.height * 0.80, // 80% da altura da janela
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4',
    },

    // Estilos para o cabeçalho dentro da parte central
    HeaderBody: {
        height: window.height * 0.2, // 20% da altura da janela
        justifyContent: 'center',
        backgroundColor: '#eaead4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 2,  // Flex para ocupar mais espaço vertical
        alignItems: 'center',
    },

    // Estilos para o título dentro do cabeçalho
    titleBody: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 13,
        color: '#8b8a7a',
    },

    // Estilos para o conteúdo dentro da parte central
    conteudo: {
        height: window.height * 0.5, // 50% da altura da janela
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaead4',
        padding: 10,
    },

    // Estilos para o rodapé dentro da parte central
    FooterBody: {
        height: window.height * 0.1, // 10% da altura da janela
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#eaead4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    //estilização dos Inputs da Tela
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

  //estilização dos Icones dentro do Input
  icon: {
    marginRight: 10,
    color: '#8b8a7a',
  },

  //estilização da Escrita no placeholder
  input: {
    flex: 1,
    color: '#8b8a7a',
    fontSize: 18,
  },

  //estilização de todos Inputs
  labelContainer: {
    width: '100%',
    margin: 8,
  },

  //estilização da Escrita de cima Dos inputs
  labelEscritas: {
    fontSize: 18,
    color: '#8b8a7a',
    fontWeight: 'bold',
  },

  //estilização dos Botões
  buttonStyle: {
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    width: '40%',
    height: 40,
    backgroundColor: '#24c28d',
    borderColor: '#24c28d',
    marginTop: -120,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //estilização da escrita de dentro dos botões
  nomesBotao: {
    color: '#eaead4',
    fontSize: 20,
  },


  //estilização da ScrollTamanho
  ScrollTamanho: {
    backgroundColor: '#24c28d',
  },

  esqueciSenha: {
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 15,
    color: '#2596be'
  },

  horizontalLinha: {
    borderBottomColor: '#2596be',
    borderBottomWidth: 1,
    marginTop: 2,
    marginBottom: 10,
  },

});


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
