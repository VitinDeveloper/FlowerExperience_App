import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from '@react-navigation/native';
import {styles} from '../Feed/styleFeed.js'

////Objeto da Tela de Informativo-MostarPlanta\\\\
let plantInfo = [

    {
        titulo: "Zamioculca",
        sobre: "A Zamioculca é uma planta originária da Tanzânia, na África. Ela pertence à família das Araceae e seu nome científico é Zamioculcas Zamiifolia.",
        luz: "O recomendado é não deixar a planta em sol direto, para evitar que as folhas fiquem amareladas. As zamioculcas preferem a luz difusa ou o sol da manhã, e sobrevivem muito bem em ambientes internos.",
        agua: "Recomenda-se regá-la de duas a três vezes na semana, no máximo. No inverno, apenas uma rega por semana já é suficiente. Isso acontece porque a zamioculca tem rizoma.",
        fertilizante: "Para oferecer minerais adequados para a planta, utilize fertilizante NPK, que fornece os principais nutrientes para a saúde da planta. A sigla do fertilizante NPK é uma relação dos três nutrientes: Nitrogênio, Fósforo e Potássio.",
        origem: "A Zamioculca é uma planta originária da Tanzânia, na África.",
        imagensUm: require('./../../../src/plantas/ZAMIOCULCA1.png'),
        imagensDois: require('./../../../src/plantas/ZAMIOCULCA2.png'),
        id: 0
    },
    {
        titulo: "Dipladenia",
        sobre: "A dipladênia, também conhecida como mandevilla, é uma flor exuberante e encantadora que atrai a atenção com sua beleza e versatilidade.",
        luz: "A flor dipladênia precisa receber bastante luz indireta, pois os raios diretos podem queimar na superfície.",
        agua: "No verão, quando a terra seca mais rápido, é importante regar a planta dipladênia pelo menos 3 vezes por semana. Nas outras estações você pode intercalar a rega de 7 a 10 dias.",
        fertilizante: "O melhor substrato para usar na dipladênia em vaso é a combinação de turfa preta, que é um material fóssil originado da decomposição de restos vegetais com fibra de coco ou areia de rio, divididos em partes iguais.",
        origem: "Originária das regiões tropicais e subtropicais da América do Sul.",
        imagensUm: require('./../../../src/plantas/DIPLADENIA1.png'),
        imagensDois: require('./../../../src/plantas/DIPLADENIA2.png'),
        id: 1
    },
    {
        titulo: "Peperômia",
        sobre: "As peperômias são plantas famosas por serem extremamente fortes e não exigirem muita manutenção.",
        luz: "A peperômia é considerada uma planta de meia-luz, ou seja, um pouco de luz é sempre bem-vindo, mas exagerar não. Evite colocá-las em um lugar na casa em que o sol bate a maior parte do dia.",
        agua: "Por ser uma planta facilmente adaptável ao ambiente, os cuidados não são os mais difíceis: regá-las três vezes por semana já é o bastante.",
        fertilizante: "Quanto à manutenção, faça adubações a cada três meses. Recomendamos fertilizantes orgânicos, que é granulado, de liberação lenta, nutre a planta, age por mais tempo e facilita o enraizamento.",
        origem: "Originária das regiões sul americanos, especificamente no Brasil.",
        imagensUm: require('./../../../src/plantas/PEPEROMIA1.png'),
        imagensDois: require('./../../../src/plantas/PEPEROMIA2.png'),
        id: 2
    },
    {
        titulo: "Espada de São Jorge",
        sobre: "Originária da África, a espada de São Jorge, cujo nome científico é Sansevieria trifasciata, é considerada uma planta protetora, como a arruda e a aroeira, por exemplo.",
        luz: "A espada de São Jorge é uma planta bastante resistente e que sobrevive em áreas externas com sol e também em áreas internas com menos incidência de luz e vento.",
        agua: "Basicamente, para saber como cuidar de uma espada de São Jorge, basta regar de uma a duas vezes por semana.",
        fertilizante: "A adubação deve ser feita uma vez ao ano para a reposição dos nutrientes.",
        origem: "As espadas de São Jorge são originárias da África.",
        imagensUm: require('./../../../src/plantas/ESPADA1.png'),
        imagensDois: require('./../../../src/plantas/ESPADA2.png'),
        id: 3
    },
    {
        titulo: "Samambaia",
        sobre: "As Samambaias são vegetais vasculares membros do táxon das Pteridófitas, possuem folhas verdadeiras, se reproduzem através de esporos e não produzem sementes ou flores.",
        luz: "Uma boa iluminação é essencial para que a samambaia cresça saudável. O recomendado é cultivá-la em locais à meia sombra. Assim ela poderá receber a energia dos raios do sol sem correr o risco de queimar suas folhas.",
        agua: "A samambaia é uma espécie que precisa do solo sempre úmido para absorver os nutrientes. Por isso, o recomendado é fazer a rega da planta diariamente, a menos que o amante de jardinagem perceba que a terra está próxima de ficar encharcada.",
        fertilizante: "Além de um solo úmido, as samambaias precisam que o substrato seja rico em material orgânico e nutrientes. A melhor opção é adquirir produtos que contenham fibra de coco na fórmula, pois ajuda a deixar o terreno mais drenável.",
        origem: "Tem sua origem na Oceania, com ocorrência na Ásia, Austrália e Madagascar.",
        imagensUm: require('./../../../src/plantas/SAMAMBAIA1.png'),
        imagensDois: require('./../../../src/plantas/SAMAMBAIA2.png'),
        id: 4
    },
    {
        titulo: "Costela-de-Adão",
        sobre: "A Costela-de-Adão é uma planta inconfundível, charmosa e encantadora para se ter no jardim, quintal, dentro de casa ou em qualquer outro ambiente.",
        luz: "A espécie, por ser adaptável, pode ser cultivada em diferentes espaços. Porém, como gosta de luz, o local escolhido precisa ter claridade. Espaços com meia sombra e iluminação indireta são uma boa opção.",
        agua: "Regue a sua muda duas vezes na semana por conta das folhas mais largas, ela tem mais espaço para a evaporação da água.",
        fertilizante: "A Costela-de-Adão precisa de um substrato fresco e com boa drenagem para se desenvolver. A troca de vaso todo ano é recomendada, uma vez que ajuda a prolongar a vida da muda. Já o tamanho do recipiente deve ser levemente maior que a planta.",
        origem: "É originária do México e também de outras regiões tropicais do continente americano.",
        imagensUm: require('./../../../src/plantas/COSTELA1.png'),
        imagensDois: require('./../../../src/plantas/COSTELA2.png'),
        id: 5
    },

    {
        titulo: "Orquídea",
        sobre: "Orquídeas são todas as plantas que compõem a família Orchidaceae, pertencente à ordem Asparagales, uma das maiores famílias de plantas existentes.",
        luz: "É importante que ela receba sua dose diária. No entanto, não se deve colocar os vasos em lugares onde o sol é direto. Será melhor optar por cômodos bem iluminados, mas em que o sol não entre de forma muito agressiva. Isso pode matar sua orquídea em pouco tempo.",
        agua: "O excesso de água pode ser mortal. Tente regar as orquídeas apenas uma vez por semana. O ideal é refrescar suas raízes colocando-as em um prato com água e, depois de um tempo, removê-las. Isso será mais do que suficiente para que sua flor cresça saudável.",
        fertilizante: "A melhor forma de aplicar o adubo líquido é juntando-o à água de rega. Podemos fertilizar, nas doses indicadas na embalagem, duas vezes por mês, ou colocar sempre fertilizante em todas as regas, mas usando metade da dose indicada na embalagem do produto.",
        origem: "A orquídea é originária do continente americano, no entanto, foi levada para a Europa no século XVIII por barcos da Marinha britânica.",
        imagensUm: require('./../../../src/plantas/ORQUIDEA1.png'),
        imagensDois: require('./../../../src/plantas/ORQUIDEA2.png'),
        id: 6
    },

    {
        titulo: "Antúrio",
        sobre: "Anthurium é um género botânico pertencente à família Araceae. O antúrio é uma planta tradicional no paisagismo. Fez parte de uma moda antiga e teve seu brilho renovado recentemente.",
        luz: "Esta é uma planta de meia-sombra. Ou seja, sol em excesso pode prejudicá-la, já que prefere áreas com luz indireta.",
        agua: "Por ser uma planta tropical, o antúrio gosta de muita umidade! Por isso, a rega deve ocorrer com frequência: três vezes por semana durante as estações mais quentes e duas em períodos mais frios.",
        fertilizante: "Geralmente, a planta já é comercializada com o substrato ideal. Mantenha a nutrição da terra utilizando fertilizantes a cada três meses e sua planta ficará bela e saudável!",
        origem: "A origem dos Antúrios é a América Central e do Sul.",
        imagensUm: require('./../../../src/plantas/ANTURIO1.png'),
        imagensDois: require('./../../../src/plantas/ANTURIO2.png'),
        id: 7
    },
    {
        titulo: "Bouganville",
        sobre: "No Brasil, diversas espécies desse grupo de plantas ainda recebem o nome de bouganville, três-marias, sempre-lustrosa, santa-rita, ceboleiro, roseiro, roseta, riso, pataguinha, pau-de-roseira e flor-de-papel.",
        luz: "Essa planta precisa de lugares com bastante sol. Ou seja, independentemente do local que você escolher, é importante que a espécie receba bastante iluminação.",
        agua: "A bougainville não gosta de água em excesso, especialmente na raiz. Por isso, o ideal é usar um regador para ter um controle maior da quantidade colocada no vaso ou no solo.",
        fertilizante: "Essa é uma planta que deve ser adubada utilizando fertilizantes NPK 4-14-8. Aplicar o adubo de 6 em 6 meses é o bastante para estimular a floração da bougainville.",
        origem: "Nativo do sudeste e nordeste brasileiro, além da Bolívia, Peru e Argentina.",
        imagensUm: require('./../../../src/plantas/BOUGANVILLE1.png'),
        imagensDois: require('./../../../src/plantas/BOUGANVILLE2.png'),
        id: 8
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
        id: 9
    },

]

