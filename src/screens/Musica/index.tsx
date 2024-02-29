import React from "react";
import {Painel} from "./style"
import {styleContainer} from "../../styles/GlobalStyle"
import { Text, ImageBackground, Image, View } from 'react-native';
import {PainelNavegation} from "../../components/PainelNavegation/index"

export function Musica () {
    const MusicaPNG = require("../../assets/Musica.png")
    const FonePNG = require("../../assets/Fone.png")
    return (
        <ImageBackground source={MusicaPNG} style={styleContainer.container}>
            <View style={Painel.container}>
                <Image source={FonePNG} style={Painel.fone}/>
                <Text style={Painel.texto} >MÚSICAS</Text>
            </View>
            <PainelNavegation/>
        </ImageBackground>
    )
}