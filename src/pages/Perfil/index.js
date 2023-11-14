import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
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

            <Body />

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
        <ScrollView style={styles.ScrollTamanho}>
            <View style={{  height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{  maxWidth: 750, width: "95%", height: '100%', }}>


                    <View style={styles.HeaderBody}>

                        <Image
                            source={require('./../../../src/Icons/usuario.png')} style={{ width: 150, height: 150 }}
                        />

                    </View>




                    <View style={styles.DivisoesImputs}>
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
                    </View>



                    <View style={styles.DivisoesImputs}>
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
                    </View>


                    <View style={styles.DivisoesImputs}>
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
                                    <Ionicons name='eye' color='#8b8a7a' size={25} />
                                    :
                                    <Ionicons name='eye-off' color='#8b8a7a' size={25} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.DivisoesImputsButton}>
                      
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
            </View>
        </ScrollView>


    );
}

function Footer() {

    const navigation = useNavigation();

    return (

        <View style={styles.Footer}>

            <View style={styles.footerEsquerda}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <Image
                        source={require('./../../../src/Icons/feed.png')} style={{ width: 60, height: 60 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ marginTop: 10 }}>
                    <Image
                        source={require('./../../../src/Icons/usuario.png')} style={{ width: 68, height: 68 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
                    <Image
                        source={require('./../../../src/Icons/favoritos.png')} style={{ width: 60, height: 60 }}
                    />
                </TouchableOpacity>
            </View>

        </View>

    );
}