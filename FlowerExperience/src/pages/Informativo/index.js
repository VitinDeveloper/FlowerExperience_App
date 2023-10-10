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
    height: '85%',
    width: '90%',
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
    height: '70%',
    width: '90%',
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

  //Emogi das Informações
  Emogi: {
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
    flex: 1
  },


  Textotitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8b8a7a',
    marginLeft: 30
  },

  //Tamanho das letras nas informações
  TextoDescricao: {
    fontSize: 16,
    fontWeight: 'bold',
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
        <View style={styles.HeaderBody}>

          <View style={styles.HeaderBodyEsquerda}>

            <View style={styles.HeaderBodyImagemUm}>

              <View style={styles.imagemUm}>
                {/* <Image
                  source={imagemPlantas1}
                  style={{ width: '100%', height: '100%', borderRadius: 20, }}
                /> */}
              </View>

            </View>


            <View style={styles.HeaderBodyTituloPlanta}>
              <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#8b8a7a' }}>Zamioculca</Text>
            </View>

          </View>
          <View style={styles.HeaderBodyDireita}>

            <View style={styles.imagemDois}>
              {/* <Image
                source={imagemPlantas2}
                style={{ width: '100%', height: '100%', borderRadius: 20, }}
              /> */}
            </View>

          </View>
        </View>

        <View style={styles.DivInforma}>

          <View style={styles.Emogi}>

            <Text style={{ fontSize: 35 }}>☀️</Text>

          </View>

          <View style={styles.InformaTextoDiv}>

            <Text style={styles.TextoDescricao}>
              LUZ: O recomendado é não deixar a planta em sol direto, para evitar que as folhas fiquem amareladas.
              As zamioculcas preferem a luz difusa ou o sol da manhã, e sobrevivem muito bem em ambientes internos.

            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>


        <View style={styles.DivInforma}>

          <View style={styles.Emogi}>
            <Text style={{ fontSize: 35 }}>💧</Text>
          </View>
          <View style={styles.InformaTextoDiv}>

            <Text style={styles.TextoDescricao}>

              ÁGUA: recomenda regá-la de duas a três vezes na semana, no máximo. No inverno, apenas uma rega por semana já é suficiente.
              “Isso acontece porque a zamioculca tem rizoma.

            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>

        <View style={styles.DivInforma}>


          <View style={styles.Emogi}>
            <Text style={{ fontSize: 35 }}>🌱</Text>
          </View>

          <View style={styles.InformaTextoDiv}>
            <Text style={styles.TextoDescricao}>
              FERTILIZANTE: E para oferecer minerais adequados para a planta, utilize adubo NPK, que fornece os principais nutrientes
              para a saúde da planta. A sigla do fertilizante NPK é uma relação dos três nutrientes: Nitrogênio, Fósforo e Potássio.
            </Text>
          </View>

        </View>

        <View style={styles.linha}></View>

        <View style={styles.DivInforma}>

          <View style={styles.Emogi}>
            <Text style={{ fontSize: 35 }}>📍</Text>
          </View>
          <View style={styles.InformaTextoDiv}>

            <Text style={styles.TextoDescricao}>
              ORIGEM: A Zamioculca é uma planta originária da Tanzânia, na África.
              Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.

            </Text>
          </View>
        </View>
        <View style={styles.linha}></View>


        <View style={styles.DivBotao}>

          <View style={{ width: '100%', height: '100%', backgroundColor: '#eaead4', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20, }}>

            <TouchableOpacity>

              <View style={{ width: 135, height: 35, backgroundColor: '#24c28d', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 25, color: 'white', }}>+ Favoritar</Text>
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
        <TouchableOpacity>
          <FontAwesome
            name='home'
            size={60}
            color='#8b8a7a'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footerMeio}>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <FontAwesome
            name='search'
            size={50}
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
