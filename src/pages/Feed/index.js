import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, Image, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede


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

    grid: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 15,
    },

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

    card: {
        height: 200,
        flexDirection: 'column',
        width: '95%',
        alignItems: 'center',
    },

    principalImage: {
        height: 110,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },

    image: {
        height: '150px',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15, // Borda arredondada
        borderWidth: 3, // Largura da borda
        borderColor: '#24c28ded', // Cor da borda
    },

    plantas: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        borderRadius: 12,
    },

    elementos: {
        height: 'auto',
        width: '65%',
        marginTop: 25,
    },

    nomePlanta: {
        height: 'auto',
        width: '100%',
    },

    descricao: {
        height: 'auto',
        width: '100%',
    },

    principalBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    btn: {
        backgroundColor: '#24c28ded',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 3,
    },
    linha: {
        backgroundColor: '#8b8a7a',
        height: 1,
        width: '90%',
        marginTop: 5,
        marginBottom: 5,
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

let plantInfo = [

    {
        titulo: "Zamioculca",
        sobre: "A Zamioculca é uma planta originária da Tanzânia, na África. Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.",
        luz: "O recomendado é não deixar a planta em sol direto, para evitar que as folhas fiquem amareladas. As zamioculcas preferem a luz difusa ou o sol da manhã, e sobrevivem muito bem em ambientes internos.",
        rega: "Recomenda-se regá-la de duas a três vezes na semana, no máximo. No inverno, apenas uma rega por semana já é suficiente. Isso acontece porque a zamioculca tem rizoma.",
        fertilizante: "Para oferecer minerais adequados para a planta, utilize fertilizante NPK, que fornece os principais nutrientes para a saúde da planta. A sigla do fertilizante NPK é uma relação dos três nutrientes: Nitrogênio, Fósforo e Potássio.",
        origem: "A Zamioculca é uma planta originária da Tanzânia, na África.",
        imagensUm: require('./../../../src/plantas/ZAMIOCULCA1.png'),
        imagensDois: require('./../../../src/plantas/ZAMIOCULCA2.png')
    },
    {
        titulo: "Dipladenia",
        sobre: "A dipladênia, também conhecida como mandevilla, é uma flor exuberante e encantadora que atrai a atenção com sua beleza e versatilidade.",
        luz: "A flor dipladênia precisa receber bastante luz indireta, pois os raios diretos podem queimar na superfície.",
        agua: "No verão, quando a terra seca mais rápido, é importante regar a planta dipladênia pelo menos 3 vezes por semana. Nas outras estações você pode intercalar a rega de 7 a 10 dias.",
        fertilizante: "O melhor substrato para usar na dipladênia em vaso é a combinação de turfa preta, que é um material fóssil originado da decomposição de restos vegetais com fibra de coco ou areia de rio, divididos em partes iguais.",
        origem: "Originária das regiões tropicais e subtropicais da América do Sul.",
        imagensUm: require('./../../../src/plantas/DIPLADENIA1.png'),
        imagensDois: require('./../../../src/plantas/DIPLADENIA2.png')
    },
    {
        titulo: "Peperômia",
        sobre: "As peperômias são plantas famosas por serem extremamente fortes e não exigirem muita manutenção.",
        luz: "A peperômia é considerada uma planta de meia-luz, ou seja, um pouco de luz é sempre bem-vindo, mas exagerar não. Evite colocá-las em um lugar na casa em que o sol bate a maior parte do dia.",
        agua: "Por ser uma planta facilmente adaptável ao ambiente, os cuidados não são os mais difíceis: regá-las três vezes por semana já é o bastante.",
        fertilizante: "Quanto à manutenção, faça adubações a cada três meses. Recomendamos fertilizantes orgânicos, que é granulado, de liberação lenta, nutre a planta, age por mais tempo e facilita o enraizamento.",
        origem: "Originária das regiões sul americanos, especificamente no Brasil.",
        imagensUm: require('./../../../src/plantas/PEPEROMIA1.png'),
        imagensDois: require('./../../../src/plantas/PEPEROMIA2.png')
    },
    {
        titulo: "Espada de São Jorge",
        sobre: "Originária da África, a espada de São Jorge, cujo nome científico é Sansevieria trifasciata, é considerada uma planta protetora, como a arruda e a aroeira, por exemplo.",
        luz: "A espada de São Jorge é uma planta bastante resistente e que sobrevive em áreas externas com sol e também em áreas internas com menos incidência de luz e vento.",
        agua: "Basicamente, para saber como cuidar de uma espada de São Jorge, basta regar de uma a duas vezes por semana.",
        fertilizante: "A adubação deve ser feita uma vez ao ano para a reposição dos nutrientes.",
        origem: "As espadas de São Jorge são originárias da África.",
        imagensUm: require('./../../../src/plantas/ESPADA1.png'),
        imagensDois: require('./../../../src/plantas/ESPADA2.png')
    },
    {
        titulo: "Samambaia",
        sobre: "As Samambaias são vegetais vasculares membros do táxon das Pteridófitas, possuem folhas verdadeiras, se reproduzem através de esporos e não produzem sementes ou flores.",
        luz: "Uma boa iluminação é essencial para que a samambaia cresça saudável. O recomendado é cultivá-la em locais à meia sombra. Assim ela poderá receber a energia dos raios do sol sem correr o risco de queimar suas folhas.",
        agua: "A samambaia é uma espécie que precisa do solo sempre úmido para absorver os nutrientes. Por isso, o recomendado é fazer a rega da planta diariamente, a menos que o amante de jardinagem perceba que a terra está próxima de ficar encharcada.",
        fertilizante: "Além de um solo úmido, as samambaias precisam que o substrato seja rico em material orgânico e nutrientes. A melhor opção é adquirir produtos que contenham fibra de coco na fórmula, pois ajuda a deixar o terreno mais drenável.",
        origem: "Tem sua origem na Oceania, com ocorrência na Ásia, Austrália e Madagascar.",
        imagensUm: require('./../../../src/plantas/SAMAMBAIA1.png'),
        imagensDois: require('./../../../src/plantas/SAMAMBAIA2.png')
    },
    {
        titulo: "Costela-de-Adão",
        sobre: "A Costela-de-Adão é uma planta inconfundível, charmosa e encantadora para se ter no jardim, quintal, dentro de casa ou em qualquer outro ambiente.",
        luz: "A espécie, por ser adaptável, pode ser cultivada em diferentes espaços. Porém, como gosta de luz, o local escolhido precisa ter claridade. Espaços com meia sombra e iluminação indireta são uma boa opção.",
        agua: "Regue a sua muda duas vezes na semana por conta das folhas mais largas, ela tem mais espaço para a evaporação da água.",
        fertilizante: "A Costela-de-Adão precisa de um substrato fresco e com boa drenagem para se desenvolver. A troca de vaso todo ano é recomendada, uma vez que ajuda a prolongar a vida da muda. Já o tamanho do recipiente deve ser levemente maior que a planta.",
        origem: "É originária do México e também de outras regiões tropicais do continente americano.",
        imagensUm: require('./../../../src/plantas/COSTELA1.png'),
        imagensDois: require('./../../../src/plantas/COSTELA2.png')
    },
    {
        titulo: "Orquídea",
        sobre: "Orquídeas são todas as plantas que compõem a família Orchidaceae, pertencente à ordem Asparagales, uma das maiores famílias de plantas existentes.",
        luz: "É importante que ela receba sua dose diária. No entanto, não se deve colocar os vasos em lugares onde o sol é direto. Será melhor optar por cômodos bem iluminados, mas em que o sol não entre de forma muito agressiva. Isso pode matar sua orquídea em pouco tempo.",
        agua: "O excesso de água pode ser mortal. Tente regar as orquídeas apenas uma vez por semana. O ideal é refrescar suas raízes colocando-as em um prato com água e, depois de um tempo, removê-las. Isso será mais do que suficiente para que sua flor cresça saudável.",
        fertilizante: "A melhor forma de aplicar o adubo líquido é juntando-o à água de rega. Podemos fertilizar, nas doses indicadas na embalagem, duas vezes por mês, ou colocar sempre fertilizante em todas as regas, mas usando metade da dose indicada na embalagem do produto.",
        origem: "A orquídea é originária do continente americano, no entanto, foi levada para a Europa no século XVIII por barcos da Marinha britânica.",
        imagensUm: require('./../../../src/plantas/ORQUIDEA1.png'),
        imagensDois: require('./../../../src/plantas/ORQUIDEA2.png')
    },
    {
        titulo: "Antúrio",
        sobre: "Anthurium é um género botânico pertencente à família Araceae. O antúrio é uma planta tradicional no paisagismo. Fez parte de uma moda antiga e teve seu brilho renovado recentemente.",
        luz: "Esta é uma planta de meia-sombra. Ou seja, sol em excesso pode prejudicá-la, já que prefere áreas com luz indireta.",
        agua: "Por ser uma planta tropical, o antúrio gosta de muita umidade! Por isso, a rega deve ocorrer com frequência: três vezes por semana durante as estações mais quentes e duas em períodos mais frios.",
        fertilizante: "Geralmente, a planta já é comercializada com o substrato ideal. Mantenha a nutrição da terra utilizando fertilizantes a cada três meses e sua planta ficará bela e saudável!",
        origem: "A origem dos Antúrios é a América Central e do Sul.",
        imagensUm: require('./../../../src/plantas/ANTURIO1.png'),
        imagensDois: require('./../../../src/plantas/ANTURIO2.png')
    },
    {
        titulo: "Bouganville",
        sobre: "No Brasil, diversas espécies desse grupo de plantas ainda recebem o nome de bouganville, três-marias, sempre-lustrosa, santa-rita, ceboleiro, roseiro, roseta, riso, pataguinha, pau-de-roseira e flor-de-papel.",
        luz: "Essa planta precisa de lugares com bastante sol. Ou seja, independentemente do local que você escolher, é importante que a espécie receba bastante iluminação.",
        agua: "A bougainville não gosta de água em excesso, especialmente na raiz. Por isso, o ideal é usar um regador para ter um controle maior da quantidade colocada no vaso ou no solo.",
        fertilizante: "Essa é uma planta que deve ser adubada utilizando fertilizantes NPK 4-14-8. Aplicar o adubo de 6 em 6 meses é o bastante para estimular a floração da bougainville.",
        origem: "Nativo do sudeste e nordeste brasileiro, além da Bolívia, Peru e Argentina.",
        imagensUm: require('./../../../src/plantas/BOUGANVILLE1.png'),
        imagensDois: require('./../../../src/plantas/BOUGANVILLE2.png')
    },
    {
        titulo: "Begônia",
        sobre: "A begônia vermelha é uma das plantas ornamentais mais comercializadas no mercado pelo seu significado e cor intensa. Essa variedade de begônia",
        luz: "A temperatura ideal para uma begônia é de 20° a 28 graus, por isso evite colocar a planta em locais com vento e frio.",
        agua: "Entre uma rega e outra espere o solo secar. Nunca encharque a planta ou molhe as folhas e flores e o solo precisa ter uma boa drenagem para não reter água.",
        fertilizante: "Durante a estação de crescimento (na Primavera e Verão), fertiliza a planta 1 vez por mês com adubo líquido 20-20-20. Não coloque a begônia num vaso demasiado grande pois a floração é mais intensa quando a planta sente as raízes um pouco apertadas no vaso.",
        origem: "As begónias provêm principalmente da América tropical, de florestas úmidas ou nichos de umidade das savanas.",
        imagensUm: require('./../../../src/plantas/BEGONIA1.png'),
        imagensDois: require('./../../../src/plantas/BEGONIA2.png'),
    },

]

function Body() {
    return (
        <View style={styles.Body}>
            <ScrollView contentContainerStyle={styles.grid}>

                {plantInfo.map((objPlanta, index) => (

                    <View style={styles.card} key={index}>

                        <View style={{ flexDirection: 'row', height: 200,}}>
                            <View style={styles.principalImage}>
                                <View style={styles.image}>
                                    <Image
                                        style={styles.plantas}
                                        source={objPlanta.imagensUm}
                                    />
                                </View>
                            </View>
                            <View style={styles.elementos}>
                                <View style={styles.nomePlanta}>
                                    <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#8b8a7a', marginTop: 10, marginRight: 45 }}>{objPlanta.titulo}</Text>
                                </View>
                                <View style={styles.descricao}>
                                    <Text style={{ fontSize: 14, color: '#8b8a7a', marginTop: 5, marginRight: 30 }}>
                                        {objPlanta.sobre}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.principalBtn}>
                                <View style={styles.btn}>
                                    <TouchableOpacity >
                                        <FontAwesome
                                            name='plus'
                                            size={25}
                                            color='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.linha}></View>
                    </View>

                ))}
            </ScrollView>
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
                        size={45}
                        color='#8b8a7a'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footerMeio}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')} style={{ marginTop: 10 }}>
                    <FontAwesome
                        name='tree'
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