import React from "react"
import {Painel} from "./style"
import { View, Image, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { IPage } from "../../../App"
import { useState } from "react"
interface IButton extends TouchableOpacityProps {
    onPressI: () => void
}

export function PainelNavegation ({setPageI}: IPage) {
    let bola1 = require("../../assets/BolinhaBranca.png")
    let bola2 = require("../../assets/BolinhaPreta.png")
    let bola3 = require("../../assets/BolinhaBranca.png")

    const [cor, setCor] = useState(1)
    
    function mudarCor (i:number) {
        setPageI(i)
    }

    return (
        <View style={Painel.container}>
            <TouchableOpacity onPress={() => mudarCor(1)}>
                <Image source={bola1} style={Painel.bolinhas}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => mudarCor(2)}>
                <Image source={bola2} style={Painel.bolinhas}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => mudarCor(3)}>
                <Image source={bola3} style={Painel.bolinhas}/>
            </TouchableOpacity>
        </View>
    )
}