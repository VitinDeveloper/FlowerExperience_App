import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import Feather from "@expo/vector-icons/Feather"; //importar icones da rede

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            {/* <ScrollView style={styles.ScrollTamanho}> */}
                <Body />
            {/* </ScrollView> */}
            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24c28d',
    },

    //Cima
    Header: {
        height: '10%',
    },

    iconsHeader: {
        flex: 1,
        display: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
    },

    //Meio
    Body: {
        height: window.height * 0.8, // 60% da altura da janela
        borderRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4',
        alignItems: 'center',
    },

    conteudo: {
        backgroundColor: 'red',
        alignItems: 'center',
    },

    //Baixo
    Footer: {
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    //estilização do FooterEsquerda
    footerEsquerda: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //estilização do FooterMeio
    footerMeio: {
        height: '100%',
        backgroundColor: '#24c28ded',
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'relative',
        marginTop: -40,
        borderTopRightRadius: 450,
        borderTopLeftRadius: 500,

    },

    //estilização do FooterDireita
    footerDireita: {
        height: '100%',
        backgroundColor: '#24c28d',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //estilização da ScrollTamanho
    ScrollTamanho: {
        backgroundColor: 'red',
    },

});

function Header() {

    return (

        <View style={styles.Header}>
            <View style={styles.iconsHeader}>
                <TouchableOpacity>
                    <FontAwesome
                        name='bars'
                        size={50}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome
                        name='user'
                        size={50}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>
        </View>

    );

}

function Body() {

    return (

        <View style={styles.Body}>

        <ScrollView>
            <View style={styles.conteudo}>

            </View>
        </ScrollView>

        </View>

    );

}

function Footer() {

    return (

        <View style={styles.Footer}>

            <View style={styles.footerEsquerda}>
                <TouchableOpacity>
                    <FontAwesome
                        name='user'
                        size={60}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <FontAwesome
                        name='tree'
                        size={65}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity>
                    <FontAwesome
                        name='star'
                        size={60}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

        </View>

    );

}