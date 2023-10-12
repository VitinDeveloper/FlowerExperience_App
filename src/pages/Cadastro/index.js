import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //importar icones da rede
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import Feather from "@expo/vector-icons/Feather"; //importar icones da rede
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
    height: window.height * 0.10,
    backgroundColor: '#24c28d',
  },

  //Meio
  Body: {
    height: window.height * 0.85, // 60% da altura da janela
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: '2%',
    marginRight: '2%',
  },

  //estilização do CimaBody
  HeaderBody: {
    height: window.height * 0.2, // 60% da altura da janela
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaead4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  HeaderBodyText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8b8a7a',
  },

  //estilização do MeioBody
  conteudo: {
    height: window.height * 0.64, // 60% da altura da janela
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eaead4',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  //Baixo
  Footer: {
    height: window.height * 0.10,
    backgroundColor: '#24c28d',
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
    borderTopLeftRadius: 450,

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
    fontSize: 22,
    color: '#8b8a7a',
  },

  //estilização dos Botões
  buttonStyle: {
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 50,
    width: '40%',
    height: 40,
    backgroundColor: '#24c28d',
    borderColor: '#24c28d',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  //estilização da escrita de dentro dos botões
  nomesBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  //estilização da ScrollTamanho
  ScrollTamanho: {
    marginVertical: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

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

  const [input2, setInput2] = useState(''); //ConfirmPassword
  const [senha2, setSenha2] = useState(true); //ConfirmPassword

  return (

    <View style={styles.Body}>


      <View style={styles.HeaderBody}>

        <Text style={styles.HeaderBodyText}>Cadastre-se</Text>

      </View>

      <View style={styles.conteudo}>


        <View style={styles.labelContainer}>

          <Text style={styles.labelEscritas}>Nome</Text>

        </View>

        <View style={styles.inputContainer}>

          <Icon name="user" size={30} color="#000" style={styles.icon} />

          <TextInput
            style={styles.input}
            placeholderTextColor='#8b8a7a'
            placeholder="Username"
          />

        </View>

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

        <View style={styles.labelContainer}>

          <Text style={styles.labelEscritas}>Confirmar Senha</Text>

        </View>

        <View style={styles.inputContainer}>

          <Icon name="lock" size={30} color="#000" style={styles.icon} />

          <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            placeholderTextColor='#8b8a7a'
            value={input2}
            onChangeText={(texto) => setInput2(texto)}
            secureTextEntry={senha2}
          />

          <TouchableOpacity style={styles.icon} onPress={() => setSenha2(!senha2)}>
            {senha2 ?
              <Ionicons name='eye' color='#8b8a7a' size={25} /> //olho aberto
              :
              <Ionicons name='eye-off' color='#8b8a7a' size={25} /> //olho fechado
            }
          </TouchableOpacity>
        </View>

        <View style={styles.buttonStyle}>

          <TouchableOpacity style={styles.button}>

            <Text style={styles.nomesBotao}>Cadastrar</Text>

          </TouchableOpacity>

        </View>
      </View>


      {/* <View style={styles.FooterBody}>

        <View style={styles.buttonStyle}>

          <TouchableOpacity style={styles.button}>

            <Text style={styles.nomesBotao}>Cadastrar</Text>

          </TouchableOpacity>

        </View>

      </View> */}

    </View>

  );

}

function Footer() {

  return (

    <View style={styles.Footer}></View>

  );

}
