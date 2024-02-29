import React from "react"
import {Painel} from "./style"
import { View, Image, TouchableOpacity } from "react-native"

export function PainelNavegation () {
    const BolinhaBranca = require("../../assets/BolinhaBranca.png")
    const BolinhaPreta = require("../../assets/BolinhaPreta.png")
    return (
        <View style={Painel.container}>
            <TouchableOpacity>
                <Image source={BolinhaPreta} style={Painel.bolinhas}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={BolinhaBranca} style={Painel.bolinhas}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={BolinhaBranca} style={Painel.bolinhas}/>
            </TouchableOpacity>
        </View>
    )
}