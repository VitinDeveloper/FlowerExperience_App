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
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
  },

  //estilização do CimaBody
  HeaderBody: {
    height: window.height * 0.3, // 60% da altura da janela
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaead4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
  },

  //estilização do CimaBodyEsquerda
  HeaderBodyEsquerda: {
    height: '100%',
    width: '50%',
    backgroundColor: '#eaead4',

  },

  //ImagemUm CimaBodyEsquerda
  HeaderBodyImagemUm: {
    height: '85%',
    width: '100%',
    backgroundColor: '#eaead4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //imagem
  imagemUm: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#24c28d',
    borderRadius: 20,
  },

  //CimaBody Titulo da Planta
  HeaderBodyTituloPlanta: {
    height: '15%',
    width: '100%',
    backgroundColor: '#eaead4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //estilização do CimaBodyDireita
  HeaderBodyDireita: {
    height: '100%',
    width: '50%',
    backgroundColor: '#eaead4',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  //ImagemDois do CimaBodyDireita
  imagemDois: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#24c28d',
    borderRadius: 20,
  },

  //Informações da planta
  DivInforma: {
    height: window.height * 0.19,
    width: '100%',
    marginTop: 10,
    borderRadius: 25,
    borderColor: '#24c28d',
    // borderWidth: '1px',
    alignItems: 'center',
    flexDirection: 'row'
  },

  //View do Botão Favoritar
  DivBotao: {
    height: window.height * 0.10,
    width: '100%',
    marginTop: 10,
    borderRadius: 25,
    borderColor: '#24c28d',
    // borderWidth: '1px',
    alignItems: 'center',
    flexDirection: 'row'
  },

  //emoji das Informações
  emoji: {
    marginLeft: 10,
    height: '130px',
    width: '75px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaead4',
  },

  imgPlantas: {
    borderRadius: 25,
  },

  //Linha de Separação das Informações
  linha: {
    backgroundColor: '#8b8a7a',
    height: 1,
    width: '90%',
    alignSelf: 'center',
  },

  //Dimensão das Informações
  InformaTextoDiv: {
    height: '80%',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 45,
    padding: 10,
  },

  tituloDescricao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8b8a7a',
  },

  //Tamanho das letras nas informações
  TextoDescricao: {
    fontSize: 16,
    color: '#8b8a7a',
    marginLeft: 15,
    marginTop: 30,
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
    // backgroundColor: '#24c28d',
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
    // backgroundColor: '#24c28d',
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
            size={45}
            color='#8b8a7a'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <FontAwesome
            name='user'
            size={48}
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
        <View style={styles.HeaderBody}>

          <View style={styles.HeaderBodyEsquerda}>

            <View style={styles.HeaderBodyImagemUm}>

              <View style={styles.imagemUm}>
                <Image
                  source={require('./../../../src/plantas/BEGONIA1.png')}
                  style={{ width: '100%', height: '100%', borderRadius: 17, }}
                />
              </View>

            </View>


            <View style={styles.HeaderBodyTituloPlanta}>
              <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#8b8a7a' }}>Begonia</Text>
            </View>

          </View>
          <View style={styles.HeaderBodyDireita}>

            <View style={styles.imagemDois}>
              <Image
                source={require('./../../../src/plantas/BEGONIA2.png')}
                style={{ width: '100%', height: '100%', borderRadius: 17, }}
              />
            </View>

          </View>
        </View>

        <View style={styles.DivInforma}>

          <View style={styles.emoji}>

            <Text style={{ fontSize: 35 }}>☀️</Text>

          </View>

          <View style={styles.InformaTextoDiv}>
            <Text>
              <Text style={styles.tituloDescricao}>LUZ: </Text>
              <Text style={styles.TextoDescricao}>
              A temperatura ideal para uma begônia é de 20° a 28 graus, por isso  evite colocar a planta em locais com vento e frio.
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>


        <View style={styles.DivInforma}>

          <View style={styles.emoji}>
            <Text style={{ fontSize: 35 }}>💧</Text>
          </View>
          <View style={styles.InformaTextoDiv}>
            <Text>
              <Text style={styles.tituloDescricao}>ÁGUA: </Text>
              <Text style={styles.TextoDescricao}>
              Entre uma rega e outra espere o solo secar. Nunca encharque a planta ou molhe as folhas e flores
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>

        <View style={styles.DivInforma}>


          <View style={styles.emoji}>
            <Text style={{ fontSize: 35 }}>🌱</Text>
          </View>

          <View style={styles.InformaTextoDiv}>
            <Text>
              <Text style={styles.tituloDescricao}>FERTILIZANTE: </Text>
              <Text style={styles.TextoDescricao}>
              Durante a estação de crescimento (na Primavera e Verão), fertiliza a planta 1 x por mês com adubo líquido 20-20-20.
              </Text>
            </Text>
          </View>

        </View>

        <View style={styles.linha}></View>

        <View style={styles.DivInforma}>

          <View style={styles.emoji}>
            <Text style={{ fontSize: 35 }}>📍</Text>
          </View>
          <View style={styles.InformaTextoDiv}>
            <Text>
              <Text style={styles.tituloDescricao}>ORIGEM: </Text>
              <Text style={styles.TextoDescricao}>
              As begónias provêm principalmente da América tropical, de florestas úmidas ou nichos de umidade das savanas.
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>


        <View style={styles.DivBotao}>

          <View style={{ width: '100%', height: '100%', backgroundColor: '#eaead4', justifyContent: 'center', alignItems: 'center', }}>

            <TouchableOpacity>

              <View style={{ width: 135, height: 45, backgroundColor: '#24c28d', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 22, color: 'white', marginBottom: 5, }}> + Favoritar </Text>
              </View>

            </TouchableOpacity>

          </View>

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
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <FontAwesome
            name='home'
            size={45}
            color='#8b8a7a'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footerMeio}>
        <TouchableOpacity onPress={() => navigation.navigate('Informativo')} style={{ marginTop: 10 }}>
          <FontAwesome
            name='search'
            size={55}
            color='#8b8a7a'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footerDireita}>
        <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
          <FontAwesome
            name='star'
            size={45}
            color='#8b8a7a'
          />
        </TouchableOpacity>
      </View>

    </View>

  );

}
