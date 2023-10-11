import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, Image, Text, Button } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import Feather from "@expo/vector-icons/Feather"; //importar icones da rede

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
        // height: window.height * 0.8, // 60% da altura da janela
        // borderRadius: 20,
        // marginLeft: '2%',
        // marginRight: '2%',
        // backgroundColor: '#eaead4',
        // alignItems: 'center',
    },

    conteudo: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },

    titulo: {
        height: 100,
        justifyContent: 'center',
    },

    card: {
        height: 150,
        backgroundColor: 'green',
        flexDirection: 'row',
    },

    image: {
        backgroundColor: 'blue',
        height: 125,
        width: '35%',
    },

    elementos: {
        backgroundColor: 'purple',
        height: 150,
        width: '65%',
    },

    nomePlanta: {
        backgroundColor: 'red',
        height: 35,
        width: '65%',
        alignItems: 'center',
    },

    descricao: {
        backgroundColor: 'white',
        height: 65,
        width: '100%',
        alignItems: 'center',
    },

    favButton: {
        backgroundColor: 'black',
        height: 50,
        width: '100%',
        alignItems: 'flex-end'

    },

    button: {
        backgroundColor: 'pink',
        height: 50,
        width: '25%',
        alignItems: 'center',
    },

    linha: {
        backgroundColor: '#8b8a7a',
        height: 3,
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
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
        // backgroundColor: 'red',
        height: window.height * 0.8, // 60% da altura da janela
        borderRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4',
    },

});

function Header() {

    const navigation = useNavigation();

    return (

        <View style={styles.Header}>
            <View style={styles.iconsHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <FontAwesome
                        name='bars'
                        size={50}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
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


            <View style={styles.conteudo}>
                <View style={styles.titulo}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Minhas Favoritas</Text>
                </View>
                <View style={styles.listaFavoritos}>
                    <View style={styles.card}>

                        <View style={styles.image}>
                            {/* <Image source={require('')} /> */}
                        </View>
                        <View style={styles.elementos}>
                            <View style={styles.nomePlanta}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#8b8a7a' }}>Zamioculca</Text>
                            </View>
                            <View style={styles.descricao}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#8b8a7a' }}>
                                    A Zamioculca é uma planta originária da Tanzânia, na África.
                                    Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.
                                </Text>
                            </View>
                            <View style={styles.favButton}>
                                <View style={styles.button}>
                                    {/* <Button>
                                        <Image source={require('')} />
                                    </Button> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.linha}></View>
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
                <TouchableOpacity onPress={() => navigation.navigate('Informativo')}>
                    <FontAwesome
                        name='search'
                        size={60}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity onPress={() => navigation.navigate('Favoritos')} style={{ marginTop: 10 }}>
                    <FontAwesome
                        name='star'
                        size={65}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <FontAwesome
                        name='tree'
                        size={60}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

        </View>

    );

}