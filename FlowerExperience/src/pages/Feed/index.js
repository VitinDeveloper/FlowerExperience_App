import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, Image, Text } from 'react-native';
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
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },

    card: {
        height: 150,
        flexDirection: 'row',
    },

    principalImage: {
        height: 125,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        backgroundColor: 'white',
        height: 100,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15, // Borda arredondada
        borderWidth: 3, // Largura da borda
        borderColor: '#24c28ded', // Cor da borda
    },

    elementos: {
        height: 150,
        width: '65%',
    },

    nomePlanta: {
        height: 35,
        width: '65%',
        alignItems: 'center',
    },

    descricao: {
        height: 65,
        width: '100%',
        alignItems: 'center',
    },

    principalBtn: {
        height: 50,
        width: '100%',
        alignItems: 'flex-end'

    },

    btn: {
        backgroundColor: '#24c28ded',
        height: 45,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 3,
        marginRight: 5
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
        // backgroundColor: 'green',
        height: window.height * 0.8, // 60% da altura da janela
        borderRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4',

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

            <View style={styles.conteudo}>

                {/* Card 1 */}

                <View style={styles.card}>

                    <View style={styles.principalImage}>
                        <View style={styles.image}>
                            <FontAwesome
                                name='tree'
                                size={70}
                                color='#24c28ded'
                            />
                        </View>
                    </View>
                    <View style={styles.elementos}>
                        <View style={styles.nomePlanta}>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#8b8a7a', marginTop: 10, marginRight: 45, }}>Zamioculca</Text>
                        </View>
                        <View style={styles.descricao}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8b8a7a', marginTop: 5, marginRight: 30, }}>
                                A Zamioculca é uma planta originária da Tanzânia, na África.
                                Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.
                            </Text>
                        </View>
                        <View style={styles.principalBtn}>
                            <View style={styles.btn}>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='plus'
                                        size={40}
                                        color='white'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.linha}></View>

                {/* Card 2 */}

                <View style={styles.card}>

                    <View style={styles.principalImage}>
                        <View style={styles.image}>
                            <FontAwesome
                                name='tree'
                                size={70}
                                color='#24c28ded'
                            />
                        </View>
                    </View>
                    <View style={styles.elementos}>
                        <View style={styles.nomePlanta}>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#8b8a7a', marginTop: 10, marginRight: 55, }}>Dipladenia</Text>
                        </View>
                        <View style={styles.descricao}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#8b8a7a', marginTop: 5, marginRight: 30, }}>
                                A dipladenia, também conhecida como mandevilla,
                                é uma flor exuberante e encantadora que atrai
                                a atenção com sua beleza e versatilidade.
                            </Text>
                        </View>
                        <View style={styles.principalBtn}>
                            <View style={styles.btn}>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='plus'
                                        size={40}
                                        color='white'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.linha}></View>

                {/* Card 3 */}

                <View style={styles.card}>

                    <View style={styles.principalImage}>
                        <View style={styles.image}>
                            <FontAwesome
                                name='tree'
                                size={70}
                                color='#24c28ded'
                            />
                        </View>
                    </View>
                    <View style={styles.elementos}>
                        <View style={styles.nomePlanta}>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#8b8a7a', marginTop: 10, marginRight: 45, }}>Peperomias</Text>
                        </View>
                        <View style={styles.descricao}>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#8b8a7a', marginTop: 5, marginRight: 30, }}>
                                As peperomias são plantas famosas por serem extremamente fortes e não exigirem muita manutenção.
                                Há mais de 1.000 espécies, mas selecionamos 7 tipos de peperomia para você ter em casa.
                            </Text>
                        </View>
                        <View style={styles.principalBtn}>
                            <View style={styles.btn}>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='plus'
                                        size={40}
                                        color='white'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.linha}></View>

                {/* Card 4 */}

                <View style={styles.card}>

                    <View style={styles.principalImage}>
                        <View style={styles.image}>
                            <FontAwesome
                                name='tree'
                                size={70}
                                color='#24c28ded'
                            />
                        </View>
                    </View>
                    <View style={styles.elementos}>
                        <View style={styles.nomePlanta}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#8b8a7a', marginTop: 20, marginRight: 45, }}>Espada-de-são-jorge</Text>
                        </View>
                        <View style={styles.descricao}>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#8b8a7a', marginTop: 5, marginRight: 30, }}>
                                A espada-de-são-jorge, espada-de-santa-bárbara ou espada-de-iansă,
                                também conhecida como língua-de-sogra, rabo-de-lagarto e sansevieria,
                                é uma planta herbácea de origem africana.
                            </Text>
                        </View>
                        <View style={styles.principalBtn}>
                            <View style={styles.btn}>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='plus'
                                        size={40}
                                        color='white'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

                {/* final dos card */}

            </View>

        </View>

    );

}

function Footer() {

    const navigation = useNavigation();

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
                <TouchableOpacity onPress={() => navigation.navigate('Feed')} style={{ marginTop: 10 }}>
                    <FontAwesome
                        name='tree'
                        size={65}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
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