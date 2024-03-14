import React from "react"
import {Painel} from "./style"
import { View, Image, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { IPage} from "../../../App"
import { useState } from "react"

export function PainelNavegation ({setPageI, p}: IPage) {

    let bola1 = require("../../assets/BolinhaBranca.png")
    let bola2 = require("../../assets/BolinhaPreta.png")
    let bola3 = require("../../assets/BolinhaBranca.png")

    if (p == 1) {
        bola1 = require("../../assets/BolinhaPreta.png")
        bola2 = require("../../assets/BolinhaBranca.png")
        bola3 = require("../../assets/BolinhaBranca.png")
    } else if (p == 2) {
        bola1 = require("../../assets/BolinhaBranca.png")
        bola2 = require("../../assets/BolinhaPreta.png")
        bola3 = require("../../assets/BolinhaBranca.png")
    } else if (p == 3) {
        bola1 = require("../../assets/BolinhaBranca.png")
        bola2 = require("../../assets/BolinhaBranca.png")
        bola3 = require("../../assets/BolinhaPreta.png")
    }

    return (
        <View style={Painel.container}>
            <TouchableOpacity onPress={() => setPageI(1)}>
                <Image source={bola1} style={Painel.bolinhas}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPageI(2)}>
                <Image source={bola2} style={Painel.bolinhas}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPageI(3)}>
                <Image source={bola3} style={Painel.bolinhas}/>
            </TouchableOpacity>
        </View>
    )
}