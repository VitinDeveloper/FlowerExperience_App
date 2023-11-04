import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

////Css da Tela de Favoritos\\\\
export const styles = StyleSheet.create({

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

    conteudo: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },

    titulo: {
        height: 100,
        justifyContent: 'center'
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
        backgroundColor: 'red',
        height: 100,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15, // Borda arredondada
        borderWidth: 3, // Largura da borda
        borderColor: '#24c28ded', // Cor da borda
    },

    plantas: {
        backgroundColor: 'white',
        height: 95,
        width: '100%',
        borderRadius: 12,

    },

    elementos: {
        height: 150,
        width: '65%',
    },

    nomePlanta: {
        height: 35,
        width: '100%',
    },

    descricao: {
        height: 65,
        width: '100%',
        alignItems: 'center',
    },

    principalBtn: {
        height: 50,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',

    },

    btnUm: {
        backgroundColor: '#24c28ded',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 3,
        marginRight: 5
    },
    btnDois: {
        backgroundColor: 'red',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 3,
        marginRight: 5
    },

    linha: {
        backgroundColor: '#8b8a7a',
        height: 1,
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
        height: window.height * 0.8, // 60% da altura da janela
        borderRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#eaead4',

    },

});
////Fim do Css da Tela de Favoritos\\\\