const Stack = createNativeStackNavigator();
////Navegação entre Telas\\\\
export default function Feed() {

    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Body" component={Body}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="App" component={App}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MostrarPlanta" component={MostrarPlanta}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
////Fim da Navegação entre Telas\\\\


////App Da Tela de Feed\\\\
export function App() {

    const navigation = useNavigation()
    const [mostrarinforma, setMostrarinforma] = useState(<Body />);

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.ScrollTamanho}>
                {mostrarinforma}
            </ScrollView>
            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}
////Fim do App Da Tela de Feed\\\\

////Body da Tela de Feed\\\\
function Body() {

    const navigation = useNavigation()

    return (

        <View style={styles.container}>

            <View style={styles.Header}>
                <View style={styles.iconsHeader}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        < FontAwesome
                            name='bars'
                            size={45}
                            color='#8b8a7a'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Administrador')}>
                        <FontAwesome
                            name='user'
                            size={48}
                            color='#8b8a7a'
                        />
                    </TouchableOpacity>
                </View>
            </View >

            <ScrollView style={styles.ScrollTamanho}>

                <View style={styles.Body}>

                    <ScrollView contentContainerStyle={styles.grid}>

                        {plantInfo.map((objPlanta, index) => (

                            <View style={styles.card} key={index}>

                                <View style={{ flexDirection: 'row', height: 200, }}>
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
                                            <Text style={{ fontSize: 14, color: '#8b8a7a', marginTop: 5, marginRight: 30 }}>{objPlanta.sobre}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.principalBtn}>
                                        <View style={styles.btn}>
                                            <TouchableOpacity onPress={() => {
                                                // setId(objPlanta.id)
                                                // navigation.navigate('MostrarPlanta')
                                                navigation.navigate('MostrarPlanta', { id: objPlanta.id });
                                            }}>
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

            </ScrollView>

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

        </View>

    );
}
////Fim da Tela de Feed\\\\



////Tela de Informativo-Função para Mostrar toda tela ao clicar nos Botões da Tela de Feed\\\\
function MostrarPlanta() {

    const route = useRoute();
    const idEscolhido = route.params.id;
    const planta = plantInfo.find((planta) => planta.id === idEscolhido);

    const { titulo, sobre, luz, agua, fertilizante, origem, imagemUm, imagemDois, id } = planta;

    console.log(titulo)

    console.log(idEscolhido)
    const navigation = useNavigation()

    // for (let index = 0; index < plantInfo.length; index++) {
    //     if (plantInfo[index].id == id) {
    //         setPlanta(plantInfo[index])

    //     }

    // }

    return (

        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.iconsHeader}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        < FontAwesome
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
            </View >
            <ScrollView style={styles.ScrollTamanho}>
                <View style={styles.Body}>
                    <View style={styles.conteudo}>
                        <View style={styles.HeaderBody}>
                            <View style={styles.HeaderBodyEsquerda}>
                                <View style={styles.HeaderBodyImagemUm}>
                                    <View style={styles.imagemUm}>
                                        <Image
                                            source={planta.imagensUm}
                                            style={{ width: '100%', height: '100%', borderRadius: 17, }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.HeaderBodyTituloPlanta}>
                                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#8b8a7a' }}>{titulo}</Text>
                                </View>
                            </View>
                            <View style={styles.HeaderBodyDireita}>
                                <View style={styles.imagemDois}>
                                    <Image
                                        source={planta.imagensDois}
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
                                    <Text style={styles.TextoDescricao}>{planta.luz}</Text>
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
                                    <Text style={styles.TextoDescricao}>{planta.agua}</Text>
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
                                    <Text style={styles.TextoDescricao}>{planta.fertilizante}</Text>
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
                                    <Text style={styles.TextoDescricao}>{planta.origem}</Text>
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
            </ScrollView>
            <View style={styles.Footer}>
                <View style={styles.footerEsquerda}>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                        <FontAwesome
                            name='search'
                            size={45}
                            color='#8b8a7a'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.footerMeio}>
                    <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginTop: 10 }}>
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
        </View>
    );
}
////Fim da Função MostrarPlanta\\\\