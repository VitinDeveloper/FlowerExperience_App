import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar ícones da rede
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from '../Adicionar/styleAdicionar.js'
import { useMeuContexto } from '../Contexto/index.js';


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

    const { createObject } = useMeuContexto()

    // Função para realizar o cadastro
    // function Cadastrar() {
    //     // if (entradaNome == '' || entradaEmail == '' || entradaSenha == '' || entradaConfirmSenha == '') {
    //     //     alert('Preencha todos os campos')
    //     // } else if (entradaSenha !== entradaConfirmSenha) {
    //     //     alert('As senhas não conferem')
    //     // } else {
    //     //     // Atribui os valores dos inputs ao objeto de armazenamento
    //     //     armazenandoCadastro.nome = entradaNome
    //     //     armazenandoCadastro.email = entradaEmail
    //     //     armazenandoCadastro.senha = entradaSenha
    //     //     armazenandoCadastro.confirmSenha = entradaConfirmSenha

    //     //     // Salva os dados do cadastro e os exibe no console
    //     //     // const infoCadastradas = armazenandoCadastro
    //     //     console.log(armazenandoCadastro)

    //     //     // Navega para a tela de login, passando os dados do cadastro como parâmetro
    //     //     navigation.navigate('Login', { objetoRecebidoCadastro: armazenandoCadastro })
    //     // }

    //     // const obj = {
    //     //     titulo,
    //     //     sobre,
    //     //     luz,
    //     //     agua,
    //     //     fertilizante,
    //     //     origem,
    //     //     imagensUm,
    //     //     imagensDois
    //     // }
    //     // createObject({obj})
    // }

    return (
        <View style={styles.Body}>
            <View style={styles.HeaderBody}>

                <View style={styles.view_foto_um}>

                    <TouchableOpacity style={styles.add_foto_um}>
                        <Icon name="camera" size={85} color="#24c28d" style={styles.icon_foto} />


                    </TouchableOpacity>

                </View>

                <View style={styles.view_foto_dois}>

                <TouchableOpacity style={styles.add_foto_um}>
                        <Icon name="camera" size={85} color="#24c28d" style={styles.icon_foto} />


                    </TouchableOpacity>

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
                    {/* <TouchableOpacity style={styles.button} onPress={Cadastrar}>
                        <Text style={styles.nomesBotao}>Cadastrar</Text>
                    </TouchableOpacity> */}
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
