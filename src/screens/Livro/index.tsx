import React from "react";
import {Painel} from "./style"
import {styleContainer} from "../../styles/GlobalStyle"
import { Text, ImageBackground, Image, View } from 'react-native';
import {PainelNavegation} from "../../components/PainelNavegation/index"
import { IPage } from "../../../App";

export function Livro ({setPageI}: IPage) {
    const LeituraPNG = require("../../assets/Leitura.png")
    const LivroPNG = require("../../assets/Livro.png")
    return (
        <ImageBackground source={LeituraPNG} style={styleContainer.container}>
            <View style={Painel.container}>
                <Image source={LivroPNG} style={Painel.livro}/>
                <Text style={Painel.texto} >LIVROS</Text>
            </View>
            <PainelNavegation  setPageI={setPageI}/>
        </ImageBackground>
    )
}