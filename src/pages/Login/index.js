import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //importar icones da rede
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

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
    backgroundColor: '#24c28d',
  },

  //Meio
  Body: {
    height: window.height * 0.80, // 60% da altura da janela
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginLeft: '2%',
    marginRight: '2%',
  },

  //estilização do CimaBody
  HeaderBody: {
    height: window.height * 0.2, // 60% da altura da janela
    justifyContent: 'center',
    backgroundColor: '#eaead4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 2,
    alignItems: 'center',
  },
  titleBody: {
    fontSize: 40, // Tamanho do título
    fontWeight: 'bold', // Negrito
    marginLeft: 13,
    color: '#8b8a7a',
  },

  //estilização do MeioBody
  conteudo: {
    height: window.height * 0.5, // 60% da altura da janela
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaead4',
    padding: 10,

  },

  //estilização do BaixoBody
  FooterBody: {
    height: window.height * 0.1, // 60% da altura da janela
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
    marginTop: -30,
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

function Header() {

  return (

    <View style={styles.Header}></View>

  );

}

function Body() {

  const [input, setInput] = useState(''); //Password
  const [senha, setSenha] = useState(true); //Password
  const navigation = useNavigation();

  return (

    <View style={styles.Body}>

      <View style={styles.HeaderBody}>
        <Text style={styles.titleBody}>Login</Text>
      </View>

      <View style={styles.conteudo}>

        <View style={styles.labelContainer}>

          <Text style={styles.labelEscritas}>E-mail</Text>

        </View>

        <View style={styles.inputContainer}>

          <Icon name="inbox" size={30} color="#000" style={styles.icon} />

          <TextInput
            style={styles.input}
            placeholderTextColor='#8b8a7a'
            placeholder="Email"
          />

        </View>

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
              <Ionicons name='eye' color='#8b8a7a' size={25} /> //olho aberto
              :
              <Ionicons name='eye-off' color='#8b8a7a' size={25} /> //olho fechado
            }
          </TouchableOpacity>


        </View>

        <TouchableOpacity>
          <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
          <View style={styles.horizontalLinha}></View>
        </TouchableOpacity>

      </View>


      <View style={styles.FooterBody}>

        <TouchableOpacity style={styles.buttonStyle}>
          <View style={styles.button}>


            <Text style={styles.nomesBotao}>Entrar</Text>

          </View>
        </TouchableOpacity>


      </View>

    </View>

  );

}

function Footer() {

  return (

    <View style={styles.Footer}>



    </View>

  );

}