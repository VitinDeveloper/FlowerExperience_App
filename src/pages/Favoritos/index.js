import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import { styles } from '../Favoritos/styleFavoritos.js'

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

    const navigation = useNavigation();

    return (

        <View style={styles.Header}>
            <View style={styles.iconsHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                <Image
                        source={require('./../../../src/Icons/navegacao.png')} style={{width:50, height:50}}
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <Image
                        source={require('./../../../src/Icons/usuario.png')} style={{width:50, height:50}}
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

                {/* Card 1 */}

                <View style={styles.card}>

                    <View style={styles.principalImage}>
                        <View style={styles.image}>
                            <Image
                                style={styles.plantas}
                                source={require('./../../../src/plantas/ZAMIOCULCA1.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.elementos}>
                        <View style={styles.nomePlanta}>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#8b8a7a', marginTop: 10, marginRight: 45, }}>Zamioculca</Text>
                        </View>
                        <View style={styles.descricao}>
                            <Text style={{ fontSize: 14, color: '#8b8a7a', marginTop: 5, marginRight: 30, }}>
                                A Zamioculca é uma planta originária da Tanzânia, na África.
                                Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.
                            </Text>
                        </View>
                        <View style={styles.principalBtn}>
                            <View style={styles.btnUm}>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='plus'
                                        size={25}
                                        color='white'
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnDois}>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='plus'
                                        size={25}
                                        color='white'
                                        style={{ transform: [{ rotate: '45deg' }] }} //style pra deixar o icone na posição de um X
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.linha}></View>

            </View>

        </View>

    );

}

function Footer() {

    const navigation = useNavigation();

    //     const handleNavigateToFeed = () => {
    //     navigation.navigate('Feed');
    //     navigation.popToTop(); // Isso fará um "pop" para a tela inicial ('Feed').
    //   };

    const handleNavigateToFeed = () => {
        navigation.reset({
            index: 0, //vetor de telas, que reinicia tudo, ou seja vai para tela de Feed = tela 0
            routes: [{ name: 'Feed' }] 
        });
    };

    return (

        <View style={styles.Footer}>

            <View style={styles.footerEsquerda}>
                <TouchableOpacity onPress={handleNavigateToFeed}>
                <Image
                        source={require('./../../../src/Icons/pesquisar.png')} style={{width:60, height:60}}
                        />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity onPress={() => navigation.navigate('Favoritos')} style={{ marginTop: 10 }}>
                <Image
                        source={require('./../../../src/Icons/favoritos.png')} style={{width:68, height:68}}
                        />
                </TouchableOpacity>
            </View>

            <View style={styles.footerDireita}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                <Image
                        source={require('./../../../src/Icons/feed.png')} style={{width:60, height:60}}
                        />
                </TouchableOpacity>
            </View>

        </View>

    );

}