import {Painel} from "./style"
import {styleContainer} from "../../styles/GlobalStyle"
import { Text, ImageBackground, Image, View } from 'react-native';
import {PainelNavegation} from "../../components/PainelNavegation/index"

export function Cinema () {
    const CinemaPNG = require("../../assets/Cinema.png")
    const ClaquetePNG = require("../../assets/Claquete.png")
    return (
        <ImageBackground source={CinemaPNG} style={styleContainer.container}>
            <View style={Painel.container}>
                <Image source={ClaquetePNG} style={Painel.claquete}/>
                <Text style={Painel.texto} >FILMES</Text>
            </View>
            <PainelNavegation/>
        </ImageBackground>
    )
}